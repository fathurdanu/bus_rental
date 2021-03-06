import axios from 'axios';
import Swal from 'sweetalert2';

const URL = 'http://localhost:3000/brands';

const getBrands = async (callback) => {
    try {
        let brands = await axios({
            method: 'GET',
            url: URL
        })
        callback(brands.data);
    } catch (error) {
        console.log(error);
    }
}

const getBrand = async (id, callback) => {
    try {
        let brand = await axios({
            method: 'GET',
            url: URL + '/' + id
        })
        callback(brand.data);
    } catch (error) {
        console.log(error);
    }
}

const addBrand = async (brand) => {
    try {
        let result = await axios({
            method: 'POST',
            url: URL + '/add',
            data: brand
        })
        if(result)
        Swal.fire(
            'Add Brand',
            'Brand has been added',
            'success'
        );
    } catch (error) {
        console.log(error);
    }
}

const editBrand = async (id, brand) => {
    try {
        await axios({
            method: 'PUT',
            url: URL + '/edit/' + id,
            data: brand
        })
        Swal.fire(
            'Edit Brand',
            'Brand has been edited',
            'success'
        )
    } catch (error) {
        console.log(error);
    }
}

const deleteBrand = async (id) => {
    try {

        await Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then( async (result) => {
            if (result.isConfirmed) {
                
                await axios({
                    method: 'DELETE',
                    url: URL + '/delete/' + id,
                })
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            
            }
        })
    } catch (error) {
        console.log(error);
    }
}




export {
    getBrands, getBrand, addBrand, editBrand, deleteBrand
}