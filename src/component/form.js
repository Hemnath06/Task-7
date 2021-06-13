import React, { Component } from "react";
import "./form.css";
import Side from "./1.jpg";

export default class Form extends Component{
  
  constructor(){
      super();
      this.state ={
          name:"",
          password:"",
          email:"",
          drop:"",
          radio:"",
          check1:"",
          check2:"",
          check3:""
      }
  }

  changeName =(event) =>{
      this.setState({
          name: event.target.value
      })
  }

  changePass =(event) =>{
    this.setState({
        password: event.target.value
    })
}

  changeEmail =(event) =>{
    this.setState({
       email: event.target.value
    })
}

  changeDrop =(event) =>{
    this.setState({
       drop: event.target.value
    })
}

  changeRadio =(event) =>{
    this.setState({
       radio: event.target.value
    })
}
  changeOne =(event) =>{
    this.setState({
       check1: event.target.value
    })
}


  changeTwo =(event) =>{
    this.setState({
       check2: event.target.value
    })
}
  changeThree =(event) =>{
    this.setState({
       check3: event.target.value
    })
}


  sub = (event) =>{
      event.preventDefault();
      alert("Username: " + this.state.name)
      alert("Password: " + this.state.password)
      alert("Email: " + this.state.email)
      alert("Country: " + this.state.drop)
      alert("Gender: " + this.state.radio)
      if(this.state.check1 !== ""){
        alert("Language Known: " + this.state.check1);
      }
      if(this.state.check2 !== ""){
        alert("Language Known: " + this.state.check2);
      }
      if(this.state.check3 !== ""){
        alert("Language Known: " + this.state.check3);
      }
  }
  

  render(){
    return(
    <>
     <section>
      <div className="imgBx">
             <img src={Side} />
      </div>
      <div className="contentBx">
          <div className="formBx">
             <h2>Register</h2>
              <form onSubmit={this.sub}>
                  <div className="inputBx">
                        <span>Username</span>
                        <input type="text" value={this.state.name} onChange={this.changeName}/>
                  </div>
                  <div className="inputBx">
                        <span>Password</span>
                        <input type="password" value={this.state.password} onChange={this.changePass} />
                  </div>
                  <div className="inputBx">
                        <span>Email</span>
                        <input type="text" value={this.state.email} onChange={this.changeEmail} />
                  </div>
                  <div className="inputBx">
                        <span>Country</span>
                        <select value={this.state.drop} onChange={this.changeDrop}>
                            <option>India</option>
                            <option>China</option>
                            <option>America</option>
                        </select>
                        
                  </div>
                  <div className="radio">
                        <span>Gender</span>
                        <div className="check">
                        <label>
                        <input type="radio"  value="Male" checked={this.state.radio === "Male"} onChange={this.changeRadio} />
                          <span> Male</span>
                        </label>
                        <label>
                        <input type="radio"  value="Female" checked={this.state.radio === "Female"} onChange={this.changeRadio} />
                          <span> Female</span>
                        </label>
                        </div>
                  </div>
                  <div className="radio">
                       <span>Language Known</span>
                       <div className="checkBx">
                       <label>
                       <input type="checkbox" value="English" onChange={this.changeOne} /> <span>English</span> </label>
                       <label>
                       <input type="checkbox" value="Tamil" onChange={this.changeTwo} />  <span>Tamil</span>
                       </label>
                       <label>
                       <input type="checkbox" value="Telugu" onChange={this.changeThree} />  <span>Telugu</span>
                       </label>
                       </div>
                  </div>
                  <div className="inputBx">
                         <input type="submit" value="Submit" />
                  </div>
              </form>
          </div>
      </div>
      </section>
    </>
    )
  }
}