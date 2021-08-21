//css import
import '.styles/style.css';

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <header id="header" class="d-flex flex-column justify-content-center">
    <nav class="nav-menu">
    <ul>
      <li>
        <a
        href="#about"
        onClick={() => handlePageChange('About')}
          // This is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
        className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
        <i class="bx bx-user"></i>
        <span>About Me</span>
        </a>
      </li>
      <li>
        <a
        href="#portfolio"
        onClick={() => handlePageChange('Portfolio')}
          // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
        className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
        >
        <i class="bx bx-book-content"></i>
        <span>Portfolio</span>
        </a>
      </li>
      <li>
        <a
        href="#resume"
        onClick={() => handlePageChange('Resume')}
          // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
        className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
        >
        <i class="bx bx-file-blank"></i>
        <span>Resume</span>
        </a>
      </li>
      <li>
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
        <i class="bx bx-envelope"></i>   
        <span>Contact</span>
        </a>
      </li>
    </ul>
    </nav>
  </header>

  );
}

export default NavTabs;
