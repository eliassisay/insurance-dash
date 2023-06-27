// import { Link } from 'react-router-dom';
// import ProductOne from '../images/product/product-01.png';
// import ProductTwo from '../images/product/product-02.png';
// import ProductThree from '../images/product/product-03.png';
// import ProductFour from '../images/product/product-04.png';
// import { useEffect, useState } from 'react';
// import { useStateValue } from '../Context/StateProvider';
// import axiosinstanc4 from '../Axios/Axios2';
// import axios from 'axios';



// const TableTwo = () => {
//   let info = [];
//   const [{ user = [] }, dispatch] = useStateValue();

//   useEffect(() => {
//     axiosinstanc4
//       .get('/getCompany')
//       .then((res) => {
//         console.log(res.data.message);
//         if (res) {
//           dispatch({
//             type: 'user',
//             user: res.data.message,
//           });
//         }
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);
//   return (
//     <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
     
//         <h4 className="text-xl font-semibold text-black dark:text-white">
//           Top CUSTOMERS
//         </h4>
      

//       {/* <div className="bg-black  grid grid-cols-6 border-t border-stroke py-4.5 px-4 blue:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
//         <div className="col-span-3 flex items-center">
//           <p className="font-medium">userName</p>
//         </div>
//         <div className="col-span-2 hidden items-center sm:flex">
//           <p className="font-medium">Camapny Name</p>
//         </div>
//         <div className="col-span-1 flex items-center">
//           <p className="font-medium">Number of Stock</p>
//         </div>
//         <div className="col-span-1 flex items-center">
//           <p className="font-medium">insured stock</p>
//         </div>
//         <div className="col-span-1 flex items-center">
//           <p className="font-medium">Profit</p>
//         </div>
//       </div> */}
//       <div className="flex flex-col  ">
//         <div className="grid grid-cols-4 rounded-sm bg-black dark:bg-meta-4 sm:grid-cols-5">
//           <div className="p-2.5 xl:p-5">
//             <h5 className="text-sm font-medium uppercase xsm:text-base">
//               Companies
//             </h5>
//           </div>
//           <div className="p-2.5 text-center xl:p-5">
//             <h5 className="text-sm font-medium uppercase xsm:text-base">
//               StockName
//             </h5>
//           </div>
//           <div className="p-2.5 text-center xl:p-5">
//             <h5 className="text-sm font-medium uppercase xsm:text-base">
//               amount
//             </h5>
//           </div>
//           <div className="hidden p-2.5 text-center sm:block xl:p-5">
//             <h5 className="text-sm font-medium uppercase xsm:text-base">
//               TotalSell
//             </h5>
//           </div>
//           <div className="hidden p-2.5 text-center sm:block xl:p-5">
//             <h5 className="text-sm font-medium uppercase xsm:text-base">
//               MAX/MIN/month value
//             </h5>
//           </div>
//         </div>
//       </div>
//       {/* { user.map((item) => (
//         <div className="flex h-auto flex-col overflow-y-auto">
//           <Link
//             className="flex flex-col gap-2.5 border-t border-stroke px-4.5 py-3 hover:bg-gray-2 dark:border-strokedark dark:hover:bg-meta-4"
//             to={`iiii${item._id}`}
//           >
//             <div className="grid grid-cols-3 border-b border-stroke dark:border-strokedark sm:grid-cols-5">
//               <div className="flex items-center gap-3 p-2.5 xl:p-5">
//                 <div className="flex-shrink-0">
                 
//                 </div>
//                 <p className="hidden text-black dark:text-white sm:block">
//                   {item.userName}
//                 </p>
//               </div>

//               <div className="flex items-center justify-center p-2.5 xl:p-5">
//                 <p className="text-black dark:text-white">{item.stockName}</p>
//               </div>

//               <div className="flex items-center justify-center p-2.5 xl:p-5">
//                 <p className="text-meta-3">{item.companyName}</p>
//               </div>

//               <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
//                 <p className="text-black dark:text-white">{item.price}</p>
//               </div>

//               <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
//                 <p className="text-meta-5">{item.amount}</p>
//               </div>
//             </div>
//           </Link>
//         </div>
//       ))}
      
//     </div>
//   );
// }; */}
// {user.map((item) => (
//         <div className="flex h-auto flex-col overflow-y-auto">
//           <Link
//             className="flex flex-col gap-2.5 border-t border-stroke px-4.5 py-3 hover:bg-gray-2 dark:border-strokedark dark:hover:bg-meta-4"
//             to={`iiii${item._id}`}
//           >
//             <div className="grid grid-cols-3 border-b border-stroke dark:border-strokedark sm:grid-cols-5">
//               <div className="flex items-center gap-3 p-2.5 xl:p-5">
//                 <div className="flex-shrink-0">
//                   {/* <img src={BrandOne} alt="Brand" /> */}
//                 </div>
//                 <p className="hidden text-black dark:text-white sm:block">
//                   {item.companyName}
//                 </p>
//               </div>

//               <div className="flex items-center justify-center p-2.5 xl:p-5">
//                 <p className="text-black dark:text-white">{item.stockName}</p>
//               </div>

//               <div className="flex items-center justify-center p-2.5 xl:p-5">
//                 <p className="text-meta-3">{item.price}</p>
//               </div>

//               <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
//                 <p className="text-black dark:text-white">{item.totalsell}</p>
//               </div>

//               <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
//                 <p className="text-meta-5">{item.totalsell}</p>
//               </div>
//             </div>
//           </Link>
//         </div>
//       ))}
//       ;
//     </div>
//   );
// };

// export default TableTwo;
import BrandOne from '../images/brand/brand-02.svg';
import BrandTwo from '../images/brand/brand-02.svg';
import BrandThree from '../images/brand/brand-02.svg';
import BrandFour from '../images/brand/brand-02.svg';
import BrandFive from '../images/brand/brand-02.svg';
import { useEffect, useState } from 'react';
import { useStateValue } from '../Context/StateProvider';
import axiosinstance3 from '../Axios/Axios2';
import axios from 'axios';
import { Link } from 'react-router-dom';

const TableTwo = () => {
  let info = [];
  const [{ insureduser = [] }, dispatch] = useStateValue();

  useEffect(() => {
    axiosinstance3
      .get('/getinsured')
      .then((res) => {
        console.log(res.data.message);
        if (res) {
          dispatch({
            type: 'insureduser',
            insureduser: res.data.message,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className=" rounded-sm  bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        List of User
      </h4>
      <div className="flex flex-col  ">
        <div className="grid grid-cols-4 rounded-sm bg-black dark:bg-meta-4 sm:grid-cols-5">
          <div className="p-2.5 xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              UserName
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              CampanyName
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              amount
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              stock
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              MAX/MIN/month value
            </h5>
          </div>
        </div>
      </div>
      {insureduser && insureduser.map((item) => (
        <div className="flex h-auto flex-col overflow-y-auto">
          <Link
            className="flex flex-col gap-2.5 border-t border-stroke px-4.5 py-3 hover:bg-gray-2 dark:border-strokedark dark:hover:bg-meta-4"
            to={`iiii${item._id}`}
          >
            <div className="grid grid-cols-3 border-b border-stroke dark:border-strokedark sm:grid-cols-5">
              <div className="flex items-center gap-3 p-2.5 xl:p-5">
                <div className="flex-shrink-0">
                  <img src={BrandOne} alt="Brand" />
                </div>
                <p className="hidden text-black dark:text-white sm:block">
                  {item.userName}
                </p>
              </div>

              <div className="flex items-center justify-center p-2.5 xl:p-5">
                <p className="text-black dark:text-white">{item.stockName}</p>
              </div>

              <div className="flex items-center justify-center p-2.5 xl:p-5">
                <p className="text-meta-3">{item.price}</p>
              </div>

              <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                <p className="text-black dark:text-white">{item.amount}</p>
              </div>

              <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                <p className="text-meta-5">{item.price}</p>
              </div>
            </div>
          </Link>
        </div>
      ))}
      ;
    </div>
  );
};

export default TableTwo;
