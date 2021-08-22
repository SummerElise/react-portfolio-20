import './css/style.css';
import Typewriter from 'typewriter-effect';

function Header() {

  return (
    <section id="hero" class="d-flex flex-column justify-content-center">
    <div class="container">
      <h1>Summer Milner</h1>
      <p>I'm a <Typewriter options={{strings: ['Full Stack Web Developer'], autoStart: true, loop: true, }} /></p>
      <div class="social-links">     
        <a href="https://www.facebook.com/summer.elise.7/" target="_blank" rel="noreferrer" class="facebook"><i class="bx bxl-facebook"></i></a>
        <a href="https://github.com/SummerElise" target="_blank" rel="noreferrer" class="github"><i class="bx bxl-github"></i></a>
        <a href="https://www.linkedin.com/in/summer-milner/" target="_blank" rel="noreferrer" class="linkedin"><i class="bx bxl-linkedin"></i></a>
      </div>
    </div>
  </section>

  )
};


export default Header;
