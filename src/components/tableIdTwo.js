// UserDetailsPage.js
import React, { useEffect, useState } from 'react';
import { useStateValue } from '../Context/StateProvider';
import axiosinstance3 from '../Axios/Axios2';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import DefaultLayout from '../layout/DefaultLayout';
const UserDetailsPage = () => {
  const [user, setUser] = useState(null);
  const { companyName } = useParams();
user=[name:"name",35,23333]
  useEffect(() => {
    fetchUserDetails();
  }, [companyName]);

  const fetchUserDetails = async () => {
    try {
      
      const response = await axios.get(`https://company-server-svea.onrender.com/api/getCompanyInfo/${companyName}`);
      
      setUser(response.data.message);
     
      console.log(user);
    } catch (error) {
      console.error('Error fetching user details:', error);
    }
  };

 
  return (
    <DefaultLayout>
      {user ? (
        
        <div>
          <h2>User Details</h2>
          <p>ID: {user.Description}</p>
          <p>Name: {user.companyName}</p>
          <p>Email: {user.price}</p>
          {/* Display other user information */}
        </div>
      ) : (
        <p>Loading user details...</p>
      )}
    </DefaultLayout>
  );
};

export default UserDetailsPage;
