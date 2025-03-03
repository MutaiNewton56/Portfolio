import { Helmet } from "react-helmet";

export default function Head() {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      <title>Newton's Resume</title>
      <meta name="description" content="" />
      <meta name="keywords" content="" />
      
      {/* Favicons */}
      <link rel="icon" href="/assets/img/favicon.png" />
      <link rel="apple-touch-icon" href="/assets/img/apple-touch-icon.png" />
      
      {/* Google Fonts */}
      <link
        href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i"
        rel="stylesheet"
      />
      
      {/* Vendor CSS Files */}
      <link rel="stylesheet" href="/assets/vendor/aos/aos.css" />
      <link rel="stylesheet" href="/assets/vendor/bootstrap/css/bootstrap.min.css" />
      <link rel="stylesheet" href="/assets/vendor/bootstrap-icons/bootstrap-icons.css" />
      <link rel="stylesheet" href="/assets/vendor/boxicons/css/boxicons.min.css" />
      <link rel="stylesheet" href="/assets/vendor/glightbox/css/glightbox.min.css" />
      <link rel="stylesheet" href="/assets/vendor/swiper/swiper-bundle.min.css" />
      
      {/* Main CSS File */}
      <link rel="stylesheet" href="/assets/css/style.css" />
    </Helmet>
  );
}
