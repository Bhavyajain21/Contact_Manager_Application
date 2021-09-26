import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import user from '../images/user.png';
const ContactCard = (props) => {
    const {name,email,id} = props.contact;
    return ( 
            <div className="item">
                <img className="ui avatar image" src={user} alt="user"/>
                <div className="content">
                    <Link to={{pathname:`/contact/${id}`,state:{contact:props.contact}}}>
                        <div className="header">{name}</div>
                        <div>{email}</div>
                    </Link>
                </div>
                <i onClick={()=>props.clickHandler(id)} style={{color:"red", marginTop:"7px", marginLeft:"10px"}} className="trash alternate outline icon"></i>

                <Link to={{pathname:`/edit`,state:{contact:props.contact}}}>
                <i style={{color:"blue", marginTop:"7px"}} className="edit alternate outline icon"></i>
                </Link>
            </div>
     );
}

export default ContactCard;