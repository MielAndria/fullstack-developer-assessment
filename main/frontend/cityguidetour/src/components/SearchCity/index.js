import React, { Component } from 'react';
import style from './search.module.css';


class Search extends Component {
    constructor(props) {
      super(props);
      this.state = {
          categories: [],
          city:[],
          apiUrl :"http://localhost:58815/api/",
          citySearch:"",
          displayErrorSearch: false,
          currentCategoryId:0
          
      }
    }
    static getDerivedStateFromProps(props, state) {
        
        return {
            ...state,
            currentCategoryId : props.currentCategoryId
        };
    }

    
    fetchCity = () => {
        var link = [this.state.apiUrl,"City"].join("");
        
        fetch(link)
        .then(res => res.json())
        .then((data) => {
        this.setState({ city: data })
        })
        .catch(console.log)
        
    };
    
    handleChange = (e) =>{
        this.setState({citySearch : e.target.value})
    }
    
    SearchLocationByCity= () =>{
        if(this.state.citySearch && this.state.city){
            let find = this.state.city.filter(city => ((city.Name.toLowerCase() === this.state.citySearch.toLowerCase())));
            
            if(find.length>0){
                this.props.fetchLocation(this.state.currentCategoryId,find[0].Name);
                
                this.setState({displayErrorSearch:false})
            }else{
                this.setState({displayErrorSearch:true})
            }
        }
        
    }
    componentDidMount() {
        this.fetchCity();
    }

  render () {
    
    return(
        <div className={style.citySearch}>
            <div>
                <input type="text" 
                value={this.state.citySearch} 
                placeholder="Tape here your desired city..." 
                onChange={this.handleChange}/>
                <button type="button" onClick={this.SearchLocationByCity}>Search</button>
            </div>
            {this.state.displayErrorSearch &&(
            <div className={style.cityErrorMessage}>City not found please insert correct value</div>
            )}
        </div>
    );
  }
}

export default Search;
