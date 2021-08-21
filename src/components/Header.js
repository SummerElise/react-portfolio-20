// import '../styles/Header.css';

const styles = {
  headerStyle: {
    background: 'light-blue',
  },
  headingStyle: {
    fontSize: '100px',
  },
  headingStyle2: {
    fontSize: '45px',
  },
};

// add images and proper css
//possibly add a hero image
function Header() {
  return (
    <header style={styles.headerStyle} className="header">
      <h1 style={styles.headingStyle}>Welcome to my React Portfolio! I'm Summer.</h1>
      <h2 style={styles.headingStyle2}>I am a full-stack web developer.</h2>
    </header>
  );
}

export default Header;
