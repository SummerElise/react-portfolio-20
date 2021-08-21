 import '../styles/style.css';

function Header() {
  return (
    <section id="hero" class="d-flex flex-column justify-content-center">
    <div class="container" data-aos="zoom-in" data-aos-delay="100">
      <h1>Summer Milner</h1>
      <p>I'm a <span class="typed" data-typed-items= " Full Stack Web Developer"></span></p>
      <div class="social-links">
        
        <a href="https://www.facebook.com/summer.elise.7/" target="_blank" class="facebook"><i class="bx bxl-facebook"></i></a>
        <a href="https://github.com/SummerElise" target="_blank" class="github"><i class="bx bxl-github"></i></a>
        <a href="https://www.linkedin.com/in/summer-milner/" target="_blank" class="linkedin"><i class="bx bxl-linkedin"></i></a>
      </div>
    </div>
  </section>
  )
};

export default Header;
