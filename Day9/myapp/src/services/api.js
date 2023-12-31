import axios from 'axios'
const URL='http://localhost:3000'
const getUser=()=>axios.get('${url}/users')
const getUserId =(data)=>axios.get('${URL}/users/${id}')
const addUser = (data) => axios.post('${URL}/users',data)
const editUser = (id,data) =>axios.put('${URL}/users/${id}',data)
const deleteUser = (id) => axios.delete('${URL}/users/${id}')
export{
    getUser,
    getUserId,
    addUser,
    editUser,
    deleteUser
}
export {getUser}