import '../css/style.css';

function About() {
    return (
      <section class="about">
      <div class="container" />
      
      <div class="content d-flex flex-column justify-content-center">
        <div class="section-title">
          <h2>About</h2>
          <div>
          <p>
            I am currently a Full Stack Web Developer student at UNC Chapel Hill's coding bootcamp. 
            I am also working towards an Associates degree in Engineering at Wake Technical Community College here in 
            Raleigh. I readily look forward to acquiring more knowledge on web development!
          </p>
       </div>
          <p>A little fun fact, I originally was in school studying for the medical field, but due to the pandemic, I switched my career path towards Web development. I would
            like to eventually get my Bachelors degree in Computer Science. I am taking the credits that I have earned in the past years and combining them 
            to get an Associates in Engineering.
            In my free time, I enjoy being outdoors whether it be hiking the trails or kayaking out at Jordan lake. Prior to the pandemic, I found solace
            in the gym every other evening. I have recently delved into the world of video gaming, but board games still has my heart. </p>
        </div>
        <div class="row">
        <div class="col-lg-4">
        <div class="image col-xl-5 d-flex align-items-stretch justify-content-center justify-content-lg-start"></div>
        </div>
        <div class="col-lg-8 pt-4 pt-lg-0 content">
          <h3>Full Stack Web Developer.</h3>
        </div>
       </div>
       </div>
       
       </section>

    );  
  }
    
export default About;