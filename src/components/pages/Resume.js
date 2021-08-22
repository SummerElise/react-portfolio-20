import "../css/style.css";
import resume from '../../img/seliseResume.docx'

function Resume() {
    return (
        <section id="resume" class="resume">
        <div class="container" data-aos="fade-up">
  
          <div class="section-title">
            <h2>Resume     <a target='_blank' rel="noreferrer" href={resume} download="seliseResume.docx"><i class="fa fa-download"></i></a></h2>
            <p><em>Motivated and personable student pursuing an Associates in Engineering through Wake Tech Community College. Completing Full Stack Web devleopment certification through
              UNC Chapel Hills coding bootcamp. 
            </em></p>
          </div>
  
          <div class="row">
            <div class="col-lg-6">
              <h3 class="resume-title">Education</h3>
              <div class="resume-item pb-0">
                <h4>Full Stack Web Development</h4>
                <p><em>Budding Full Stack Web Developer with 6+ months of rigorous training learning various coding languages and demo developing user-centered content from initial concept to final product.</em></p>
                <ul>
                  <li>Keen knowledge of CSS, HTML, and JS.</li>
                  <li>Group project experience using React, Node, Express, and jQuery</li>
                  <li>Strong communiction skills both verbally and written (English).</li>
               
                  
                </ul>
              </div>
  
              <div class="resume-item">
                <h4>Associates of Engineering</h4>
                <h5>2019-Present</h5>
                <p><em>Wake Technical Community College, Raleigh, NC</em></p>
                <p>Currently taking classes to obtain my Associates in Engineering. I will be graduating with my Associates by summer 2022</p>
              </div>
              
            <div class="col-lg-6">
              <h3 class="resume-title">Professional Experience</h3>
              <div class="resume-item">
                <h4>Childcare Provider</h4>
                <h5>2017 - Present </h5>
                <p><em>Cary, NC </em></p>
                <ul>
                  <li>Cared for two separate familes consisting of two 1 year old boys, and two girls ages 3 and 4. I was a live in nanny for one family and part time for the other family.</li>
                  <li>Created engaging, educational, and innovative activities for various age learning abilites. </li>
                  <li>Consistently ensured children's overall safety and proper hygiene. </li>
                  <li>Organized and cleaned the property as needed.</li>
                  <li>Assisted children with homework and adapted to virtual learning sessions during the pandemic.</li>
                  <li>Discussed progress and limitations with the employer when necessary.</li>
                  <li>Safely transported children to and from school, parks, and any other extracurricular activities. </li>
                </ul>
              </div>

            <div class="resume-item">
                <h4>Data Scrub Temp</h4>
                <h5>2016-2017</h5>
                <p><em>Cary, NC</em></p>
            <ul>
                <li>Worked with a team to initiate major changes in transitioning current customer database over to an upgraded version.</li>
                <li>Received invaluable insight and knowledge on navigating through various terminals to complete tasks.</li>
            </ul>
          </div>
         </div>
        </div>
        </div>
        </div>
    </section>

    );
}


export default Resume;