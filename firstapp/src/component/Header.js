import React,{Component} from 'react';
import './Header.css';

// In class we don't have return, 
// but in class we have render() inside render we have return - where we right our header content.
class Header extends Component {
                                    
    constructor(){                      // constructor get called inside the class and inside the constructor we have super().
        super()

        this.state={                       // This is Data binding.
            title:'React Main App',        // Easy to update the title or content of the header.
            keyword:'User Text Here'
        }
    }

    handleChange=(event)=>{
        //console.log(event.target.value)
        this.setState({keyword:event.target.value})
        this.props.userInput(event.target.value)
    }

    render(){
        return(
            <div>
                <header>
                    <div className="logo">{this.state.title}</div>
                    <center>
                        <input onChange={this.handleChange}/>
                        <div style={{color:'white',fontSize:'20px'}} >{this.state.keyword}</div>
                    </center>
                </header>
            </div>
        )
    }
}

export default Header;