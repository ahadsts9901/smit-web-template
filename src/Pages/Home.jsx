import React from 'react'
import Courses from '../Components/Courses';
import ImageSlider from '../Components/ImageSlider';
import About from '../Components/About';
import ChairmanAbout from '../Components/ChairmanAbout';
import Teachers from '../Components/Teachers';
import News from '../Components/News';
import useScrollReveal from '../ScrollReveal/useScrollReveal';
import Contact from '../Components/Contact';

function Home() {
    useScrollReveal();

    return (
        <div className='max-w-screen-2xl mx-auto'>
            <ImageSlider />
            <About />
            <hr className="w-[90%] mx-auto border-gray-200" />
            <Courses />
            <hr className="w-[90%] mx-auto border-gray-200" />
            <ChairmanAbout />
            <hr className="w-[90%] mx-auto border-gray-200" />
            <Teachers />
            <hr className="w-[90%] mx-auto border-gray-200" />
            <News />
            <Contact />
        </div>
    )
}

export default Home;