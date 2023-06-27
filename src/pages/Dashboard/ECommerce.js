import CardFour from '../../components/CardFour.js';
import CardOne from '../../components/CardOne.js';
import CardThree from '../../components/CardThree.js';
import CardTwo from '../../components/CardTwo.js';
import axiosinstance from '../../Axios/Axios.js';
import ChartOne from '../../components/ChartOne.js';
import ChartTwo from '../../components/ChartTwo.js';
import TableOne from '../../components/TableOne.js';
import DefaultLayout from '../../layout/DefaultLayout.js';
import { useEffect } from 'react';
import axiosinstance2 from '../../Axios/Axios2';
/* import axios from 'axios';
 */
import { useStateValue } from '../../Context/StateProvider.js';
import { Link } from 'react-router-dom';
import axios from 'axios';
import TableTwo from '../../components/TableTwo.js';
const ECommerce = () => {
  const [{ token, TotalSell, amount, userEmail }, dispatch] = useStateValue();
  /*   const getcompanyData = async () => {
    const _token = localStorage.getItem('user');
    const result = await axios.get('http://localhost:2000/api/getCompany', {
      headers: {
        authorization: _token ? _token : '',
        'Access-Control-Allow-Origin': '*',
      },
    });
    console.log(result);
    return result;
  };
  getcompanyData(); */

  useEffect(() => {
    const tokken = localStorage.getItem('user');
    axiosinstance
      .post('/getuser', { email: userEmail })
      .then((res) => {
        console.log(res, 'kkkkkkkkkkkkk');
        dispatch({
          type: 'balance',
          balance: res.data.balance,
        });
      })
      .catch((err) => {
        console.log(err);
      });
    /*   const CompanyName=localStorage.getItem('companyName')
    const amount=localStorage.getItem('amount') */
    if (tokken) {
      dispatch({
        type: 'signin',
        token: tokken,
      });

      /*   dispatch({
    type:'companyName',
    companyName:CompanyName
  }) */
      /*  dispatch({
    type:'amount',
    amount:amount
  })
  axiosinstance.post('/getTotalstock',{CompanyName:CompanyName})
  .then((res)=>{
    console.log(res,'thiss res')
    dispatch({
      type:'TotalSell',
      TotalSell:res.data.message
})
dispatch({
    type:'customer',
    customer:res.data.customers
})
dispatch({
  type:'amount',
  amount:amount - res.data.amount
}) */

      /*   })
  .catch((err)=>{
    console.log(err)
  }) */
    }
  }, []);
  return (
    token && (
      <DefaultLayout>
        <div className="grid grid-cols-2 gap-5 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
          <CardOne />
          <CardTwo />
          <CardThree />
          <CardFour />
        
        </div>

        <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
          {/* <ChartOne /> */}
          {/* <ChartTwo /> */}

          <div className=" col-span-1 xl:col-span-12">
            <TableOne />
            
          </div>
          <div className=" col-span-1 xl:col-span-12">
           
            <TableTwo />
          </div>
        </div>
      </DefaultLayout>
    )
  );
};

export default ECommerce;
