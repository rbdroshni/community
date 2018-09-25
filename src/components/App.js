import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// components
import AdvertisementRate from './AdvertisementRate';
import About from './Aboutus';
import Header from './header';
import Home from './home';
import Home1 from './Home1';
import Footer from './footer';
import Donation from './donations';
import LatestNews from './LatestNews';
class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header />
                    <Route exact path="/" component={Home} >Home</Route>
                    <About />
                    <AdvertisementRate />
                    <Donation />
                    <Footer />

                </div>
            </BrowserRouter>
        );
    }
}

export default App;