import React from 'react'
import { Outlet } from 'react-router-dom';

const Navigation = () => {
    return (
        <div>
            <h1>This is the nav!!</h1>
            <Outlet />
        </div>
    )
}

export default Navigation
