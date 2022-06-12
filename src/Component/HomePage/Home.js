import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';
import './Home.css';

class Home extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return (
             <div>
                <NavBar />
             </div>
        );
    }
}
 
export default Home;