import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';



const Testimonials = () => {
    const testimonialsData = [
      {
        image: "assets/img/testimonials/testimonials-1.jpg",
        name: "Brian Kibet",
        role: "Ceo & Founder",
        message: "Amazing work done. am very happy.",
      },
      {
        image: "assets/img/testimonials/testimonials-2.jpg",
        name: "Kevin Rono",
        role: "Resident Engineer",
        message: "Great work, no regrets at all, fantastic!",
      },
      {
        image: "assets/img/testimonials/testimonials-3.jpg",
        name: "Gad Boretor",
        role: "Manager Transport Ministry",
        message:
          "Marvelous work. It was finished on time now business is much better than usual.",
      },
      {
        image: "assets/img/testimonials/testimonials-4.jpg",
        name: "Kevin Cheruiyot",
        role: "Freelancer",
        message:
          "What an accomplishment, some people didnt think it was possible, what a turnover, proud of the good work.",
      },
      {
        image: "assets/img/testimonials/testimonials-5.jpg",
        name: "Martha Wangui",
        role: "Entrepreneur",
        message:
          "Absolutely great achievement, the progress is unbelievable. Am amazed!",
      },
    ];
  
    const TestimonialCard = ({ image, name, role, message }) => (
      <div className="swiper-slide">
        <div className="testimonial-item">
          <img src={image} className="testimonial-img" alt={name} />
          <h3>{name}</h3>
          <h4>{role}</h4>
          <p>
            <i className="bx bxs-quote-alt-left quote-icon-left"></i>
            {message}
            <i className="bx bxs-quote-alt-right quote-icon-right"></i>
          </p>
        </div>
      </div>
    );
  
    return (
      <section id="testimonials" className="testimonials section-bg">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Testimonials</h2>
          </div>
  
          <div
            className="testimonials-slider swiper"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="swiper-wrapper">
              {testimonialsData.map((testimonial, index) => (
                <TestimonialCard key={index} {...testimonial} />
              ))}
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Testimonials;
  
