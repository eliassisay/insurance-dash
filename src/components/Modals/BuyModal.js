import { useState } from 'react';
import { useStateValue } from '../../Context/StateProvider';
import axiosinstance3 from '../../Axios/Axios3';
import { createRouter } from '@remix-run/router';
import { useNavigate } from 'react-router-dom';
export default function BuyModal({ name, price, stockName }) {
  const [showModal, setShowModal] = useState(false);

  const [enabled, setEnabled] = useState(false);
  const [buy, setBuy] = useState(true);
  const [amountbuy, setamountbuy] = useState(0);
  const [amountsell, setamountsell] = useState(0);
  const [message, setmessage] = useState(false);
  const [error, setError] = useState(false);
  const [insurance, setInsurance] = useState(false);

  const [{ company, userEmail, currentCompany }, dispatch] = useStateValue();
  const buyStock = () => {
    //console.log(company, userEmail, currentCompany, 'uisyruiyeruiyweuiyui');
    axiosinstance3
      .post('/buyStock', {
        companyName: name,
        username: userEmail,
        amount: amountbuy,
        price: price * amountbuy,
        stockName: stockName,
        insured: insurance,
      })
      .then((res) => {
        if (res.status == '200') {
          console.log(amountbuy, 'Buyyyyyy');
          setmessage(res.data.message);
          setTimeout(() => {
            setmessage(false);
            setShowModal(false);
          }, 2000);
        }
        if (res.status == '400') {
          setError(res.data.error);
          console.log(res.data.error);
          setTimeout(() => {
            setError(false);
          }, 2000);
        }
      })
      .catch((err) => {
        console.log(err);
        setError(err.response.data.error);
        setTimeout(() => {
          setError(false);
        }, 2000);
      });
  };

  const sellStock = () => {
    //console.log(company, userEmail, currentCompany, 'uisyruiyeruiyweuiyui');
    axiosinstance3
      .post('/company/sellStock', {
        companyName: name,
        userName: userEmail,
        amount: amountsell,
      })
      .then((res) => {
        if (res.status == '200') {
          console.log(amountsell, name, userEmail, 'Selllllllll', res);
          setmessage(`succefully sold stock from ${name}`);
          setTimeout(() => {
            setmessage(false);
            setShowModal(false);
          }, 2000);
        }
        if (res.status == '400') {
          setError(res.data.error);
          console.log(res.data.error);
          setTimeout(() => {
            setError(false);
            //setShowModal(true);
          }, 2000);
        }
      })
      .catch((err) => {
        console.log(err);
        setError(err.response.data.error);
        setTimeout(() => {
          setError(false);
        }, 2000);
      });
  };

  return (
    <>
      <div className="flex items-center justify-center h-30">
        <button
          className="px-6 py-3 text-purple-100 bg-purple-600 rounded-md border-2 border-graydark "
          type="button"
          onClick={() => {
            setShowModal(true);
          }}
        >
          Buy/Sell
        </button>
      </div>

      {showModal ? (
        <>
          <div className="fixed inset-0 z-10 overflow-y-auto ">
            <div
              className="fixed inset-0 w-full h-full bg-black opacity-40"
              onClick={() => setShowModal(false)}
            ></div>
            <div className="flex items-center min-h-screen ">
              <div className="relative w-full max-w-lg p-4 mx-auto bg-transparent rounded-md shadow-lg dark:bg-transparent">
                <div className="mt-3 sm:flex">
                  <div className="mt-2 text-center sm:ml-4 sm:text-left">
                    <div className="col-span-12 rounded-sm border  border-stroke bg-white p-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-4">
                      <div className="mb-4 justify-between gap-4 sm:flex">
                        <div>
                          <h4 className="text-xl font-semibold text-black dark:text-white">
                            stock Buy/Sell
                          </h4>

                          {error && (
                            <div className="flex w-full border-l-6 border-[#F87171] bg-[#F87171] bg-opacity-[15%] px-7 py-8 shadow-md dark:bg-[#1B1B24] dark:bg-opacity-30 md:p-9">
                              <div className="mr-5 flex h-9 w-full max-w-[36px] items-center justify-center rounded-lg bg-[#F87171]">
                                <svg
                                  width="13"
                                  height="13"
                                  viewBox="0 0 13 13"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M6.4917 7.65579L11.106 12.2645C11.2545 12.4128 11.4715 12.5 11.6738 12.5C11.8762 12.5 12.0931 12.4128 12.2416 12.2645C12.5621 11.9445 12.5623 11.4317 12.2423 11.1114C12.2422 11.1113 12.2422 11.1113 12.2422 11.1113C12.242 11.1111 12.2418 11.1109 12.2416 11.1107L7.64539 6.50351L12.2589 1.91221L12.2595 1.91158C12.5802 1.59132 12.5802 1.07805 12.2595 0.757793C11.9393 0.437994 11.4268 0.437869 11.1064 0.757418C11.1063 0.757543 11.1062 0.757668 11.106 0.757793L6.49234 5.34931L1.89459 0.740581L1.89396 0.739942C1.57364 0.420019 1.0608 0.420019 0.740487 0.739944C0.42005 1.05999 0.419837 1.57279 0.73985 1.89309L6.4917 7.65579ZM6.4917 7.65579L1.89459 12.2639L1.89395 12.2645C1.74546 12.4128 1.52854 12.5 1.32616 12.5C1.12377 12.5 0.906853 12.4128 0.758361 12.2645L1.1117 11.9108L0.758358 12.2645C0.437984 11.9445 0.437708 11.4319 0.757539 11.1116C0.757812 11.1113 0.758086 11.111 0.75836 11.1107L5.33864 6.50287L0.740487 1.89373L6.4917 7.65579Z"
                                    fill="#ffffff"
                                    stroke="#ffffff"
                                  ></path>
                                </svg>
                              </div>
                              <div className="w-full">
                                <h5 className="mb-3 font-semibold text-[#B45454]">
                                  Error
                                </h5>
                                <ul>
                                  <li className="leading-relaxed text-[#CD5D5D]">
                                    {error}
                                  </li>
                                </ul>
                              </div>
                            </div>
                          )}
                          {message && (
                            <div className="flex w-full border-l-6 border-[#34D399] bg-[#34D399] bg-opacity-[15%] px-7 py-8 shadow-md dark:bg-[#1B1B24] dark:bg-opacity-30 md:p-9">
                              <div className="mr-5 flex h-9 w-full max-w-[36px] items-center justify-center rounded-lg bg-[#34D399]">
                                <svg
                                  width="16"
                                  height="12"
                                  viewBox="0 0 16 12"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M15.2984 0.826822L15.2868 0.811827L15.2741 0.797751C14.9173 0.401867 14.3238 0.400754 13.9657 0.794406L5.91888 9.45376L2.05667 5.2868C1.69856 4.89287 1.10487 4.89389 0.747996 5.28987C0.417335 5.65675 0.417335 6.22337 0.747996 6.59026L0.747959 6.59029L0.752701 6.59541L4.86742 11.0348C5.14445 11.3405 5.52858 11.5 5.89581 11.5C6.29242 11.5 6.65178 11.3355 6.92401 11.035L15.2162 2.11161C15.5833 1.74452 15.576 1.18615 15.2984 0.826822Z"
                                    fill="white"
                                    stroke="white"
                                  ></path>
                                </svg>
                              </div>
                              <div className="w-full">
                                <h5 className="mb-3 text-lg font-semibold text-black dark:text-[#34D399] ">
                                  Successfull request
                                </h5>
                                <p className="text-base leading-relaxed text-body">
                                  {message}
                                </p>
                              </div>
                            </div>
                          )}
                        </div>
                        <div>
                          <div className="relative z-20 inline-block">
                            <select
                              onChange={() => {
                                setBuy(!buy);
                              }}
                              name="#"
                              id="#"
                              className="relative z-20 inline-flex appearance-none bg-transparent py-1 pl-3 pr-8 text-sm font-medium outline-none"
                            >
                              <option value="">BUY</option>
                              <option value="">SELL</option>
                            </select>
                            <span className="absolute top-1/2 right-3 z-10 -translate-y-1/2">
                              <svg
                                width="10"
                                height="6"
                                viewBox="0 0 10 6"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M0.47072 1.08816C0.47072 1.02932 0.500141 0.955772 0.54427 0.911642C0.647241 0.808672 0.809051 0.808672 0.912022 0.896932L4.85431 4.60386C4.92785 4.67741 5.06025 4.67741 5.14851 4.60386L9.09079 0.896932C9.19376 0.793962 9.35557 0.808672 9.45854 0.911642C9.56151 1.01461 9.5468 1.17642 9.44383 1.27939L5.50155 4.98632C5.22206 5.23639 4.78076 5.23639 4.51598 4.98632L0.558981 1.27939C0.50014 1.22055 0.47072 1.16171 0.47072 1.08816Z"
                                  fill="#637381"
                                />
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M1.22659 0.546578L5.00141 4.09604L8.76422 0.557869C9.08459 0.244537 9.54201 0.329403 9.79139 0.578788C10.112 0.899434 10.0277 1.36122 9.77668 1.61224L9.76644 1.62248L5.81552 5.33722C5.36257 5.74249 4.6445 5.7544 4.19352 5.32924C4.19327 5.32901 4.19377 5.32948 4.19352 5.32924L0.225953 1.61241C0.102762 1.48922 -4.20186e-08 1.31674 -3.20269e-08 1.08816C-2.40601e-08 0.905899 0.0780105 0.712197 0.211421 0.578787C0.494701 0.295506 0.935574 0.297138 1.21836 0.539529L1.22659 0.546578ZM4.51598 4.98632C4.78076 5.23639 5.22206 5.23639 5.50155 4.98632L9.44383 1.27939C9.5468 1.17642 9.56151 1.01461 9.45854 0.911642C9.35557 0.808672 9.19376 0.793962 9.09079 0.896932L5.14851 4.60386C5.06025 4.67741 4.92785 4.67741 4.85431 4.60386L0.912022 0.896932C0.809051 0.808672 0.647241 0.808672 0.54427 0.911642C0.500141 0.955772 0.47072 1.02932 0.47072 1.08816C0.47072 1.16171 0.50014 1.22055 0.558981 1.27939L4.51598 4.98632Z"
                                  fill="#637381"
                                />
                              </svg>
                            </span>
                          </div>
                        </div>
                      </div>

                      {!buy && (
                        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                          <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark"></div>
                          <div className="flex flex-col gap-5.5 p-6.5">
                            <div>
                              <label className="mb-3 block text-black dark:text-white">
                                No of Stock
                              </label>
                              <input
                                onChange={(e) => {
                                  setamountsell(e.target.value);
                                }}
                                type="number"
                                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                              />
                            </div>

                            <div>
                              <label className="mb-3 block text-black dark:text-white">
                                Select Order Type
                              </label>
                              <select className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-12 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input">
                                <option value="">Market Order</option>
                                <option value="">Limit order</option>
                              </select>
                            </div>
                          </div>
                          <div>
                            <button
                              onClick={sellStock}
                              className=" w-full justify-center rounded bg-primary p-3 font-medium text-gray"
                            >
                              SELL
                            </button>
                          </div>
                        </div>
                      )}

                      {buy && (
                        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                          <div className="justify-center  border-b border-stroke py-4 px-6.5 dark:border-strokedark"></div>
                          <div className="flex flex-col gap-5.5 p-6.5">
                            <div>
                              <label className="mb-3 block text-black dark:text-white">
                                No of Stock
                              </label>
                              <input
                                onChange={(e) => {
                                  setamountbuy(e.target.value);
                                }}
                                type="number"
                                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                              />
                            </div>

                            <div>
                              <label className="mb-3 block font-medium text-black dark:text-white">
                                Apply insurance
                              </label>
                              <div>
                                <label
                                  htmlFor="toggle6"
                                  className="flex cursor-pointer select-none items-center"
                                >
                                  <div className="relative">
                                    <input
                                      type="checkbox"
                                      id="toggle6"
                                      className="sr-only"
                                      onChange={() => {
                                        setEnabled(!enabled);
                                        setInsurance(true);
                                      }}
                                    />
                                    <div className="block h-8 w-14 rounded-full bg-meta-9 dark:bg-[#5A616B]"></div>
                                    <div
                                      className={`absolute left-1 top-1 h-6 w-6 rounded-full bg-white transition ${
                                        enabled &&
                                        '!right-1 !translate-x-full !bg-primary dark:!bg-white'
                                      }`}
                                    ></div>
                                  </div>
                                </label>
                              </div>
                            </div>
                            <div>
                              <label className="mb-3 block text-black dark:text-white">
                                Select Order Type
                              </label>
                              <select className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-12 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input">
                                <option value="">Market Order</option>
                                <option value="">Limit order</option>
                              </select>
                            </div>
                          </div>
                          <div>
                            <button
                              onClick={buyStock}
                              className=" w-full justify-center rounded bg-primary p-3 font-medium text-gray"
                            >
                              BUY
                            </button>
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="items-center gap-2 mt-3 sm:flex"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}
