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
import TableIdOne from './TableIdOne';
const TableOne = () => {
  let info = [];
  const [{ company = [] }, dispatch] = useStateValue();
  

 

  useEffect(() => {
    axiosinstance3
      .get('/getCompany')
      .then((res) => {
        console.log(res.data.message);
        if (res) {
          dispatch({
            type: 'company',
            company: res.data.message,
          });
          
        }
      })
     
      .catch((err) => {
        console.log(err);
      });
  }, []);
  // const [users, setUsers] = useState([]);

  // useEffect(() => {
  //   fetchUsers();
  // }, []);

  // const fetchUsers = async () => {
  //   try {
  //     const response = await axios.get('https://company-server-svea.onrender.com/api/GetCompany');
  //     setUsers(response.data);
  //   } catch (error) {
  //     console.error('Error fetching users:', error);
  //   }
  // };

  return (
    <div className=" rounded-sm  bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        List of Companies
      </h4>
      <div className="flex flex-col  ">
        <div className="grid grid-cols-4 rounded-sm bg-black dark:bg-meta-4 sm:grid-cols-5">
          <div className="p-2.5 xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Companies
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              StockName
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              amount
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              TotalSell
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
             price
            </h5>
          </div>
        </div>
      </div>
      {company.map((item) => (
        <div className="flex h-auto flex-col overflow-y-auto"
        key={item.companyName}>
          <Link
            className="flex flex-col gap-2.5 border-t border-stroke px-4.5 py-3 hover:bg-gray-2 dark:border-strokedark dark:hover:bg-meta-4"
          
          to={`/getCompanyInfo/${item.companyName}`}
          >
            <div className="grid grid-cols-3 border-b border-stroke dark:border-strokedark sm:grid-cols-5">
              <div className="flex items-center gap-3 p-2.5 xl:p-5">
                <div className="flex-shrink-0">
                  <img src={BrandOne} alt="Brand" />
                </div>
                <p className="hidden text-black dark:text-white sm:block">
                  {item.companyName}
                </p>
              </div>

              <div className="flex items-center justify-center p-2.5 xl:p-5">
                <p className="text-black dark:text-white">{item.stockName}</p>
              </div>

              <div className="flex items-center justify-center p-2.5 xl:p-5">
                <p className="text-meta-3">{item.amount}</p>
              </div>

              <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                <p className="text-black dark:text-white">{item.totalsell}</p>
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

export default TableOne;
