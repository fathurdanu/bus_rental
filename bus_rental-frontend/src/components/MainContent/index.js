import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { HomePage, UserPage, BrandPage, ListBrandPage, AddBrandPage, EditBrandPage } from '../../pages'

function MainContent() {
    return (
        <div className="canvas">
            <Routes>
                <Route path="/" element={
                    <HomePage></HomePage>
                }></Route>

                <Route path="/users" element={
                    <UserPage></UserPage>
                }></Route>

                <Route path="/brands" element={<BrandPage></BrandPage>}>
                    <Route path="" element={<ListBrandPage></ListBrandPage>}></Route>
                    <Route path="add" element={<AddBrandPage></AddBrandPage>}></Route>
                    <Route path="edit">
                        <Route path=":id" element={<EditBrandPage></EditBrandPage>}></Route>
                    </Route>
                </Route>
            </Routes>

        </div>

    )
}

export default MainContent