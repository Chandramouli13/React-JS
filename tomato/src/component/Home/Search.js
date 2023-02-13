import React,{Component} from 'react';
import './Search.css';

const lurl = "http://3.17.216.66:4000/location"
const rurl = "http://3.17.216.66:4000/restaurant?stateId="

class Search extends Component {
    constructor(){
        super()

        this.state={
            location:'',
            restaurants:''
        }
    }

    renderCity = (data) => {
        if(data){
            return data.map((item) => {
                return(
                    <option value={item.state_id} key={item.state_id}>
                        {item.state}
                    </option>
                )
            })
        }
    }


    renderRest = (data) => {
        if(data){
            return data.map((item) => {
                return(
                    <option value={item.restaurant_id} key={item.restaurant_id}>
                        {item.restaurant_name} | {item.address}
                    </option>
                )
            })
        }
    }

    handleCity = (event) =>{
        let stateId = event.target.value;
        fetch(`${rurl}${stateId}`,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            this.setState({restaurants:data})
        })
    }


    render(){
        return(
            <>
                <div class="banner-image d-flex text-center flex-column align-items-center" style={{ backgroundImage: `url("Images/bg-image.jpg")`}}>
                    <img src="Images/Restro-logo.png" alt="logo" className="logo"/>
                    <h1>Find Best Restaurants Near You</h1>
                    <div class="gap-3 d-flex justify-content-sm-center">
                        <select onChange={this.handleCity} class="form-select btn-dark" style={{width: "205px"}}>
                            <option selected>SELECT YOUR CITY</option>
                            {this.renderCity(this.state.location)}
                        </select>
                        <select class="form-select btn-dark" style={{width: "295px"}}>
                            <option selected>SELECT YOUR RESTAURANTS</option>
                            {this.renderRest(this.state.restaurants)}
                        </select>
                    </div>  
                </div>
            </>
        )
    }

    // all api on page load
    componentDidMount(){
        fetch(lurl,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            this.setState({location:data})
        })
    }
    
}

export default Search