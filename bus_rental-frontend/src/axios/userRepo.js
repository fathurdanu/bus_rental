import axios from 'axios';
import Swal from 'sweetalert2';

const URL = 'http://localhost:3000/users';

const getUsers = async (callback) => {
    try {
        let users = await axios({
            method: 'GET',
            url: URL
        })
        callback(users.data);
    } catch (error) {
        console.log(error);
    }
}

const getUser = async (id, callback) => {
    try {
        let user = await axios({
            method: 'GET',
            url: URL + '/' + id
        })
        callback(user.data);
    } catch (error) {
        console.log(error);
    }
}

const addUser = async (user) => {
    try {
        let result = await axios({
            method: 'POST',
            url: URL + '/add',
            data: user
        })
        if(result)
        Swal.fire(
            'Add User',
            'User has been added',
            'success'
        );
    } catch (error) {
        console.log(error);
    }
}

const editUser = async (id, user) => {
    try {
        await axios({
            method: 'PUT',
            url: URL + '/edit/' + id,
            data: user
        })
        Swal.fire(
            'Edit User',
            'User has been edited',
            'success'
        )
    } catch (error) {
        console.log(error);
    }
}

const deleteUser = async (id) => {
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
    getUsers, getUser, addUser, editUser, deleteUser
}