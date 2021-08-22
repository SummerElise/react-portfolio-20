import "../css/style.css";
import jetAway from '../../img/portfolio/JetAway.PNG'
import passwordGenerator from '../../img/portfolio/passwordGenerator.png'
import pourDecisions from '../../img/portfolio/pourDecisions.PNG'
import workScheduler from '../../img/portfolio/workScheduler.gif'
import codeQuiz from '../../img/portfolio/codeQuiz.PNG'
import comingSoon from '../../img/portfolio/comingSoon.jpg'

function Portfolio() {
return (
    <section id="portfolio" class="portfolio section-bg">
    <div class="container">

      <div class="section-title">
        <h2>Featured Work</h2>
        <p>Below is some of the projects I've been working on this past year. Click on the images below and it will 
          show you some of my most recent work. The link icon will give you further detail. </p>
      </div>


    <div class="row portfolio-container">

        <div class="col-lg-4 col-md-6 portfolio-item filter-app">
          <div class="portfolio-wrap">
            <img src={jetAway} class="img-fluid" alt=""></img>
            <div class="portfolio-info">
            <h4>JetAway</h4>
              <a target='_blank' rel="noreferrer" href="https://jetaway1.herokuapp.com/">Link to JetAway.</a>
            </div>
            </div>
    </div>

    <div class="col-lg-4 col-md-6 portfolio-item filter-web">
          <div class="portfolio-wrap">
            <img src={passwordGenerator} class="img-fluid" alt=""></img>
            <div class="portfolio-info">
            <h4>Password Generator</h4>
              <a target='_blank' rel= "noreferrer" href="https://summerelise.github.io/JavaScript-HW3/">Link to Password Generator.</a>
            </div>
           </div>
    </div>

    <div class="col-lg-4 col-md-6 portfolio-item filter-web">
          <div class="portfolio-wrap">
            <img src={pourDecisions} class="img-fluid" alt=""></img>
            <div class="portfolio-info">
            <h4>Pour Decisions</h4>
              <a target='_blank' rel= "noreferrer" href="https://thompsonel11.github.io/Project_1/">Link to Pour Decisions.</a>
            </div>
           </div>
    </div>

      <div class="col-lg-4 col-md-6 portfolio-item filter-web">
          <div class="portfolio-wrap">
            <img src={workScheduler} class="img-fluid" alt=""></img>
            <div class="portfolio-info">
            <h4>Work Scheduler</h4>
              <a target='_blank' rel= "noreferrer" href="https://summerelise.github.io/Scheduler-HW5/">Link to Work Day Scheduler.</a>
            </div>
           </div>
      </div>

      <div class="col-lg-4 col-md-6 portfolio-item filter-web">
          <div class="portfolio-wrap">
            <img src={codeQuiz} class="img-fluid" alt=""></img>
            <div class="portfolio-info">
            <h4>Coding Quiz</h4>
              <a target='_blank' rel= "noreferrer" href="https://summerelise.github.io/Code-Quiz">Link to Coding Quiz.</a>
            </div>
           </div>
       </div>

       <div class="col-lg-4 col-md-6 portfolio-item filter-web">
          <div class="portfolio-wrap">
            <img src={comingSoon} class="img-fluid" alt=""></img>
            <div class="portfolio-info">
            <h4>Coming Soon</h4>
            </div>
           </div>
         </div>
    </div>
    </div>
    </section>
    );
   }

export default Portfolio;