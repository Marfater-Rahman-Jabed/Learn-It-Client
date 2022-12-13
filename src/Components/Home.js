import React from 'react';
import background from '../Assets/Images/HomepageBanner.jpg';

const Home = () => {
    return (
        <div style={{ backgroundImage: `url(${background}) `, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover', height: '100vh' }}>
            <h1>hello</h1>

        </div>

    );
};

export default Home;