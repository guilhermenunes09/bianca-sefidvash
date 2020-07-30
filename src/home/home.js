import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from '../imgs/logo.png';
import './home.css';

import Container from 'react-bootstrap/Container';

import {useSpring, animated} from 'react-spring';

const Home = () => {

    const props = useSpring(
        {
            config: {
                duration: 1000
            },
            opacity: 1, from: {opacity: 0}
        })

    return(
        <Container fluid className="fill-height backgroundImage">
            <div className="d-flex justify-content-center content-position">
                <animated.div style={props}>
                    <img src={logo} alt="Logo" style={{width: '300px'}} />
                </animated.div>

            </div>
        </Container>
    );

}

export default Home;