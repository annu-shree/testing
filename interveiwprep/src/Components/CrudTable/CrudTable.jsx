import React, { useState } from 'react'
import { Table } from "semantic-ui-react";
import CrudForm from "./CrudForm"
import Modal from 'react-modal';
import CrudEditForm from './CrudEditForm';

const customStyles = {
  content: {
    width: "600px",
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    border: "2px solid grey"
  }
};

Modal.setAppElement('#root');

const EmpData = [
  {
    id: 1,
    Name: "anu",
    Mobile: 3456567,
    Email: "anushree@gmail.com",
    position: "HR",
    department: "IT",
    salary: 1200000,
    status: "Active",
  },

  {
    id: 2,
    Name: "sonu",
    Mobile: 78756567,
    Email: "sonu@gmail.com",
    position: "Analyst",
    department: "HR",
    salary: 100000,
    status: "Active",
  },
  {
    id: 3,
    Name: "gunjan",
    Mobile: 787544567,
    Email: "gunjan@gmail.com",
    position: "module lead",
    department: "IT",
    salary: 100000,
    status: "Active",
  },
]


const CrudTable = (props) => {

  const [empDetails, setEmpDetails] = useState(EmpData);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [editIsOpen, setEditIsOpen] = useState(false);
  const [editItem, setEditItem] = useState();

  console.log(empDetails)


  const closeModal = () => {
    setIsOpen(false)
  }


  const editCloseModal = () => {
    setEditIsOpen(false)
  }

  const addHandeler = () => {
    setIsOpen(true)
  }

  const editHandeler = (item) => {
    setEditItem(item);
    setEditIsOpen(true);
  }

  const deleteHandeler = (id) => {
    const records = [...empDetails];
    let filteredvaludes = records.filter((item) =>
      item.id !== id
    )
    console.log("deletedValues", filteredvaludes)
    setEmpDetails(filteredvaludes)
    console.log("deletedValues--------------", empDetails)
  }

  const newAddition = (newUserData) => {
    const records = [...empDetails];
    records.push(newUserData)
    console.log("sdfgh", records)
    console.log("hjjjjjjjjjj", newUserData)
    setEmpDetails(records)
    setIsOpen(false)
    console.log("newAddition", empDetails)
  }

  const updateHandler = (editedValue) => {
    const records = [...empDetails];
    const updatedValue = records.map((item) => {
      if (item.id === editedValue.id) {
          item = editedValue;
      }
      return item; 
    })
    console.log("edited values-----------------", editedValue)
    setEmpDetails(updatedValue)
    // console.log("edited values", empDetails)
    setEditIsOpen(false)
  }

  const renderRow = (item, i) => (
    <Table.Row key={i} style={{}}>
      <Table.Cell>{item.id}</Table.Cell>
      <Table.Cell>{item.Name}</Table.Cell>
      <Table.Cell>{item.Mobile}</Table.Cell>
      <Table.Cell>{item.Email}</Table.Cell>
      <Table.Cell>{item.position}</Table.Cell>
      <Table.Cell>{item.department}</Table.Cell>
      <Table.Cell>{item.salary}</Table.Cell>
      <Table.Cell>{item.status}</Table.Cell>
      <Table.Cell>
        <button onClick={() => { editHandeler(item) }}>EDIT</button>
        <button onClick={() => { deleteHandeler(item.id) }}>DELETE</button>
      </Table.Cell>
    </Table.Row>
  );

  return (
    <div>
      <h1>Employee Summary</h1>
      <button onClick={addHandeler}>ADD</button>
      <Modal
        onRequestClose={closeModal}
        isOpen={modalIsOpen}
        style={customStyles}>
        <button onClick={closeModal}>close</button>
        <CrudForm
          setIsOpen={setIsOpen}
          newAddition={newAddition}>
        </CrudForm>
      </Modal>
      <Table celled padded style={{ border: "1px solid grey" }} >
        <Table.Header>
          <Table.Row style={{}} >
            <Table.HeaderCell textAlign='center'>Emp ID</Table.HeaderCell>
            <Table.HeaderCell textAlign='center'>Emp Name</Table.HeaderCell>
            <Table.HeaderCell textAlign='center'>Emp Mobile</Table.HeaderCell>
            <Table.HeaderCell textAlign='center'>Emp Email</Table.HeaderCell>
            <Table.HeaderCell textAlign='center'>Emp Position</Table.HeaderCell>
            <Table.HeaderCell textAlign='center'>Emp Dept</Table.HeaderCell>
            <Table.HeaderCell textAlign='center'>Emp salary</Table.HeaderCell>
            <Table.HeaderCell textAlign='center'>Emp Status</Table.HeaderCell>
            <Table.HeaderCell textAlign='center'>Edit</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {empDetails.map((item, i) => renderRow(item, i))}
        </Table.Body>
      </Table>
      <Modal
        onRequestClose={editCloseModal}
        isOpen={editIsOpen}
        style={customStyles}>
        <button onClick={editCloseModal}><i>close</i></button>
        <CrudEditForm
          setEditIsOpen={setEditIsOpen}
          existingRecord={editItem}
          updateHandler={updateHandler} >
        </CrudEditForm>
      </Modal>
    </div>
  )
}

export default CrudTable
