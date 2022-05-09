import React, { useEffect, useState } from 'react'
import { editBrand, getBrand } from '../../axios/brandRepo'
import { useNavigate, useParams } from 'react-router-dom';

function EditBrandPage() {

    const [form, setForm] = useState({
        name: "",
        image: ""
    });

    const navigation = useNavigate();
    const params = useParams();
    const { id } = params;

    
    useEffect(() => {
        getBrand(+id, result => {
            setForm({
                name: result.name,
                image: result.image
            }); 
        }); // eslint-disable-next-line
    },[]);


    const submitHandler = () => {
        editBrand(+id, form);
        navigation('/brands');
    }

    return (
        <>
            <div><h5>Edit Brand</h5></div>
            <div className="form-group row mb-3">
                <label className="col-sm-2 col-form-label">Name:</label>
                <div className="col-sm-5">
                    <input
                        name="name"
                        type="text"
                        className="form-control"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                </div>

            </div>
            <div className="form-group row mb-3">
                <label className="col-sm-2 col-form-label">Image Link:</label>
                <div className="col-sm-5">
                    <input
                        name="image"
                        type="text"
                        className="form-control"
                        value={form.image}
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

export default EditBrandPage