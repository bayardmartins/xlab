// import React, { useState, useEffect } from 'react';
import React from 'react';
import { UserList } from '../../components/userList';

import './styles.css';

export default function Users(){
    return (
        <div className="profile-container">
            <UserList className="userlist"/>
        </div>
    )
}