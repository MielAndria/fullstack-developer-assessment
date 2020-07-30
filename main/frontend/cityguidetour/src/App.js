import React, { Component } from 'react';
import Header from './components/Header/index';
import Categories from './components/Category/index';
import './App.css';


class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
          categories: [],
          users: [],
          apiUrl :"http://localhost:58815/api/" ,
          currentUser:""
      }
    }
   
    fetchCategory = () => {
      var link = [this.state.apiUrl,"Categories"].join("");
      
      fetch(link)
      .then(res => res.json())
      .then((data) => {
      this.setState({ categories: data })
      })
      .catch(console.log)
    };
    
    fetchUser = () => {
      var link = [this.state.apiUrl,"Users"].join("");
      
      fetch(link)
      .then(res => res.json())
      .then((data) => {
        this.setState({ users: data},()=>{
        this.getCurrentUser();
        })
      })
      .catch(console.log)
    };

    UserIsConnected = (user) =>{
      this.setState({currentUser:user})
    }
    LogOutUser = () =>{
      localStorage.removeItem('user');
      this.setState({currentUser:""})
    }

    getCurrentUser = () => {
      let userID = localStorage.getItem("user") || "";
      if(userID){
        let Userfind = this.state.users.filter(user => (user.Id=== parseInt(userID)));
        this.setState({currentUser: Userfind[0]})
      }
    }
    
    componentDidMount() {
      this.fetchCategory();
      this.fetchUser();
    }

  render () {
    return (
      <div className="App"> 
        <Header users={this.state.users} 
                UserIsConnected={this.UserIsConnected} 
                currentUser={this.state.currentUser} 
                LogOutUser = {this.LogOutUser}
        />
        <Categories categories={this.state.categories} 
                    currentUser={this.state.currentUser}
                  />
      </div>
    );
  }
}

export default App;
