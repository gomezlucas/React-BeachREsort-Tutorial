import React  from 'react';
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom';
import Services from '../components/Services'
import FeaturedRooms from '../components/FeaturedRooms';
import  SimpleButton from '../components/StyledHero';

function Home(){

    return(
        <React.Fragment>
        <Hero>
            <Banner title="Luxurious Rooms" subtitle="Deluxe Rooms Starting At $299">
            <Link className="btn-primary" to="/rooms">Our Rooms</Link>
            </Banner>
        </Hero>    
        <Services/>
        <FeaturedRooms/>
        </React.Fragment>
    )
}

export default Home