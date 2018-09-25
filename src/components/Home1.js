import React, { Component } from 'react';
import LatestNews from './LatestNews';


const URL_HOME ='http://localhost:3004/home';
class Home1 extends Component {
    constructor(props) {
        super(props)
        this.state= {
            home:''
        }
    }
    
    componentDidMount() {
        fetch(URL_HOME,{method:'GET'})
        .then(response => response.json())
        .then(json => {
            this.setState({
                home:json
            })
       })

    }
        render () {
        return (
            <div>
                <LatestNews news={this.state.home.news}/> 
            </div>
        )
    }
}

export default Home1;