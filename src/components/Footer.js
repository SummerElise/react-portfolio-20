import './css/style.css';

import {FaLinkedin, FaGithub, FaFacebook} from 'react-icons/fa'

function Footer() {
    return (
      <footer id="footer">
      <div class="container">
        <h3>Summer Milner</h3>
        <p>You can find me on the following social media platforms.</p>
        <div class="social-links">
      
          <a href="https://www.facebook.com/summer.elise.7/" target="_blank" rel="noreferrer"  class="facebook"><FaFacebook /></a>
          <a href="https://github.com/SummerElise" target="_blank" rel="noreferrer" class="github"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/summer-milner/" target="_blank" rel="noreferrer" class="linkedin"><FaLinkedin /></a>
       
        </div>
        <div class="copyright">
          &copy; Copyright <strong><span>MyResume</span></strong>. All Rights Reserved
        </div>
        <div class="credits">          
          Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
        </div>
      </div>
    </footer>
    );
}
 
export default Footer;