import React, { useState, useEffect } from 'react'
import { getBrands, deleteBrand } from '../axios/brandRepo';
import LoadingBar from '../helpers/LoadingBar';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';

function ListBrandPage() {
    const [brands, setBrands] = useState([]);

    useEffect(() => {
        getBrands(result => setBrands(result))
    })

    const deleteHandler =(id) => {
        deleteBrand(id);
    }

    return (
        <div className="row g-2">
            <div className="my-3">
                <Link to='/brands/add' className="btn btn-primary">
                    <AiOutlinePlusCircle></AiOutlinePlusCircle>
                    Add Brand
                </Link>
            </div>
            {
                brands.length > 0 ?
                    brands.map(brand => {
                        const { id, name, image } = brand;
                        return (
                            <div key={id}
                                className="card col-sm-11 col-md-5 col-lg-3 mx-1">
                                <img className="card-img-top" src={image} alt="Card cap" />
                                <div className="card-body">
                                    <h5 className="card-title text-center">{name}</h5>
                                    <div className="row col-12">
                                        <div className="col-6 text-center">
                                            <Link to={`/brands/edit/${id}`} className="btn btn-warning"> Edit </Link>
                                        </div>
                                        <div className="col-6 text-center">
                                            <button
                                                onClick={()=> deleteHandler(+id)}
                                                className="btn btn-danger">
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }) : <LoadingBar></LoadingBar>
            }
        </div>
    )
}

export default ListBrandPage