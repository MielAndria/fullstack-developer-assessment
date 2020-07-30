import React, { Component } from 'react';
import style from '../Registration/registration.module.css';


class login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loginError: "something wrong!",
            displayErrorMessage: false,
            UserName: "",
            Password: "",
            users: [],

        }
    }

    static getDerivedStateFromProps(props, state) {
        return {
            ...state,
            users: props.users

        };

    }

    handleChangeUserName = (e) => {
        this.setState({ UserName: e.target.value })


    };

    handleChangePassword = (e) => {
        this.setState({ Password: e.target.value })
    };

    handleSubmit = () => {
        let NotValidate = true;
        if (this.state.UserName && this.state.Password) {
            let find = this.state.users.filter(user => ((user.UserName === this.state.UserName) && (user.Password === this.state.Password)));
            if (find.length > 0) {
                NotValidate = false;
                this.props.isConnected(find[0]);
                this.setState({ displayErrorMessage: false })
                localStorage.setItem("user",find[0].Id)
            }
        }

        if (NotValidate) {
            this.setState({ displayErrorMessage: true })
        }

    };


    render() {
        return (
            <>
                <div className={style.Title}>Login</div>
                <form className={style.Form}>
                    <input type="text"
                        placeholder="Username"
                        name="Username"
                        required
                        value={this.state.Username}
                        onChange={this.handleChangeUserName}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        name="Password"
                        required
                        value={this.state.Password}
                        onChange={this.handleChangePassword}
                    />
                    <div className={style.BtnWrapper}>
                        <button type="button" onClick={this.handleSubmit}>Submit</button>
                    </div>
                    {this.state.displayErrorMessage && (<label className={style.Error}>{this.state.loginError}</label>)}
                </form>

            </>
        );
    }
}

export default login;