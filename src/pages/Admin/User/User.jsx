import React from 'react'
import { useApiCall } from '../../../hooks/useApiCall';
import { fetchUserAxios } from '../../../services/userService';
import "../../Admin/Admin.css"
import Loader from '../../../components/common/Loader';


function User() {
  const { data, error, loading } = useApiCall(fetchUserAxios);
    console.log(data, loading, error);
    if (loading) {
      return <div><Loader/></div>;
    }
  
    if (error) {
      return <div>Error: {error.message}</div>;
    }
  
    if (!data || !Array.isArray(data)) {
      return <div>No data available</div>;
    }
    return (
      <div className="product">
        <h1>Users</h1>
        
         <table border={"1"} >
            <thead>
              <tr>
                <th>ID</th>
                <th>Email</th>
                <th>Username</th>
                <th>Password</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item)=>{
                return <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.email}</td>
                  <td>{item.username}</td>
                  <td>{item.password}</td>

                </tr>
              })}
            </tbody>
            
          </table>;
      
        </div>
        
      
    );
}

export default User
