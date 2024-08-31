'use client';
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const manageuser = () => {

    const [userList,setUserList]=useState([]);

    const fetchuserdata = async () => {
        const res = await axios.get('http://localhost:5000/user/getall');
        console.log(res.status);
        console.log(res.data);
        setUserList(res.data);
        
        
    }

    useEffect(() => {
        fetchuserdata();
    }, []);

    const displayUsers = () => {
        if(userList.length===0){
            return <p>Loading... Please wait</p>
        }
        else{
            return <table className='w-full border-2 border-blue-500'>
                <thead className='border-b-2 text-left bg-blue-500 text-white'>
                    <tr>
                        <th className='p-3 text-lg'>ID</th>
                        <th className='p-3 text-lg'>Name</th>
                        <th className='p-3 text-lg'>Email</th>
                        <th className='p-3 text-lg'>City</th>
                    </tr>
                </thead>
                
                <tbody>
                    {
                        userList.map((user) => {
                            return <tr key={user._id}>
                                <td>{user._id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.city}</td>

                            </tr>
                        })
                    }
                </tbody>
            </table>

    }
}
    
  return (
    <div>
      <div className='max-w-[80%] mx-auto shadow-lg rounded-lg p-5'>
        <h1 className='text-center font-bold text-3xl mt-5'>ManageUser</h1>
        {displayUsers()}
      </div>
    </div>
  )
}

export default manageuser;
