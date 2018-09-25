import React, { Component } from 'react';
import LatestNews from './LatestNews';
import Advertisement from './advertisement'
const URL_HOME ='http://localhost:3004/home';
class AboutUs extends Component {
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
    render() {
        return (
            <div className="About-body">
            <div className="about-container">
            <div className="Aboutus">
                <h1>

                    About Us
                    </h1>
            </div>
            <div className="content">
                <p>
                This is a community website built for Community development in all the sense. We have a thought
                
                 behind it that we will build a very strong community which will help the people who are suffering with any reason.
                 </p>
<p>
The reason of building this site is straight forward. Today we donate money to Gowshalas, Temples and many social places but the donator doesn’t have any record. This is a social work yes. But using that money for a good cause is main thing. People who are donating do they know what is done with there money? Hopefully the answer will be NO.
</p>
<p>
But here we are assuring you with the monthly reports. So that you all will know that your money donated is not wasted or not eaten by the meddlers.

With this we think that we can develop our community, and give a better life to people who are suffering in any manner.
</p>
<p> 
Lastly I request all the Agarwal people to support in the mission. So that we can again build a Agroha and do a remembering work for our coming generations.


Post your ads on a minimal price on our website which will promote your business and as well as our step towards development.
</p>

                </div>
                </div>
                <div className="LatestNews-wrapper">
                 <LatestNews news={this.state.home.news} />
                 <Advertisement />
                </div>
            </div>
        );
    }
}
export default AboutUs;