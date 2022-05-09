import axios from 'axios';
import Swal from 'sweetalert2';

const URL = 'http://localhost:3000/items';

const getItems = async (callback) => {
    try {
        let items = await axios({
            method: 'GET',
            url: URL
        })
        callback(items.data);
    } catch (error) {
        console.log(error);
    }
}

const getItem = async (id, callback) => {
    try {
        let item = await axios({
            method: 'GET',
            url: URL + '/' + id
        })
        callback(item.data);
    } catch (error) {
        console.log(error);
    }
}

const addItem = async (item) => {
    try {
        let result = await axios({
            method: 'POST',
            url: URL + '/add',
            data: item
        })
        if(result)
        Swal.fire(
            'Add Item',
            'Item has been added',
            'success'
        );
    } catch (error) {
        console.log(error);
    }
}

const editItem = async (id, item) => {
    try {
        await axios({
            method: 'PUT',
            url: URL + '/edit/' + id,
            data: item
        })
        Swal.fire(
            'Edit Item',
            'Item has been edited',
            'success'
        )
    } catch (error) {
        console.log(error);
    }
}

const deleteItem = async (id) => {
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
                let result = await axios({
                    method: 'DELETE',
                    url: URL + '/delete/' + id,
                })
                if (result===1)
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
    getItems, getItem, addItem, editItem, deleteItem
}