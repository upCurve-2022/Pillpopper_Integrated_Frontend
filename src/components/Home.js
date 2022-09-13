import React, { useState, useEffect } from "react";

import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";


import UserService from "../services/user.service";

const Home = () => {
  const [setContent] = useState("");

  useEffect(() => {
    UserService.getPublicContent().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();

        setContent(_content);
      }
    );
  }, []);

  return (
    <div className="container">
      
        
        <AliceCarousel autoPlay autoPlayInterval="800">
        <img  src="/images/img-2.PNG" alt= " 1" class="center" />
        <img  src="/images/Frame.png" alt= " 2" class="center" />
        <img  src="/images/img1.png" alt= " 3"class="center"/>
        
      </AliceCarousel>
      
    </div>
  );
};

export default Home;
