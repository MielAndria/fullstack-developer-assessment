import React, { Component } from 'react';
import logo from '../../assets/header/myCityLogo.PNG';
import styling from './header.module.css';
import ModalUI from '../../UI/modal/index';
import Registration from '../Registration/index';
import Login from '../Login/index';

class header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModalRegister: false,
            showModalLogin: false,
            registrationError : "",
            loginError : "",
            users:[],
            currentUser:""
            

        }
    }
    static getDerivedStateFromProps(props, state) {
        return {
            ...state,
            users: props.users,
            currentUser: props.currentUser
        };
      
    }

    handleCloseModalRegister = () => {
        this.setState({
            showModalRegister: false
            });
    };

    handleCloseModalLogin = () => {
        this.setState({
            showModalLogin: false
        });
    }

    handleClickRegister = () =>{
        this.setState({
            showModalRegister: true
        });
    };

    handleClickLogin = () =>{
        this.setState({
            showModalLogin: true
        });
    };

    isConnected = (user) =>{
        this.props.UserIsConnected(user);
        this.setState({showModalLogin :false});
    }

    handleClickLogout = () =>{
        this.props.LogOutUser();
    }

    displayWhenNoUserLogged = () =>{
        return(
            <>
                <div className={styling.information}>Sign in to see your desired city</div>
                <div className={styling.authentification}>
                    <label className={styling.register} onClick={this.handleClickRegister}>
                        <button ></button>
                        Register
                    </label>
                    <label className={styling.login} onClick={this.handleClickLogin}>
                        <button ></button>
                        Login
                    </label>
                </div>
            </>
        );
    }

    displayWhenUserConnected = () =>{
        return(
            <>
                <div className={styling.authentification}>
                    <div className={styling.hello}>Hello {this.state.currentUser.FirstName} {this.state.currentUser.LastName}!</div>
                    <label className={styling.login} onClick={this.handleClickLogout}>
                        <button ></button>
                        Log out
                    </label>
                </div>
            </>
        );
    }

    render () {
        return (
            <>
                <div className={styling.headerWrapper}>
                    <div className={styling.logoWrapper}> 
                        <img src={logo} alt="logo"/>
                    </div>
                    <div>
                        {!this.state.currentUser && this.displayWhenNoUserLogged()}
                        {this.state.currentUser && this.displayWhenUserConnected()}
                        
                    </div>
                </div>
                 {!this.state.currentUser && (<>
                        <ModalUI
                            show={this.state.showModalRegister}
                            wrapperClass="NavigationModal"
                            handleCloseModal={this.handleCloseModalRegister}
                            headerClass={styling.NavigationModalHeader}
                            navBody="MobileNavigationBody"
                        >
                            <Registration handleCloseModalRegister = {this.handleCloseModalRegister} isConnected={this.isConnected}/>
                        </ModalUI>
                        <ModalUI
                            show={this.state.showModalLogin}
                            wrapperClass="NavigationModal"
                            handleCloseModal={this.handleCloseModalLogin}
                            headerClass={styling.NavigationModalHeader}
                            navBody="MobileNavigationBody"
                        >
                            <Login users= {this.state.users} isConnected={this.isConnected}/>
                        </ModalUI>
                    </>)}
            
            
            </>
        );
    }
}

export default header;
      