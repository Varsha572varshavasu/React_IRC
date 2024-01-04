import React from 'react'

const AddUser = () => {
    const[data,setData] = useState({
        username:'',
        password:''
    })
    const handleChange =(e)=>{
        setData({...data, [e.target.id]:e.target.value})
    }
    const handleSubmit =(e)=>{
        e.preventDefault();
        console.log(data)
    }
  return (
    <>
    <form>
        <input type = 'text' id = 'username' placeholder='username'/>
        <input type = 'password' id = 'password' placeholder='password'/>
        <button type = 'submit' class = 'submit'>Add</button>
    </form>
        </>
  )
}

export default AddUser