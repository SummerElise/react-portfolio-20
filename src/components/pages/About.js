import '../styles/styles.css';

function About() {
    return (
      <section class="about">
      <div class="container" data-aos="fade-up">
        <div class="section-title">
          <h2>About</h2>
          <p>A little fun fact, I originally was in school studying for the medical field, but due to the pandemic, I switched my career path towards Web development. I would
            like to eventually get my Bachelors degree in Computer Science. I am taking the credits that I have earned in the past years and combining them 
            to get an Associates in Engineering.
            In my free time, I enjoy being outdoors whether it be hiking the trails or kayaking out at Jordan lake. Prior to the pandemic, I found solace
            in the gym every other evening. I have recently delved into the world of video gaming, but board games still has my heart. </p>
        </div>

        <div class="row">
          <div class="col-lg-4">
            <img src="assets/img/birthday-me.jpg" class="img-fluid" alt="">
          </div>
          <div class="col-lg-8 pt-4 pt-lg-0 content">
            <h3>Full Stack Web Developer.</h3>
            <p class="font-italic">
              Contact details and Additional Information
            </p>
            <div class="row">
              <div class="col-lg-6">
                <ul>
                  <li><i class="icofont-rounded-right"></i> <strong>Birthday:</strong> January 25</li>
                  <li><i class="icofont-rounded-right"></i> <strong>Website:</strong> https://github.com/SummerElise</li>
                  <li><i class="icofont-rounded-right"></i> <strong>Phone:</strong> 513-444-9622</li>
                  <li><i class="icofont-rounded-right"></i> <strong>City:</strong> Morrisville, NC</li>
                </ul>
              </div>
              <div class="col-lg-6">
                <ul>
                  <li><i class="icofont-rounded-right"></i> <strong>Age:</strong> 25</li>
                  <li><i class="icofont-rounded-right"></i> <strong>Email:</strong> selise919@gmail.com</li>
                  <li><i class="icofont-rounded-right"></i> <strong>Freelance:</strong> Available</li>
                </ul>
              </div>
            </div>
            <p>
              I am currently a Full Stack Web Developer student at UNC Chapel Hill's coding bootcamp. 
              I am also working towards an Associates degree in Engineering at Wake Technical Community College here in 
              Raleigh. I readily look forward to acquiring more knowledge on web development!
            </p>
          </div>
        </div>
      </div>
      </div>
    </section>

    );
  }
    
export default About;