import React from 'react';
import web from "../image/web1.svg";
import Commom from './Commom';

const Home=()=>{
    return (
      <>
        <Commom
          name="Grow your business with"
          imgsrc={web}
          visit="/services"
          btname="Get Started"
        />
      </>
    );  
};

export default Home;