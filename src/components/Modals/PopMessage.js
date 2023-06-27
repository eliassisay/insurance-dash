import React from 'react';
import axiosinstance from '../../Axios/Axios';
import { useStateValue } from '../../Context/StateProvider';
export default function PopMessage({ from, to }) {
  const [{ userEmail }] = useStateValue();
  const [showModal, setShowModal] = React.useState(false);
  const [message, setMessage] = React.useState('');
  const sendmessage = (e) => {
    console.log('emailllll', userEmail);
    e.preventDefault();
    axiosinstance
      .post('/sendmessage', {
        to: 'samuel@gmail.com',
        from: userEmail,
        message: message,
      })
      .then((res) => {
        console.log(res, 'sennnnt');
      })
      .catch((err) => {
        console.log(err);
      });
    setShowModal(false);
  };
  return (
    <>
      <button
        className="bg-success text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        support
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-bold">ask anything</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="mb-6 text-xl font-semibold text-black dark:text-black">
                    <div className="input-group">
                      <input
                        onChange={(e) => {
                          setMessage(e.target.value);
                        }}
                        type="text"
                        id="Message"
                      />
                    </div>
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="bg-danger text-white background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-success text-white active:bg-emerald-600 font-bold uppercase text-sm px-5 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={(e) => sendmessage(e)}
                  >
                    send
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
