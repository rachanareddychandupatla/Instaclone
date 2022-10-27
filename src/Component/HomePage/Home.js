import React, { Component } from 'react';
import MainContent from '../MainContent/MainContent';
import NavBar from '../NavBar/NavBar';
import './Home.css';

class Home extends Component {
    constructor(props) {
        super(props);
    }
    state = { 
        data: [],
     }

     updateData = (data) => {
        this.setState({data: data});
     }
    render() { 
        return (
             <div>
                <NavBar  />
                <MainContent data={this.updateData}/>
             </div>
        );
    }
}
 
export default Home;