import React, { useState } from 'react'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import TableBody from '@material-ui/core/TableBody'
import Table from '@material-ui/core/Table'
import Button from '@material-ui/core/Button'
import Modal from 'react-modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const UserList = () => {
  const [search, setSearch] = useState("");
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [userRegistration, setUserRegistration] = useState({
    username : "",
    email : "",
    phone_no : ""
 })
  const userdata = JSON.parse(localStorage.getItem("users"))
  console.log(userdata)

  const handleDelete = (id) => {
    console.log(32342, id)
    const filterdata = userdata.filter((item, index) => index != id)
    console.log(333, filterdata)
    localStorage.setItem("users", JSON.stringify(filterdata))
    toast.success("Wow so easy!")
    window.location.href = "/dashboard"
  }
  const handleChange = (e) => {
    const {name , value} = e.target
    console.log(name,value)
    setUserRegistration({...userRegistration, [name]:value})
};
  
  function openModal(username,email,phone_no) {
    console.log(77878, username, email, phone_no)
    setUserRegistration({
      ...userRegistration,
      username : username,
      email: email,
      phone_no : phone_no
    })
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  function handleUpdate(data){
    console.log(324,data)
    let updateData = {};
    updateData = userdata.find((item)=>item.email == data.email)
    console.log(444,updateData)
    updateData.username = data.username
    updateData.email = data.email
    updateData.phone_no = data.phone_no
    let updateLS = [];
    updateLS = userdata.filter((item)=>{
      if (item.email != data.email){
        return item
      }
      else{
        return updateData;
      }
    })
    localStorage.setItem("users",JSON.stringify(updateLS))
    toast("Wow so easy!")
    window.location.href = "/dashboard"
  }
  const handleSearch = (e) => {
    console.log(e.target.value)
    setSearch(e.target.value)
  }
  const users = !search ? userdata : userdata?.filter((item) =>
    item.username.toLowerCase().includes(search.toLowerCase()))

  
  return (
    <>
      <div style={{ float: 'right', width: '75%' }}>
        <h2><input type="text" onChange={handleSearch} placeholder="Search " /></h2>
        <br />
        <h1>User_List</h1>
        <TableContainer>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="right">Username</TableCell>
                <TableCell align="right">Email</TableCell>
                <TableCell align="right">Phone_no</TableCell>
                <TableCell align="right">Update</TableCell>
                <TableCell align="right">Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users?.map((item, index) => (
                <TableRow key={index}>
                  <TableCell align="right">{item.username}</TableCell>
                  <TableCell align="right">{item.email}</TableCell>
                  <TableCell align="right">{item.phone_no}</TableCell>
                  <TableCell align="right"><Button variant="contained" color="primary" onClick={() => openModal(item.username, item.email, item.phone_no)}>Update</Button></TableCell>
                  <TableCell align="right"><Button variant="contained" color="secondary" onClick={() => handleDelete(index)}>Delete</Button></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <div>
        <Modal
          className="modal-div"
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
        >
          <center>
            <form className='modal-form'>
              <h2 style={{ padding: '12px' }}>Update User Details</h2>
              <input type="text" name="username" placeholder='enter new username' value={userRegistration.username} onChange={(e)=>handleChange(e)}/><br />
              <input type="email" name="email" placeholder='enter new email' value={userRegistration.email} onChange={(e)=>handleChange(e)} /> <br />
              <input type="number" name="phone_no" placeholder='enter new phone_no' value={userRegistration.phone_no} onChange={(e)=>handleChange(e)}/><br />
              <Button variant="contained" color="secondary" onClick={()=>handleUpdate(userRegistration)}>save</Button>&nbsp;&nbsp;
              <Button variant="contained" color="primary" onClick={() => closeModal()}>Close</Button>
            </form>
          </center>
        </Modal>
      </div>
      <ToastContainer autoClose={10000}/>
    </>
  )
}
