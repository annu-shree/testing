import React, { useState } from 'react'


const CrudEditForm = ({ existingRecord, setEditIsOpen, updateHandler }) => {
  const [formdata, setFormdata] = useState(existingRecord);
  const closeModal = () => {
    setEditIsOpen(false)
  }

  const handleData = (e) => {
    const { name, value } = e.target
    setFormdata({ ...formdata, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    updateHandler(formdata)
    console.log("edited values", formdata)
  }

  return (
    <>

      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", backgroundColor: "orange" }}>
        <div>
          <div >
            <h1
              style={{ width: "400px", paddingLeft: "60px" }}>
              Employee Detail Form
            </h1>
          </div>
          <form
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              height: "500px"
            }}>
            <div
              style={{
                height: "30px",
                width: "40px",
                border: "2px solid grey",
                borderRadius: "50%",
                textAlign: "center",
                marginLeft: "170px"
              }}>Id:{formdata.id}
            </div>

            <div>
              <input
                type="text"
                style={{
                  height: "30px",
                  width: "250px",
                  border: "2px solid grey",
                  marginLeft: "80px"
                }}
                name='Name'
                value={formdata.Name}
                onChange={handleData}
                placeholder="Name" />
            </div>

            <div>
              <input type="text"
                style={{
                  height: "30px",
                  width: "250px",
                  border: "2px solid grey",
                  marginLeft: "80px"
                }}
                name='Mobile'
                value={formdata.Mobile}
                onChange={handleData}
                placeholder="Mobile" />
            </div>

            <div>
              <input name='Email'
                style={{
                  height: "30px",
                  width: "250px",
                  border: "2px solid grey",
                  marginLeft: "80px",
                }}
                type="Email"
                value={formdata.Email}
                onChange={handleData}
                placeholder="email" /></div>

            <div>
              <select
                name="position"
                value={formdata.position}
                onChange={handleData}
                style={{
                  height: "30px",
                  width: "250px",
                  marginBottom: "4px",
                  marginTop: "4px",
                  border: "2px solid grey",
                  marginLeft: "80px"
                }}>
                <option value="position">Select position</option>
                <option value="Accountant">Accountant</option>
                <option value="Analyst">Analyst</option>
                <option value="Manager">Manager</option>
                <option value="HRHead">HRHead</option>
                <option value="CA">CA</option>
                <option value="Executive">Executive</option>
              </select>
            </div>

            <div>
              <select
                name="department"
                value={formdata.department}
                onChange={handleData}
                style={{
                  height: "30px",
                  width: "250px",
                  marginBottom: "4px",
                  marginTop: "4px",
                  border: "2px solid grey",
                  marginLeft: "80px"
                }}>
                <option value="department">Select department</option>
                <option value="IT">IT</option>
                <option value="Finance">Finance</option>
                <option value="HR">HR</option>
                <option value="operation">operation</option>
              </select>
            </div>

            <div>
              <input name='salary'
                style={{
                  height: "30px",
                  width: "250px",
                  border: "2px solid grey",
                  marginLeft: "80px"
                }}
                type=""
                value={formdata.salary}
                onChange={handleData}
                placeholder="salary" /></div>

            <div>
              <input name='status'
                style={{
                  height: "30px",
                  width: "250px",
                  border: "2px solid grey",
                  marginLeft: "80px"
                }}
                type="text"
                value={formdata.status}
                onChange={handleData}
                placeholder="status" /></div>
            <div style={{
              height: "30px",
              width: "250px",
              display: "flex",
              gap: "10px"
            }}>
              <button
                style={{
                  width: "80px",
                  height: "30px",
                  marginLeft: "140px"
                }}
                onClick={closeModal}>Close</button>
              <button style={{
                width: "80px",
                height: "30px",
              }}
                onClick={(e) => handleSubmit(e, formdata)}> SubmitEdit </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default CrudEditForm
