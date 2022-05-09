import React, { useEffect, useState } from 'react'
import { getBrands } from '../../axios/brandRepo'
import { getUsers } from '../../axios/userRepo';
import { addItem } from '../../axios/itemRepo';
import { useNavigate } from 'react-router-dom';


function AddBrandPage() {
    const [form, setForm] = useState({
        name: "",
        UserId: 0,
        BrandId: 0,
        price: "",
        image: ""
    })

    const navigation = useNavigate()

    const submitHandler = () => {
        console.log(form);
        addItem(form);
        navigation('/');
    }


    const [users, setUsers] = useState([]);
    const [brands, setBrands] = useState([]);

    useEffect(() => {
        getUsers(result => {
            setUsers(result); setForm({ ...form, UserId: users[0].id })
        });

        getBrands(result => {
            setBrands(result)
            setForm({ ...form, BrandId: brands[0].id })
        }); // eslint-disable-next-line
    }, []); 

    return (
        <>
            <div className=''><h5>Add Brand</h5></div>
            <div className="form-group row mb-3">
                <label className="col-sm-2 col-form-label">Name:</label>
                <div className="col-sm-5">
                    <input
                        id="name"
                        name="name"
                        type="text"
                        className="form-control "
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                </div>
            </div>
            <div className="form-group row mb-3">
                <label className="col-sm-2 col-form-label">Driver:</label>
                <div className="col-sm-5">
                    <select onChange={(e) => setForm({ ...form, UserId: e.target.value })}>
                    <option value=""> Select Driver </option>
                        {

                            users.map(user => {
                                const { id, name } = user;
                                return (
                                    <option key={id} value={id}> {name} </option>
                                )
                            })
                        }
                    </select>
                </div>
            </div>
            <div className="form-group row mb-3">
                <label className="col-sm-2 col-form-label">Brand:</label>
                <div className="col-sm-5">
                    <select onChange={(e) => setForm({ ...form, BrandId: e.target.value })}>
                        <option value=""> Select Brand </option>
                        {

                            brands.map(brand => {
                                const { id, name } = brand;
                                return (
                                    <option key={id} value={id}> {name} </option>
                                )
                            })
                        }
                    </select>
                </div>

            </div>
            <div className="form-group row mb-3">
                <label className="col-sm-2 col-form-label">Price:</label>
                <div className="col-sm-5">
                    <input
                        id="price"
                        name="price"
                        pattern="[0-9]*"
                        type="text"
                        className="form-control "
                        onChange={(e) => setForm({ ...form, price: e.target.value })}
                    />
                </div>
            </div>
            <div className="form-group row mb-3">
                <label className="col-sm-2 col-form-label">Image Link:</label>
                <div className="col-sm-5">
                    <input
                        id="image"
                        name="image"
                        type="text"
                        className="form-control"
                        onChange={(e) => setForm({ ...form, image: e.target.value })}
                    />
                </div>
            </div>
            <div className="mb-3">
                <button
                    id="submit"
                    type="submit"
                    className="btn btn-primary text-light"
                    onClick={(e) => submitHandler()}>
                    Submit
                </button>
            </div>
        </>
    )
}

export default AddBrandPage