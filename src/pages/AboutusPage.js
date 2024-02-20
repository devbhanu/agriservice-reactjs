// pages/AboutUsPage.js

import React from 'react';
import CardComponent from '../components/card';
import 'bootstrap/dist/css/bootstrap.min.css';

function AboutUsPage() {
  return (

<div className='container-fluid'>
      <h2>About Us</h2>
      <div className="container-fluid" style={{display:'flex'}}>
      <CardComponent avatarColor="red" cardtitle="Shrimp and Chorizo Paella" 
      imageUrl="https://img.hellofresh.com/f_auto,fl_lossy,q_auto,w_1200/hellofresh_s3/image/5d6043a39271b9000f7601d2-69341c77.jpg"/>
      <CardComponent  avatarColor="green" cardtitle="Chicken and ButterMilk"
      imageUrl="https://www.thechunkychef.com/wp-content/uploads/2020/09/Classic-Buttermilk-Fried-Chicken-1200.jpg"
      />
      <CardComponent  avatarColor="blue" cardtitle="Vegetables and Soups"
      imageUrl="https://www.inspiredtaste.net/wp-content/uploads/2018/10/Homemade-Vegetable-Soup-Recipe-2-1200.jpg"
      />

</div>
    </div>
  );
}

export default AboutUsPage;
