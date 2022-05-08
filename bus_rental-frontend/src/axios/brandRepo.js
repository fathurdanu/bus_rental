import axios from 'axios';
import Swal from 'sweetalert2';

const URL = 'http://localhost:3000/brands';

const getBrands = async (callback) => {
    try{
        let brands = await axios({
            method: 'GET',
            url: URL
        })
        callback(brands.data);
        // console.log(brands);
    }catch(error){
        console.log(error);
    }
}

const getBrand = async (id, callback) => {
    try{
        let brand = await axios({
            method: 'GET',
            url: URL + '/' + id
        })
        callback(brand.data);
    }catch(error){
        console.log(error);
    }
}

const addBrand = async (brand) => {
    try{
        let result = await axios({
            method: 'POST',
            url: URL + '/add',
            data: brand
        })
        console.log(result.data);
    }catch (error){
        console.log(error);
    }
}

const editBrand = async (id,brand) => {
    try{
        let result = await axios({
            method: 'PUT',
            url: URL + '/edit/' + id,
            data:brand
        })
        console.log(result.data)
    }catch (error){
        console.log(error);
    }
}

const deleteBrand = async (id) => {
    try{
        let result = await axios({
            method: 'DELETE',
            url: URL + '/delete/' + id,
        })
        console.log(result.data);
    }catch (error){
        console.log(error);
    }
}




export {
    getBrands, getBrand, addBrand, editBrand, deleteBrand
}