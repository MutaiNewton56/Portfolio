export default function Resume() {
  return (
    <section id="resume" className="resume">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Resume</h2>
          <p>Below is the summary of my resume;</p>
        </div>

        <div className="row">

          <div className="col-lg-6">
            <h3 className="resume-title">Summary</h3>
            <div className="resume-item pb-0">
              <h4>Newton Kipkurui Kimutai</h4>
              <p>
                <em>
                  A passionate and dedicated software developer with a strong foundation in software development. 
                  Recently graduated from Moringa School with expertise in Python, JavaScript, React, Flask, Django, 
                  and database management. I am eager to take on challenges in both front-end and back-end development, 
                  solve complex problems, and contribute to impactful software solutions.
                </em>
              </p>
              <ul>
                <li>Nakuru, Kenya</li>
                <li>+254 743 604 267</li>
                <li>mutainewton56@gmail.com</li>
                <li>GitHub: <a href="https://github.com/MutaiNewton56" target="_blank" rel="noopener noreferrer">github.com/MutaiNewton56</a></li>
                <li>LinkedIn: <a href="https://www.linkedin.com/in/newton-mutai-79a87a243/" target="_blank" rel="noopener noreferrer">linkedin.com/in/newton-mutai-79a87a243</a></li>
              </ul>
            </div>

            <h3 className="resume-title">Education</h3>
            <div className="resume-item">
              <h4>Software Development</h4>
              <h5>December 2024</h5>
              <p><em>Moringa School</em></p>
              <p>
                Gained proficiency in Python, JavaScript, React, Flask, Django, SQL, and MongoDB. Developed a variety of 
                full-stack applications, including a checkers game that integrates React frontend and Flask backend, along 
                with authentication features.
              </p>
            </div>

            <div className="resume-item">
              <h4>Diploma in Quantity Surveying</h4>
              <h5>May 2018 - April 2023</h5>
              <p><em>Rift Valley Institute of Science and Technology</em></p>
              <p>
                Acquired foundational knowledge in construction management, cost estimation, and project supervision. 
                Participated in practical applications including civil engineering materials testing and the development of roads.
              </p>
            </div>

            <div className="resume-item">
              <h4>Certificate in Programming Languages</h4>
              <h5>January 2022 - July 2022</h5>
              <p><em>Serein Education Centre</em></p>
              <p>
                Studied Web Design (HTML & CSS), Object-Oriented Programming (C++), and Structured Programming (C).
              </p>
            </div>

            <div className="resume-item">
              <h4>Certificate in Computer Application Packages</h4>
              <h5>March 2018 - April 2018</h5>
              <p><em>Serein Education Centre</em></p>
              <p>Learned foundational computer application skills essential for modern digital environments.</p>
            </div>

          </div>

          <div className="col-lg-6">
            <h3 className="resume-title">Professional Experience</h3>
            <div className="resume-item">
              <h4>Quantity Surveyor Intern</h4>
              <h5>August 2019 - December 2019</h5>
              <p><em>County Government of Nakuru, Department of Roads, Transport, and Public Works</em></p>
              <ul>
                <li>Design and maintenance of roads and drainage structures</li>
                <li>Civil Engineering Materials Testing and research</li>
                <li>Surveying and Levelling</li>
                <li>Supervision of road projects</li>
                <li>Site visits and report writing</li>
                <li>Construction management and budget control</li>
                <li>Contract documentation and tendering process</li>
              </ul>
            </div>

            <h3 className="resume-title">Technical Projects</h3>
            <div className="resume-item">
              <h4>Checkers Game</h4>
              <h5>GitHub Repositories: <a href="https://github.com/MutaiNewton56/GRP4-Checkers" target="_blank" rel="noopener noreferrer">Backend</a>, <a href="https://github.com/MutaiNewton56/GRP4_FrontendCheckers" target="_blank" rel="noopener noreferrer">Frontend</a></h5>
              <p>
                Developed a terminal-based checkers game with Python. Integrated a Flask backend and React frontend, 
                implementing authentication features (login, sign up, log out) and RESTful endpoints for dynamic gameplay.
              </p>
            </div>

            <h3 className="resume-title">Additional Training</h3>
            <div className="resume-item">
              <h4>Certificate in Technical AI Surveillance Systems</h4>
              <h5>November 2023</h5>
              <p><em>Lish AI Labs</em></p>
              <p>Acquired skills in AI surveillance system installation and configuration.</p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
