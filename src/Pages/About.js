import React from 'react'
import mypic from '../assets/chandan.jpg'
import './About.css'
import { Container } from 'react-bootstrap'
import ScrollToTopButton from '../components/ScrollToTopButton'
import Footer2 from '../components/Footer2'

const About = () => {
  return (
    <>
    <div className='about'>
       
        <section > 
        <div className='header' style={{textAlign:'center',fontSize:50,paddingBottom:20,}}>Introduction</div>
        <img src={mypic} alt='me' style={{ float: 'left', marginRight: '20px', width: '300px' }} />
        <div className='intro'>
          <p>
            Hello! I'm Chandan, a dedicated software developer with a passion for crafting clean, efficient code and creating meaningful digital experiences. Having worked on a diverse range of projects spanning frontend and backend development.
          </p>
          <p>
            My journey began with a curiosity for how technology can drive positive change. Since then, I've honed my skills in both Frontend and backend development, delivering solutions that not only meet but exceed client expectations. I thrive in collaborative environments where creativity and innovation are encouraged, and I'm always eager to take on new challenges that expand my knowledge and skills.
          </p>
          <p>
            When I'm not coding, you can find me exploring the latest tech trends, contributing to open-source projects, or enjoying quality time with a good book.
          </p>
          <p>
            Let's connect and discuss how I can contribute to your next project or initiative!
          </p>
        </div> <br /> <br /> <br /> <br /> <br />

        <div className='out'>
        <div className='header'>
          Work Experience
        </div><div></div> 
        </div><br />
          <div className='intro'>
         <h3>  Associate Software Engineer | Brillio </h3>
          Developed and maintained web applications using a variety of front-end and back-end technologies, including HTML, CSS, JavaScript,
           React, Java, Spring Boot, Microservices and databases.
           Collaborate with design, product, and QA teams to deliver high-quality software solutions. Ensure software
           solutions meet business requirements and user needs.

             <h6> March 2024 - Current </h6>  


          </div> <br />
          
          <div className='intro'>
         <h3> Data Analyst intern | Technologics </h3>
          Collected, processed, and analyzed large datasets to extract actionable insights and support decision-making.
           Utilized tools such as Excel, SQL, and Python to perform data cleaning, transformation, and visualization.
          Gained experience in various aspects of data analytics, including statistical analysis, data modeling, and machine
          learning

             <h6> March 2023 - May-2023 </h6>  


          </div> <br />

        <div className='out'>
        <div className='header'>
          Education
        </div><div></div> 
        </div><br /><br />
        <div className='edu'>
         <h4>New Horizon College of Engineering, Bengaluru</h4>
         <h4>Bachelor of Engineering in Electronics and Communication Engineering</h4>
         <h4>2019 - 2023</h4>
         <h4>9.05 CGPA</h4>
         <br />
         <h4>Schooling</h4>
         <h4>Vagdevi Vilas School, Bengaluru</h4>
         <h4>2006-2017</h4>
         <h4>10.0 CGPA</h4>
         </div>
         <br /> <br/>
         <div className='out'>
        <div className='header'>
          As a developer
        </div><div></div> 
        </div><br />
          <div className='intro'>
          My coding ethos is centered on clarity and accessibility. Initially, I build to ensure functionality,
           but I dedicate considerable effort to refining my code - commenting, organizing, and ensuring it's welcoming to any collaborator. 
           Mi casa es tu casa in the world of code.

           Efficiency and maintainability are my mantras. Functional features are good, but sustainable, and 
           adaptable code is the gold standard. It’s not just about making it work; it’s about crafting it to 
           last and be easily managed.

           I thrive on new projects, as each one is a new chapter of learning and growth. Every challenge is 
           an opportunity to expand my horizons.
          </div>
         <br />
         
         <ScrollToTopButton />
        </section>
    </div>
    <Footer2 />

    </>
  )
}

export default About