import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetails = () => {
    const {friendId}=useParams()
    const [friend,setFriend]=useState({})
    useEffect(()=>{
        const url=`https://jsonplaceholder.typicode.com/users/${friendId}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setFriend(data))
    },[])
    const style={
        border:"2px solid red",
        backgroundColor:"grey",
        margin:"10px",
        padding:"20px",
        textAlign:"center"
    }
    return (
        <div style={style}>
            <h1>{friend.name}</h1>
            <h1>{friend.email}</h1>
        </div>
    );
};

export default FriendDetails;