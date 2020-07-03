import React from 'react';
import './App.css';
import ReactDOM from "react-dom";
import Child from './Child';



export class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      countries:[{label:"India", value:1},{label:"Australia",value:2},{label:"USA",value:3},{label:"UK",value:4},{label:"Srilanka",value:5},{label:"South Afrika",value:6},
      {label:<div ><button style={{padding:"5px",backgroundColor:"#0D2CAB",color:"#fff",border:"1px solid #0D2CAB",borderRadius:"5px"}}>More...</button></div>,value:0},{label:"India", value:7},{label:"Australia",value:8},{label:"USA",value:9},{label:"UK",value:10},{label:"Srilanka",value:11}],
      users:{admin: {name:"jhon",role:"Admin"},emp: {name:"rita",role:"Emp"}},
      selecetdvalue:{}, selecteduser:""
    };
    this.displaySelectedValue = this.displaySelectedValue.bind(this);
  }

  displaySelectedValue (val){
    this.setState({selecetdvalue:val});
  }

  handleClickAdmin(){
   // setTimeout(() => {
      this.setState({ selecteduser: "Admin" });
      console.log("Admin")
   //  }, 1000);
    
  }
   
  handleClickemp() {
   // setTimeout(() => {
    this.setState({ selecteduser: "Employee" });
    console.log("user")
   // }, 1000);
    
  }


  render() {
    const { selecteduser} = this.state;
    return (
      <React.Fragment>
       
        <p style={{ margin: "20px 0 10px 10px", color: "blue" }}>Note: Search your country in the dropdown, if not exist click on <b><span style={{ color: "lightgreen" }}>Add&select</span></b> button to add the country</p>
        <button style={{ margin: "10px 0 10px 200px", color: "blue" }} onClick={() => this.handleClickAdmin()}>
          Admin
        </button>  
        <button style={{ margin: "10px 0 10px 200px", color: "blue" }} onClick={() => this.handleClickemp()}>
          Employee
        </button>
        <p style={{ margin: "10px 0 10px 300px", color: "blue" }}>Role: <b><span style={{ color: "green" }}>{ this.state.selecteduser}</span></b></p>
        <Child user={selecteduser == "Admin" ? this.state.users.admin : this.state.users.emp} getSelectedValue={this.displaySelectedValue} options={this.state.countries}/>
        <div style={{ margin: "50px 0 100px 100px" , color: "purple" }}> <b>selected value rendering in parent</b> : <span style={{color:"green"}}> {this.state.selecetdvalue.label} </span></div>
      </React.Fragment>
      
     )}  
    }
      
export default App; 
