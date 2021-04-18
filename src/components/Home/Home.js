import React from 'react';
import Header from './Header';
import TravelGroupSection from './TravelGroupSection';
import PopularPlaces from './PopularPlaces';
import ContactSection from './ContactSection';
import Footer from '../Shared/Footer';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <TravelGroupSection></TravelGroupSection>
            <PopularPlaces></PopularPlaces>
            <ContactSection></ContactSection>
            <Footer></Footer>
        </div>
    );
};

export default Home;