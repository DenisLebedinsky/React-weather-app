import React, {Component} from 'react';
import {connect} from 'react-redux';
import {dellfromFavorites,switchToForecast,setCurrentLocation} from './../../actions/action'

class Favorites extends Component {
    constructor(props){
        super(props);
        this.state ={
            text:""
        };
        this.handleChange =  this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.all_favorites = this.all_favorites.bind(this);

    }
    handleChange(event){
        let newtext = event.target.value.replace(/[^a-z\s]+/ig, "");
        this.setState({text:newtext});
    }

    handleClickLoc(e, id){
        this.props.switchToForecast();
        this.props.setCurrentLocation(id);
    }

    handleDellFavorites(event,id){
        this.props.dellfromFavorites(id);
        event.stopPropagation();
    }

    handleSubmit(event) {
       // / event.preventDefault();
    }

    all_favorites =()=>{
        return(
            (this.state.text === '')? this.props.fav.map((data,index) => {
                return <li key={index}
                           className='list-group-item d-flex justify-content-between align-items-center'
                           onClick={(event) => this.handleClickLoc(event, data.woeid)}>
                    {data.title}

                    <button onClick={(event) => this.handleDellFavorites(event, data.woeid)}
                            className='btn btn-info'
                    >-
                    </button>
                </li>
            }): this.props.fav.map((data,index) =>{
                if(~data.title.toLowerCase().indexOf(this.state.text.toLowerCase())) {
                    return(
                        <li key={index}
                            className='list-group-item d-flex justify-content-between align-items-center'
                            onClick={(e) => this.handleClickLoc(e, data.woeid)}>
                        {data.title}

                        <button onClick={(event) => this.handleDellFavorites(event, data.woeid)}
                                value={index}
                                className='btn btn-info'
                        >-
                        </button>
                    </li>)
                }
                return(null);
            })
        )
    };

    render() {
        return (
            <div className="container animated fadeInUp">
                <div className='row'>
                    <div className='col-lg-12'>
                        <h3>Favorites</h3>
                        <div className="input-group m-auto col-6">
                            <input type="text"
                                   value={this.state.text}
                                   onChange={this.handleChange}
                                   placeholder="city name"
                                   className="form-control"
                            />
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-6 m-auto'>
                        <ul className='list-group list_group'>
                            {this.all_favorites()}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state =>  {
    return {
        fav:state.favorites.fav
    }
};

const mapDispatchToProps = {
    dellfromFavorites,
    setCurrentLocation,
    switchToForecast
};

export default connect(mapStateToProps, mapDispatchToProps)(Favorites)