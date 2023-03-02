import React, { useState } from 'react'

// create html outlate (done)
// create create object of data
//create state for input data
//handlesubmit
//handledata
//create state for check -re render
// useeffect for render check 
//pre Tag or alert or 
//batching in rea ct 
// usesate synchronous and asynchronous
const Form = () => {
  const Data = {
    username: "",
    email: "",
    password: "",
    Address: "",
    gender: "",
    city: "",
    Agree: false,

  }
  const [formdata, setFormdata] = useState(Data);
  const [detail, setDetail] = useState(null);
  
  const handleData = (e) => {
    const { name, value, type, checked } = e.target

    setFormdata({ ...formdata, [name]: type === "checkbox" ? checked : value })
    console.log("222", formdata);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formdata.username || !formdata.email || !formdata.password) {
      alert("All feilds are mandatory.")
    } else {

      if (window.confirm("Do you really want to Registered?")) {
        setDetail(formdata); // preserving details
        setFormdata(Data); //cleareing form
      }
    }
  }
  return (
    <>
      <pre>{(detail) ? <div>
        <div><h3>congratulations you are registered!</h3></div>
        <div>username:{detail.usernam}</div>
        <div>email:{detail.email}</div>
        <div>password:{detail.password}</div>
        <div>Address:{detail.Address}</div>
        <div>Gender:{detail.gender}</div>
        <div>City:{detail.city}</div>
      </div> : ""}</pre>

      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div>

          <div ><h1 style={{ border: "2px solid black", width: "400px" }}>Registration Form</h1></div>

          <form  onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", justifyContent: "space-evenly", border: "2px solid black", height: "500px" }}>

            <div><input type="text"
              style={{
                height: "30px",
                width: "200px"
              }}
              name='username'
              value={formdata.username}
              onChange={handleData}
              placeholder="username" />
            </div>


            <div><input name='email'
              style={{
                height: "30px",
                width: "200px"
              }} type="email" value={formdata.email}
              onChange={handleData}
              placeholder="email" /></div>


            <div><input name='password'
              style={{
                height: "30px",
                width: "200px"
              }} type="password" value={formdata.password} onChange={handleData} placeholder="password" /></div>


            <div><input name='Address'
              style={{
                height: "30px",
                width: "200px"
              }} type="text" value={formdata.Address} onChange={handleData} placeholder="Address" /></div>


            <div>
              <div
                style={{
                  marginLeft: "100px",
                  height: "30px",
                  width: "200px",
                  border: "1px solid grey"
                }}>Gender</div>
              <div>
                <label style={{ marginLeft: "15px" }}>Female</label>
                <input
                  type="radio"
                  value="Female"
                  name='gender'
                  checked={formdata.gender === "Female"}
                  onChange={handleData} /> <br />
                <label style={{ marginLeft: "15px" }}>Male</label>
                <input
                  type="radio"
                  value="Male"
                  name='gender'
                  checked={formdata.gender === "Male"}
                  onChange={handleData} />
              </div>


              <div> <select
                name="city"
                value={formdata.city}
                onChange={handleData}
                style={{
                  height: "30px",
                  width: "200px",
                  marginBottom: "4px",
                  marginTop: "4px"
                }}>
                <option value="city">Select City</option>
                <option value="nagpur">Nagpur</option>
                <option value="indore">Indore</option>
                <option value="bhopal">Bhopal</option>
                <option value="gwalior">Gwalior</option>
              </select>
              </div>


              <div><label>Agree</label><input
                type="checkbox"
                name="Agree"
                checked={formdata.Agree}
                onChange={handleData}
                style={{}}
              />
              </div>
            </div>



            {formdata.Agree === true
              ? <button style={{
                width: "100px",
                height: "30px",
                marginLeft: "150px"
              }}
                onClick={handleSubmit} >Submit</button>
              : <button style={{
                width: "100px",
                height: "30px",
                marginLeft: "150px"
              }}
                onClick={handleSubmit}
                disabled>Submit</button>}
          </form>
        </div>
      </div>
    </>
  )
}

export default Form
