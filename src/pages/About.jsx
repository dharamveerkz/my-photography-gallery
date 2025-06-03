// src/pages/About.jsx
import React from 'react';

const About = () => {
  return (
    <section className="about-us">
      <div className="about">
        {/* Profile Image */}
        <img src="/dveer.jpg" alt="Dharamveer Kumar" className="pic" />

        {/* Text Content */}
        <div className="text">
          <h2>About Me</h2>
          <h5>Developer & <span>Designer</span></h5>

          {/* Paragraphs */}
          <p>
            Hi, I'm <strong>Dharamveer Kumar</strong>, a passionate and versatile individual currently pursuing a Bachelor of Technology in Computer Science and Engineering at Bakhtiyarpur College of Engineering. Born and raised in Patna, Bihar, I have always been driven by curiosity and innovation. My academic journey began with stellar performances, achieving 86.3% in matriculation from Shiksha Niketan School, Hajipur, and 82% in intermediate studies at Holy Kids International School, Chhapra.
          </p>

          <p>
            Over the years, I have cultivated a wide range of skills and experiences. As the <strong>Head Coordinator</strong> for the Designing and Branding Club and the Photography Club, I have demonstrated strong leadership and organizational abilities. My role as a coordinator in the Training and Placement Cell has further enhanced my team management and multitasking capabilities.
          </p>

          <p>
            Professionally, I have dived deep into the fields of web development and machine learning. I have successfully completed internships in AI, ML, and Salesforce, which have given me hands-on experience and problem-solving expertise. Additionally, I have managed various social media platforms, crafted stunning visuals through graphic designing, and honed my skills in photography and cinematography.
          </p>

          <p>
            My technical toolkit includes proficiency in C, Python, Java, and MERN stack development. Alongside these technical skills, I excel in project management, social media strategies, and branding. My passion lies in leveraging technology and creativity to solve real-world problems and create impactful solutions.
          </p>

          <p>
            With a strong foundation in both academics and extracurricular activities, I am ready to take on challenges, innovate, and make a meaningful impact in the tech and creative world.
          </p>

          {/* Hire Button */}
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="hire">
            <i className="fas fa-file-pdf"></i> View Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;