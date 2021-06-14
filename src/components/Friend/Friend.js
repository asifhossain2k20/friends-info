import React from 'react';
import { Link } from 'react-router-dom';

const Friend = (props) => {
    const {name,email,id}=props.friend;
    const style={
        border:"2px solid grey",
        borderRadius:"10px",
        padding:"10px",
        margin:"10px",
        textAlign:"center"
    }
    const btnStyle={
        backgroundColor:"gold",
        padding:"20px",
        borderRadius:"10px",
        cursor:"pointer",
        fontWeight:"bold"
    }
    return (
        <div style={style} >
            <h1>{name}</h1>
            <h2>{email}</h2>
            <Link to={`/friend/${id}`}>
                <button style={btnStyle}>Here Info of Id {id}</button>
            </Link>
        </div>
    );
};

export default Friend;