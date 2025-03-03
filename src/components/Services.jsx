const Services = () => {
    const servicesData = [
      {
        iconClass: "bx bxl-dribbble",
        title: "Web Design",
        description: "Absolute web designs as per clients' needs",
        delay: "100",
        svgColor: "#f5f5f5",
        boxClass: "iconbox-blue",
      },
      {
        iconClass: "bx bx-file",
        title: "Developer",
        description: "Great systems done, as per clients' needs",
        delay: "200",
        svgColor: "#f5f5f5",
        boxClass: "iconbox-orange",
      },
      {
        iconClass: "bx bx-tachometer",
        title: "Quantity Surveyor",
        description:
          "Preparation of bills of quantities. House designs are available too",
        delay: "300",
        svgColor: "#f5f5f5",
        boxClass: "iconbox-pink",
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
              I offer affordable services in whichever field is required of me.
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
  
  