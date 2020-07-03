import React from 'react';
import './App.css';
import Select from 'react-select';

class Child extends React.Component{
    constructor(props) {
        super(props);
    
        this.state = {
          countries: (props.options.length > 7) ? props.options.slice(0, 7) : props.options ,
          selectValue:"",
          inputValue:"",
          user:props.user
          
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleInput1 = this.handleInput1.bind(this);
        this.getSelectedValue = (props.getSelectedValue) ? props.getSelectedValue.bind(this) : () => {};
        this.handleChange = this.handleChange.bind(this);
      };

    componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps', nextProps);
    this.setState({user: nextProps.user});
  }
      
      handleInput1(val){
          
        const {inputValue} = this.state;
        const {countries} =this.state;
        const len = countries.length;
        countries.splice(6,0,{label:val,value:len+1});
        this.props.options.splice(6,0,{label:val,value:len+1});

        // this.props.options.forEach((element,index) => {
        //     if(element.value == 0){
        //         if(index > -1)
        //         this.props.options.splice(6,0,{label:val,value:len+1});
        //     }
            
        
        // });
        
        //countries.push({label:val,value:len+1});
        this.setState({countries:countries});
        this.handleChange(val);
      }
      handleInput(e){
        if(e !="")
        this.setState({inputValue:e});
         
      }
      handleChange(val){
          if(val.value == 0){
            var index = this.props.options.indexOf(val);

            if (index > -1) {
                this.props.options.splice(index, 1);
            }
            //this.props.options.splice(6,1);
            this.setState({selectedValue:{}});
            this.setState({countries:this.props.options}) ;
          }else{
            this.setState({selectedValue:val});
            this.getSelectedValue(val);
          }
          
      }
      
      
     

render() {
    
    return (
        <div style={{width:"400px",margin:"10px 0 100px 100px"}}> 
        <Select
        name="country"
        value={this.state.selectedValue}
        options={this.state.countries}
        onChange={this.handleChange}
        onInputChange={this.handleInput}
        loadOptions ={() =>{}}
        clearable={true}
        autoBlur={true}
        maxMenuHeight={1000}
        optionRenderer={this.renderOption}
    noOptionsMessage={() => (this.state.user.role == "Admin")?  <div><b>"{this.state.inputValue}"</b> not found <span style={{margin:"0 0 0 50px"}}><button onClick={() =>this.handleInput1(this.state.inputValue)}>Add & Select</button></span> </div>:"this user is not priviliage to add option"}
        />{
            

        }
        
    </div>
      
     )}  
    }

export default Child;