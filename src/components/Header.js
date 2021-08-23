import './css/style.css';
import Typewriter from 'typewriter-effect';
import {FaLinkedin, FaGithub, FaFacebook} from 'react-icons/fa'

function Header() {
  return (       
    <section id="hero" class="d-flex flex-column justify-content-center">
      <div class="container" data-aos="zoom-in" data-aos-delay="100">
      <button type="button" class="mobile-nav-toggle d-xl-none"><i class="icofont-navigation-menu"></i></button>

      <h1>Summer Milner</h1>
      <p>I'm a <Typewriter options={{strings: ['Full Stack Web Developer'], autoStart: true, loop: true, }} /></p>
      <div class="social-links">
      
      <a href="https://www.facebook.com/summer.elise.7/" target="_blank" rel="noreferrer"  class="facebook"><FaFacebook /></a>
      <a href="https://github.com/SummerElise" target="_blank" rel="noreferrer" class="github"><FaGithub /></a>
      <a href="https://www.linkedin.com/in/summer-milner/" target="_blank" rel="noreferrer" class="linkedin"><FaLinkedin /></a>
     </div>
    </div>
</section>
  


  )
};


export default Header;
