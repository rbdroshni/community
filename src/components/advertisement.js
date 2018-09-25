import React, { Component } from 'react';
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Slider from 'react-slick';

const URL_ADVER = "http://localhost:3004/home";

var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
};

class Adveristment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            adver:[],

        }
    }

    componentDidMount() {
        
        fetch(URL_ADVER, { method: 'GET' })
        .then(res => res.json())
        .then(json => {
            this.setState({ 
                adver: json 
            })
        })
    }

    renderData = ({ adver }) => {
        if (adver) {
            return (
                <div className="adv_slider" >
                <h1>Adveristment</h1>
                <Slider {...settings}>
                    {adver.map((item) => {
                        return (
                           <div className="img_block">
                                <div  className="img" key={item.id}  style={{ background: `url(/images/cover/${item.cover})` }}>
                                    <div>
                                        <h4>{item.title}</h4>
                                        <p>{item.detail}</p>
                                    </div>
                                </div>
                       </div>
                        )
                    })}

                </Slider>
                </div>
                )
        }
    }

    render() {
        return (
            <div className="adver-my">
                {this.renderData(this.state.adver)}
            </div>
        );
    }
}
export default Adveristment;