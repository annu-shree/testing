import React, { useEffect, useState } from 'react'
import "./Dropdown.css"
const fruits = [{
  name: "apple",
  checked: false
},
{
  name: "Mango",
  checked: false
},
{
  name: "Banana",
  checked: false
},
{
  name: "Coconut",
  checked: false
},
{
  name: "Leechi",
  checked: false
},
{
  name: "Guava",
  checked: false
},]


const DropdownWithmultiselect = () => {
 
  const [items, setItems] = useState(fruits)
  const [isdisplay, setIsDisplay] = useState(false)
  const [selectedItem, setSelectItem] = useState([])

  function itemHandler(e, i, name) {
    const values = [...selectedItem];
    const { checked } = e.target;
    items[i].checked = checked
    if (checked) {
      values.push(items[i]);
      setSelectItem(values);
      console.log("selectitem----", selectedItem, values);
    } else {
      let filterevalues = values.filter((item) => item.name !== name)
      console.log("filtervalues...", values)
      setSelectItem(filterevalues)
      console.log("filtervalues", filterevalues)
    }
  }

// const removeHandler = (e,name,i)=>{
//   const values = [...selectedItem];
//   const { checked } = e.target;
//   items[i].checked = checked
//   if(checked){
//   let filterevalues = values.filter((item) => item.name !== name)
//   console.log("filtervalues...R", values)
//   setSelectItem(filterevalues)
//   console.log("filtervaluesrrrrrrrrrr", filterevalues)
  
//  }}

  const RenderSelectedItems = () => (
    selectedItem.map((item, i) =>
      <div key={i} style={{
        border: "1px solid grey",
        borderRadius: "10px",
        textAlign: "center",
        display: "flex",
        height: "20px",
      }}><div>{item.name}</div>
        <i
         onClick={()=>{}}
         style={{ cursor: "pointer" }}>
          <span className="material-symbols-outlined">
            close
          </span>
        </i>
      </div>) 
  );
  return (
    <>
      <div className='dd-component'>
        <div 
        className='dd-bar'
        onClick={() => { setIsDisplay(!isdisplay) }} >
          <div style={{
            display: "flex",
            flexDirection: "row"
          }}>{
              selectedItem.length > 0 ?
               <RenderSelectedItems/>
                : "Select-fruits "}</div>
          <div style={{ marginRight: "8px", cursor: "pointer" }}
>
            {isdisplay ?
              <i>
                <span className="material-symbols-outlined">
                  expand_less
                </span>
              </i> :
              <i>
                <span className="material-symbols-outlined">
                  expand_more
                </span>
              </i>}
          </div>
        </div>
        {isdisplay ?
          <div className='dd-items' >
            {items.length > 0 && items.map((option, i) => <div key={i} >
              <input
                type="checkbox"
                onChange={(e) => { itemHandler(e, i,option.name) }} /> {option.name}{option.checked} </div>
            )}
          </div> : null}
      </div>
    </>
  )
}


export default DropdownWithmultiselect;
