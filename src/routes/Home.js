import React from 'react';
import Navbar from '../components/Navbar';
import Homeimg from '../components/Homeimg';
import Work from '../components/Work';
import Lower from '../components/Lower';


function Home() {
    return <div>
        <Navbar />
        <Homeimg />
        <Work/>
        <Lower/>
    </div>;
}

export default Home;