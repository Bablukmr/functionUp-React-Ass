import "./App.css";
import React, { useState } from 'react';


function Card() {

    const [users, setUsers] = useState([]);

    function getUsers() {
        fetch('https://reqres.in/api/users/')
            .then(response => response.json())
            .then(data => setUsers(data.data));
    }

    return (
        <div>
            <button onClick={getUsers}>Get Users</button>
            
                {users.map(user => (
                    <div key={user.id} className="card">
                        <img src={user.avatar} />
                        <h3>ID:{user.id}</h3>
                        <h2 >{user.first_name} {user.last_name}</h2>
                        <h5 >{user.email}</h5>
                    </div>
                ))}
            </div>
       
    );
}

export default Card;
