const Services = () => {
  const servicesData = [
    {
      iconClass: "bx bxl-code-alt",
      title: "Software Development",
      description: "Custom software development using Python, JavaScript, and modern frameworks like React, Flask, and Django.",
      delay: "100",
      svgColor: "#f5f5f5",
      boxClass: "iconbox-blue",
    },
    {
      iconClass: "bx bx-laptop",
      title: "Full-Stack Web Development",
      description: "Building scalable, efficient, and user-friendly web applications with a focus on both frontend and backend technologies.",
      delay: "200",
      svgColor: "#f5f5f5",
      boxClass: "iconbox-orange",
    },
    {
      iconClass: "bx bx-database",
      title: "Database Management",
      description: "Expertise in database systems like SQL and MongoDB to ensure efficient and reliable data management for your applications.",
      delay: "300",
      svgColor: "#f5f5f5",
      boxClass: "iconbox-pink",
    },
    {
      iconClass: "bx bx-robot",
      title: "AI Surveillance Systems",
      description: "Installation and configuration of AI-powered surveillance systems for smart security solutions.",
      delay: "400",
      svgColor: "#f5f5f5",
      boxClass: "iconbox-green",
    },
  ];

  const ServiceCard = ({
    iconClass,
    title,
    description,
    delay,
    svgColor,
    boxClass,
  }) => (
    <div
      className="col-lg-4 col-md-6 d-flex align-items-stretch"
      data-aos="zoom-in"
      data-aos-delay={delay}
    >
      <div className={`icon-box ${boxClass}`}>
        <div className="icon">
          <svg
            width="100"
            height="100"
            viewBox="0 0 600 600"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path stroke="none" strokeWidth="0" fill={svgColor}></path>
          </svg>
          <i className={iconClass}></i>
        </div>
        <h4>
          <a href="#">{title}</a>
        </h4>
        <p>{description}</p>
      </div>
    </div>
  );

  return (
    <section id="services" className="services">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Services</h2>
          <p>
            I offer a range of services leveraging my software development and web development expertise to deliver high-quality solutions.
          </p>
        </div>

        <div className="row">
          {servicesData.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
