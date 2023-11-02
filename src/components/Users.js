import React,{useState} from 'react';
import axios from "axios";

const Users = () => {

    const url = "https://reqres.in/api/users";
    const [data,setData] = useState("");
   
     function fetchData()
    {
          axios.get(url).then((response)=>{
            //   console.log(response.data.data);
             setData(response.data.data);
          });

    }

    return (
        <div className='Users'>
            <div className='Navbar'>
                <h1>Blue Whales</h1>
                <button className='btn' onClick={()=>(fetchData())}>Get User list</button>
            </div>
            <div className='Table'>
                
                <table >
                    <thead>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Avatar</th>
                    </thead>
                    <tbody>

                        {
                            !data ? <th>No data found</th> : 
                                
                                    data.map((val)=>(
                                        <tr key={val.id}>
                                        <td >
                                            {val.first_name}
                                        </td>
                                        <td>
                                            {val.last_name}
                                        </td>
                                        <td>
                                            {val.email}
                                        </td>
                                         <td>
                                            <img src={val.avatar} />
                                         </td>
                                        </tr>
                                    ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Users;
