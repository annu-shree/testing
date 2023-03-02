
import './App.css';
import {connect} from "react-redux"

function App(props) {
  console.log(props) 
  return (
    <div className="App">
      <header className="App-header">
      <h1>I am a component</h1>
      <h1>my name is {props.myname}</h1>
      <button  onClick={() => {props.changeName("suresh")}}>changeit  </button>
      </header>
    </div>
  );
}


const mapStatetoProps = (state) => {
  return{
         myname: state.name  
        } 
      }  


const mapDispatchToprops = (dispatch) => {
        return{
              changeName:(name) => {dispatch({type:'CHANGE_NAME',payload:name})}
              }
            }


export default connect(mapStatetoProps,mapDispatchToprops)(App);
