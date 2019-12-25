import React, { Component } from 'react';
import SimpleReactValidator from 'simple-react-validator';
import "./form.css";

class Form extends Component{
    constructor(){
    super()
    this.state={
        firstname:"",
        lastname:"",
        gender:"",
        dob:"",
        mobileno:"",
        emailid:"",
        passwoed:"",
        flatno:"",
        wingno:""
    }
    

    this.validator = new SimpleReactValidator({autoForceUpdate:this});

    };
    setFirstname=(e)=>this.setState({firstname:e.target.value});
    setLastname=(e)=>this.setState({lastname:e.target.value});
    setGender=(e)=>this.setState({gender:e.target.value});
    setDob=(e)=>this.setState({dob:e.target.value});
    setMobileno=(e)=>this.setState({mobileno:e.target.value});
    setEmailid=(e)=>this.setState({emailid:e.target.value});
    setPassword=(e)=>this.setState({password:e.target.value});
    setFlatno=(e)=>this.setState({flatno:e.target.value});
    setWingno=(e)=>this.setState({wingno:e.target.value});
    handleFormSubmit=(e)=>{
    if (this.validator.allValid()){
        let data={
            firstnme:this.state.firstname,
            lastname:this.state.lastname,
            gender:this.state.gender,
            dob:this.state.dob,
            mobileno:this.state.mobileno,
            emailid:this.state.emailid,
            password:this.state.password,
            flatno:this.state.flatno,
            wingno:this.state.wingno,   
        }
        console.log(data);
    }   
    else{
        this.validator.showMessages();
        this.forceUpdate();
    } 
    }
    render(){
        const style={marginTop:"50px"}


        return(
            <div className="container"style={style}>
                <div className="row" >
                <div className="col-md-8">
        <form>
            <div className="form-group">
                <input type="text" className="form-control" placeholder="Enter firstname"
                onChange={this.setFirstname}
                value={this.setState.firstname}
                style={{marginTop:"30px"}}
                />
                 {this.validator.message('firstname', this.state.firstname, 'required|alpha|min:5')}
 
            </div>
            <div className="form-group">
                <input type="text" className="form-control" placeholder="Enter lastname"
                        onChange={this.setLastname}
                        value={this.setState.lastname}
                />
                 {this.validator.message('lastname', this.state.lastname, 'required|alpha')}

            </div>
            <div className="form-group">
            <div>
                <input type="radio" name="gender"
                 onChange={this.setGender}
                value={this.setState.gender}/>Male
                </div>
                <div>
                 <input type="radio" name="gender"
                onChange={this.setGender}
                value={this.setState.gender}/>Female
                   </div>
                   <div>
                <input type="radio" name="gender"
                onChange={this.setGender}
                value={this.setGender.gender}/>Other
                    </div>
             </div>
            <div className="form-group">
                <input type="date" className="form-control"
                        onChange={this.setDob}
                        value={this.setState.dob}
                />
                 {/* {this.validator.message('dob', this.state.dob, 'required|after_or_equal:date')} */}

            </div>
            <div className="form-group">
                <input type="text" className="form-control" placeholder="Enter MobileNo"
                        onChange={this.setMobileno}
                        value={this.setState.mobileno}
                />
                 {this.validator.message('mobileno', this.state.mobileno, 'required|phone')}
                
            </div>
            <div className="form-group">
                <input type="text" className="form-control" placeholder="Enter EmailId"
                        onChange={this.setEmailid}
                        value={this.setState.emailid}
                />
                 {this.validator.message('email', this.state.email, "required|email")}

            </div>
            <div className="form-group">
                <input type="password" className="form-control" placeholder="Enter password"
                onChange={this.setPassword}
                value={this.setState.password}
                />
                 {this.validator.message('password', this.state.password, 'required|alpha|min:5')}
 
            </div>
            <div className="form-group">
                <input type="text" className="form-control" placeholder="Enter FlatNo"
                        onChange={this.setFlatno}
                        value={this.setState.flatno}
                />
            </div>
            {this.validator.message('flatno', this.state.flatno, 'required|numeric')}

            <div className="form-group">
                <input type="text" className="form-control" placeholder="Enter WingNo"
                        onChange={this.setWingno}
                        value={this.setState.wingno}
                />
                 {this.validator.message('wingno', this.state.wingno, 'required|alpha')}
                
            </div>
            <button type="button" className="btn btn-primary btn-md"
            onClick={this.handleFormSubmit}
            >Submit</button>
        </form>
    </div>
                </div>
            </div>
        )
    }
}





export default Form;