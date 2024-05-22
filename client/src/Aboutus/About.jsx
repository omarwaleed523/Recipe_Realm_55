import React from 'react';
import "./App.css"
import AboutBackground3 from 'Assets/AboutBackground3.jpg'
import head1 from 'Assets/head1.jpg';
import Omar from 'Assets/Omar.jpeg'
import Kebda from 'Assets/Kebda.jpeg'
import Salah from 'Assets/Salah.jpeg'
import AboutBackground4 from 'Assets/AboutBackground4.jpg'
import Navbar from "scenes/navbar";

const About = () => {
  return (
    <>
    <Navbar />
    <div className="about-page"
     img src={AboutBackground4} alt = "About Background">
      <div className="about-background-image-container">
        <img src={AboutBackground3} alt="About Background" />
        <div className="about-section-text-container">
          <p className="primary-subheading">About us</p>
          <h1 className="primary-heading">
            Food Is An Important Part Of A Balanced Diet
          </h1>
          <p className="primary-text">
          Founded in 2022, our platform was born out of a passion for cooking and a desire to share that passion with the world. Since then, we've grown to become a trusted source for home cooks everywhere
          </p>
          <p className="primary-text">
          We believe in the power of good food to bring people together. Our values include sustainability, diversity, and a dedication to quality
          </p>
        </div>
      </div>
      
      <div className="mission-statement">
        <h2 className="secondary-heading">Our Mission</h2>
        <p className="secondary-text">
         Our mission is to inspire home cooks with easy-to-follow, delicious recipes that bring joy to the kitchen. We are committed to promoting healthy eating, sustainable cooking practices, and a love for food.
        </p>
      </div>
      
      <div className="team-section">
        <h2 className="secondary-heading">Meet Our Team :</h2>
        <div className="team-members">
          <div className="team-member">
            <img src={Omar} alt="Team Member" />
            <h3 className="team-member-name">Omar Waleed</h3>
            <p className="team-member-role">CEO</p>
            <p className="team-member-bio">Omar is a passionate leader with a love for food and sustainability. He has over 20 years of experience in the food industry.</p>
          </div>
          <div className="team-member">
            <img src={Salah} alt="Team Member" />
            <h3 className="team-member-name"> Salah Eldin</h3>
            <p className="team-member-role">Head Chef</p>
            <p className="team-member-bio">Salah brings h culinary expertise to our kitchen, creating innovative and delicious dishes for our customers.</p>
          </div>
          <div className="team-member">
            <img src={Kebda} alt="Team Member" />
            <h3 className="team-member-name">Youssef Ahmed</h3>
            <p className="team-member-role"> Content Manager</p>
            <p className="team-member-bio">Develop and manage the content strategy for the platform, including blog posts, newsletters, and social media updates..</p>
          </div>
          <div className="team-member">
            <img src={head1} alt="Team Member" />
            <h3 className="team-member-name"> Hoshma</h3>
            <p className="team-member-role"> Nutritionist</p>
            <p className="team-member-bio"> Provide nutritional analysis and information for recipes to help users make informed choices about their diet..</p>
          </div>
        </div>
      </div>
      
      <div className="call-to-action">
        <h2 className="secondary-heading">Join Us</h2>
        <p className="secondary-text">Interested in joining our team or collaborating with us? Contact us to learn more about opportunities.
        Contact Us through 19751</p>
        
      </div>
    </div>
    </>
  );
};

export default About;
