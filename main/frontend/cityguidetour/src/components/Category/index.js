import React, { Component } from 'react';
import style from './category.module.css';
import './icon.css';
import Locations from '../Location/index';
import Paginations from '../pagination/index';
import Search from '../SearchCity/index';
import loader from '../../assets/category/loader.svg';


class categories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [],
            locations:[],
            listlocation: [],
            apiUrl :"http://localhost:58815/api/",
            currentLocation : [],
            pageCounter: 0,
            currentPage: 0,
            currentUser:"",
            currentCategoryId:1,
            loading:false
        }
    }
	
	static getDerivedStateFromProps(props, state) {
        return {
            ...state,
            categories:props.categories,
            currentUser : props.currentUser
        };
    }
    

    componentDidMount() {
        this.fetchLocation(1,"New York");
        this.setState({ currentPage: 1 });
        
    }
    
    fetchLocation = (id,city) => {
        var link = [this.state.apiUrl,"locations?id=",id,"&city=",city].join("");
        
        this.setState({ loading: true, locations:[] ,listlocation:[],pageCounter: 0 }, () => {
            fetch(link)
            .then(res => res.json())
            .then((data) => {
                this.setState({ locations: data,
                                loading:false 
                                
                                },()=>{
                    this.PopulateListLocation();
                })
            })
            .catch(console.log)
        });
        this.setState({ currentLocation: [id,city] })
   };

    fetchCategory = () => {
        var link = [this.state.apiUrl,"Categories"].join("");
        
        fetch(link)
        .then(res => res.json())
        .then((data) => {
        this.setState({ categories: data })
        })
        .catch(console.log)
        
    };
    
    handleChangeCategory = (e) => {
        let id = parseInt(e.target.value);
        let city = this.state.currentLocation[1];
        this.fetchLocation(id,city);
        this.setState({ currentPage: 1 ,currentCategoryId: id});
    }

    PopulateListLocation = () => {
        let n = this.state.locations?.length;
        let pageNumber = Math.ceil(n/10);
        let separatelocation = [];
        let list = [];
        let counter = 0;

        this.state.locations.forEach(location => {
            counter++;
            separatelocation.push(location);

            if(counter === 10){
                list.push(separatelocation);
                counter = 0;
                separatelocation = [];
            }
        });

        this.setState({ listlocation: list,
            pageCounter: pageNumber
        })
    };

    changeCurrentPage = (index) => {
        this.setState({currentPage : index});
    }

    showCategories = () => {
        let activeCategory = [style.category,style.activeCategory].join(" ");
        return(
            <div className={style.Navigation}>
                {this.state.categories.map((category) => (
                <label key={category.Id}>
                    <input type="radio" name="checkCategory" value={category.Id} onChange={this.handleChangeCategory}/>
                    <div className= {category.Id === this.state.currentLocation[0]? activeCategory :style.category}>
                        <span className={category.Name}></span>
                        <span className= {style.categoryText}>{category.Name}</span>
                    </div>
                </label>
                
                ))}
            </div>
        );
    }
    
    
    render () {
        
        let category = this.state.categories.filter(category => category.Id === this.state.currentLocation[0]);
        let title = [category[0]?.Name," near to ",this.state.currentLocation[1]];
        return (
            <>
                {this.showCategories()}
                {this.state.currentUser && (
                    <Search 
                        fetchLocation={this.fetchLocation} 
                        currentCategoryId={this.state.currentCategoryId}
                    />
                )}
                <div className={style.ListLocationTitle}>{title}</div>
                {this.state.loading && ( 
                    <div className={style.loaderWrapper}>
                        <img src={loader} alt="loader"/>
                    </div>
                )}
                
                {this.state.listlocation && (this.state.pageCounter > 0) &&(
                    <>
                        <Locations locations={this.state.listlocation[this.state.currentPage-1]} 
                            loading={this.state.loading}
                        />
                        <Paginations 
                            pageCounter={this.state.pageCounter} 
                            currentPage={this.state.currentPage} 
                            changeCurrentPage= {this.changeCurrentPage}
                        />
                    </>
                )}
            </>         
        );    
    }
}

export default categories;
      