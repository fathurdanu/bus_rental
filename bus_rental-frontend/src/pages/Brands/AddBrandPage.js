import React, { useState } from 'react'
import {addBrand} from '../../axios/brandRepo'
import {useNavigate} from 'react-router-dom';

function AddBrandPage() {
    const [form, setForm] = useState({
        name: "",
        image: ""
    })

    const navigation = useNavigate()

    const submitHandler = () => {
        addBrand(form);
        navigation('/brands');
    }
    

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