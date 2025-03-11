export default function About() {
    return (
      <section id="about" className="about">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>About</h2>
            <p>
          Hi, I'm Newton Kipkurui Kimutai, a dedicated software developer with a strong foundation in Python, JavaScript, and modern web development frameworks like React, Flask, and Django. I graduated from Moringa School, where I focused on both front-end and back-end development, and I am eager to take on new challenges in the world of software engineering. 
            </p>
          </div>
  
          <div className="row">
            <div className="col-lg-4">
              <img
                src="/assets/img/profile-img.jpg"
                className="img-fluid"
                alt="Profile"
              />
            </div>
            <div className="col-lg-8 pt-4 pt-lg-0 content">
              <h3>Frontend &amp; Backend Developer.</h3>
              <p className="fst-italic">
              I specialize in creating dynamic, scalable web applications and enjoy working across the full stack—from designing user interfaces with React to building efficient back-end systems with Flask and Django. My expertise also extends to database management using SQL and MongoDB, and I'm experienced with version control tools like Git. I'm passionate about solving complex problems, collaborating with teams, and continuously learning to grow as a developer.
              </p>
              <div className="row">
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>Birthday:</strong> <span>12 March 1999</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>Website:</strong>{" "}
                      <span>
                        <a href="#" target="_blank" rel="noreferrer">
                          coming soon...!
                        </a>
                      </span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>Phone:</strong> <span>+254 743 604 267</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>City:</strong> <span>Nairobi City, Kenya</span>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul>
                    {/* <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>Age:</strong> <span>23</span>
                    </li> */}
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>Email:</strong>{" "}
                      <span>mutainewton56@gmail.com</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>Freelance:</strong> <span>Available</span>
                    </li>
                  </ul>
                </div>
              </div>
              <p>
              As someone driven by integrity and faith, I believe in delivering high-quality software solutions that meet client needs. Let's connect and see how I can help bring your ideas to life!
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  