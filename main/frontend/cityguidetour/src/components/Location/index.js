import React, { Component } from 'react';
import style from './location.module.css';

class Locations extends Component {
    constructor(props) {
        super(props);
        this.state = {
            locations: []
        }
    }

    static getDerivedStateFromProps(props, state) {
        return {
            ...state,
            locations:props.locations,
            
        };
    }
    

    showlocation = () =>{
        if(this.props.locations){
            return (
                <>
                    {this.state.locations.map((location) =>(
                        <div className= {style.Tile} key={location.Id}> 
                            <div className= {style.TileImage}>
                                <img alt={location.Name} src={location.Image} />
                            </div>
                            <div className={style.TileInfo}>
                                <div className= {style.TileTitle}>
                                    {location.Name}
                                </div>
                                <div className= {style.TileDescription}>
                                    {location.Adress}
                                </div> 
                            </div>
                        </div>
                    ))}
                </>
            );
        }else{
            return(
                <>
                    {!this.props.loading &&(
                        <div className={style.notFound}>Oops!Location not found</div>
                    )}
                </>
            )
        }

    }

    render () {
        
        return (
            <>
                <div className={style.TileWrapper}>
                    {this.showlocation()}
                </div>
            </>
        );
    }
}

export default Locations;
      