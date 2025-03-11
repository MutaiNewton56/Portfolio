export default function Facts() {
  return (
    <section id="facts" className="facts">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Facts</h2>
          <p>
            I am a highly efficient and organized software developer, ensuring that I work on schedule and meet deadlines. My ability to manage time effectively and deliver high-quality work is key to my success in full-stack development. I am committed to continuous learning and tackling new challenges.
          </p>
        </div>

        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="count-box">
              <i className="bi bi-emoji-smile"></i>
              <span
                data-purecounter-start="0"
                data-purecounter-end="0" // Update with the number of happy clients
                data-purecounter-duration="1"
                className="purecounter"
              ></span>
              <p>Happy Clients</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mt-5 mt-md-0">
            <div className="count-box">
              <i className="bi bi-journal-richtext"></i>
              <span
                data-purecounter-start="0"
                data-purecounter-end="0" // Update with the number of projects
                data-purecounter-duration="1"
                className="purecounter"
              ></span>
              <p>Projects</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
            <div className="count-box">
              <i className="bi bi-headset"></i>
              <span
                data-purecounter-start="0"
                data-purecounter-end="0" // Update with the total hours of support provided
                data-purecounter-duration="1"
                className="purecounter"
              ></span>
              <p>Hours of Support</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
            <div className="count-box">
              <i className="bi bi-award"></i>
              <span
                data-purecounter-start="0"
                data-purecounter-end="3" // Update with the number of awards or certifications
                data-purecounter-duration="1"
                className="purecounter"
              ></span>
              <p>Awards</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
