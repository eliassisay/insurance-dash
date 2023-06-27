// UserDetailsPage.js
import './tableIdOne.css'
import React, { useEffect, useState } from 'react';
import { useStateValue } from '../Context/StateProvider';
import axiosinstance3 from '../Axios/Axios2';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import DefaultLayout from '../layout/DefaultLayout';
const UserDetailsPage = () => {
  const [user, setUser] = useState(null);
  const { companyName } = useParams();

  useEffect(() => {
    fetchUserDetails();
  }, [companyName]);

  const fetchUserDetails = async () => {
    try {
      
      const response = await axios.get(`https://company-server-svea.onrender.com/api/getCompanyInfo/${companyName}`);
      const insurtax=response.data.message.amount*10/100;
      setUser(response.data.message,insurtax);
     
    } catch (error) {
      console.error('Error fetching user details:', error);
    }
  };


  return (
    <DefaultLayout>
      {user ? (
        
        <div className="container">
        <h2>campany Information</h2>
    
          <div className="">
            <p>
              <strong>Name:</strong> {user.companyName}
            </p>
            <p>
              <strong>StockName:</strong> {user.stockName}
            </p>
            <p>
              <strong>Description:</strong> {user.Description}
            </p>
            <p>
              <strong>amount:</strong> {user.amount}
            </p>
            <p>
              <strong>price:</strong> {user.price}
            </p>
            <p>
              <strong>totalsell:</strong> {user.totalsell}
            </p>
            <p>
              <strong>insurance value for {user.amount*1/100} :</strong> <strong>Stock value</strong> 
            </p>
            {/* Add more fields as needed */}
          </div>
  
      </div>
      ) : (
        <p>Loading user details...</p>
      )}
    </DefaultLayout>
  );
};



export default UserDetailsPage;
