import React from 'react'
import {Outlet} from 'react-router-dom';


function BrandPage() {
    
    return (
        <div className="my-3">
            <Outlet></Outlet>
        </div>
    )
}

export default BrandPage