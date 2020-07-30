import React, { Component } from 'react';
import style from './pagination.module.css';



class Paginations extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pageCounter: 0,
            pages:[],
            currentPage : 0
        }
    }

    static getDerivedStateFromProps(props, state) {
        return {
            ...state,
            pageCounter:props.pageCounter,
            currentPage:props.currentPage
        };
    }

    createPage = (count) => {
        let page =  [];
        for(let i=1 ; i<=count;i++){
            page.push(i);
        }
        this.setState({pages :page });
    }
    
    componentDidMount() {
        this.createPage(this.state.pageCounter);
    }

    handleChange = (e) => {
        let index = parseInt(e.target.value);
        this.props.changeCurrentPage(index);
    }

    render () {
        let prev = "<";
        let next = ">";
        let currentPageStyle = [style.page,style.activePage].join(" ");
         return (
            <div className={style.pagination}>
                {this.state.currentPage >1 &&(<label>
                    <input type="radio" name="checkPage" value={this.state.currentPage-1} onChange={this.handleChange}/>
                    <div className={style.page}>
                        {prev}
                    </div>
                </label>)}
                
                {this.state.pages.map((page) => (
                    <label key={page}>
                        <input type="radio" name="checkPage" value={page} onChange={this.handleChange}/>
                        <div className={page === this.state.currentPage ?currentPageStyle:style.page}>
                            {page}
                        </div>
                    </label>
                        
                ))}
                
                {this.state.currentPage <this.state.pageCounter &&(<label>
                    <input type="radio" name="checkPage" value={this.state.currentPage+1} onChange={this.handleChange}/>
                    <div className={style.page}>
                        {next}
                    </div>
                </label>)}
            </div>
            
        );
    }
}
export default Paginations ;