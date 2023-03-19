import React from 'react';
import vg from "../assets/2.webp";
import { AiFillGoogleCircle,AiFillAmazonCircle,AiFillGithub,AiFillLinkedin } from "react-icons/ai"


const Home = () => {
  return (
   <>
   <div className='home' id='home' >
    <main>
    <h1>ByteBrick</h1>
    <p>Empowering your digital world with innovative solutions</p>

    </main>

    </div>

    <div className='home2'>
    <img src={vg} alt="graphics"/>
      <div>
          <p>
          ByteBrick is a leading software development company that specializes in custom software solutions for businesses of all sizes.

At ByteBrick, we offer a range of from software services, including custom software development to delivered solutions that meet their unique business needs.

          </p>


      </div>


    </div>

    <div className="home3" id="about">
    <div>
      <h1>Who are we ? </h1>
      <p> Bytebrick is a software development company that specializes in delivering custom software solutions to businesses of all sizes. Our mission is to help our clients achieve their business goals by providing innovative, reliable, and high-quality software products and services.

At Bytebrick, we offer a wide range of software development services, including web development, mobile app development, software maintenance, quality assurance, and testing. We have a team of highly skilled developers, designers, and project managers who work closely with our clients to understand their business needs and deliver software solutions that exceed their expectations.

One of the key factors that set us apart from other software companies is our ability to adapt to the changing needs of our clients. We take a collaborative approach to software development, working closely with our clients throughout the project lifecycle to ensure that we deliver solutions that meet their unique requirements.

We have a proven track record of delivering successful software projects across a range of industries, including healthcare, finance, education, and more. Our team is committed to staying up-to-date with the latest technologies and best practices in the industry, ensuring that we deliver cutting-edge solutions that help our clients stay ahead of the competition.

Overall, at Bytebrick, we're passionate about software development, and we're dedicated to helping our clients achieve their business goals through innovative and reliable software solutions.  </p>
    </div>
    </div>
    
    <div className="home4" id="brands">
    <div>
      <h1> Brands</h1>
      <article>
          <div style={{
            animationDelay:"0.3s"
          }}>
              <AiFillGoogleCircle/>
              <p>Google</p>
          </div>

          <div style={{
            animationDelay:"0.5s"
          }}>
              <AiFillAmazonCircle/>
              <p>Amazon</p>
          </div>

          <div style={{
            animationDelay:"0.7s"
          }}>
              <AiFillGithub/>
              <p>Github</p>
          </div>

          <div style={{
            animationDelay:"0.9s"
          }}>
              <AiFillLinkedin/>
              <p>linkedIn </p>
          </div>

      </article>
    </div>

    </div>


   </>
  );
};

export default Home