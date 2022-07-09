import React from 'react';

import Commom from './Commom';
import web from "../image/web4.png";

const About=()=>{
    return<Commom name='Welcome to About Page' imgsrc={web} visit="/contact" btname="Contact Now"/>;  
};

export default About;