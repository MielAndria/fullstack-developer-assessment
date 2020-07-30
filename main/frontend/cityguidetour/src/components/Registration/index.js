import React, { Component } from 'react';
import style from './registration.module.css';



class registration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            FirstName: '',
            LastName: "",
            UserName: "",
            Email: "",
            Password:"",
            City:""
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit (event) {
        event.preventDefault();
        const requestOptions = {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify(this.state)
        };

        fetch("http://localhost:58815/api/Users/saveUser", requestOptions)
            .then(res=> 
                res.json())
            .then(res => {
                this.logUserAfterRegistration(res);
            })
            .catch(error => {
                console.log("error on registration", error)
            })
    };

    logUserAfterRegistration = (res) =>{
        localStorage.setItem("user",res.Id);
        this.props.isConnected(res);
        this.props.handleCloseModalRegister();
        
    }


    handleChange (event) {
        this.setState({
            [event.target.name] : event.target.value
        })
    };
   
    
    render () {
        return (
            <>
                <div className={style.Title}>Registration</div> 
                <form className={style.Form} onSubmit={this.handleSubmit}>
                    <input 
                        type="text" 
                        placeholder="Firstname"
                        name="FirstName" 
                        value={this.state.FirstName}  
                        onChange={this.handleChange} 
                        required
                    />
                    <input 
                        type="text" 
                        placeholder="Lastname"
                        name="LastName" 
                        value={this.state.LastName} 
                        onChange={this.handleChange} 
                        required
                    />
                    <input 
                        type="text" 
                        placeholder="Username"
                        name = "UserName"
                        value={this.state.Username}
                        onChange={this.handleChange} 
                        required
                    />
                    <input 
                        type="email"
                        name = "Email"
                        placeholder="Email" 
                        value={this.state.Email}
                        onChange={this.handleChange} 
                        required
                    />
                    <input 
                        type="password" 
                        placeholder="Password"
                        name = "Password"
                        value={this.state.Password}
                        onChange={this.handleChange} 
                        required
                    />
                    <input 
                        type="text" 
                        placeholder="City"
                        name = "City"
                        value={this.state.City}
                        onChange={this.handleChange} 
                        required
                    />
                    <div className={style.BtnWrapper}>
                        <button type="submit">Register</button>
                        <button type="reset" >Cancel</button>
                    </div>
                    
                    {this.state.displayErrorMessage &&(<label className={style.Error}>{this.state.registerError }</label>)}
                </form>
            </>
        );
    }
}

export default registration;
      