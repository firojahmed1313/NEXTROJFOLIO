import React from 'react'

const page = () => {
  return (
    <article class="resume ">
      <section class="timeline">

        <div class="title-wrapper">
          <div class="icon-box">
            <ion-icon name="school-outline"></ion-icon>
          </div>

          <h3 class="h3">Education</h3>
        </div>

        <ol class="timeline-list">

          <li class="timeline-item">

            <h4 class="h4 timeline-item-title">Kalyani Government Engineering College </h4>
            <p class="timeline-text">Kalyani, West Bengal 741235</p>
            <span>Present -2020</span>

            <p class="timeline-text">
              B.Tech in Computer Science And Engineeing <br/>
                Cgpa: 9.14
            </p>

          </li>

          <li class="timeline-item">

            <h4 class="h4 timeline-item-title">BAXARAH HIGH SCHOOL(H.S.)</h4>
            <p class="timeline-text"> Howrah, West Bengal 711110</p>
            <span>2016 — 2018</span>

            <p class="timeline-text">
              Higher Secondary <br/> Percentage : 77.7 (sub- Physics, Chemistry, Maths, and Biology)
            </p>

          </li>

          <li class="timeline-item">

            <h4 class="h4 timeline-item-title">CHALTAKHALI RAI GUNAKAR BHARAT CHANDRA INSTITUTION</h4>
            <p class="timeline-text"> Howrah, West Bengal 711410</p>
            <span>2014 — 2016</span>

            <p class="timeline-text">
              Secondary <br/> percentage : 83.4

            </p>

          </li>

        </ol>

      </section>

      <section class="timeline">

        <div class="title-wrapper">
          <div class="icon-box">
            <ion-icon name="desktop-outline"></ion-icon>
          </div>

          <h3 class="h3">Experience</h3>
        </div>

        <ol class="timeline-list">

          <li class="timeline-item">

            <h4 class="h4 timeline-item-title">Summer Intern</h4>
            <p class="timeline-text"> Celebal Technologies <br/> Jaipur, Rajasthan 302017</p>

            <span>June 2023 - Aug 2023 </span>

            <p class="timeline-text">
              Developed a high-performance frontend website for Movie lovers.
              Worked with Reactjs ,html , css,bootstrap,Reduxsaga.
              implemented Redux for state management, which allowed me to efficiently handle data flow and manage the application’s global state.
            </p>

          </li>





        </ol>

      </section>
      <section class="timeline">

        <div class="title-wrapper">
          <div class="icon-box">
            <ion-icon name="business-outline"></ion-icon>
          </div>

          <h3 class="h3">Training</h3>
        </div>

        <ol class="timeline-list">

          <li class="timeline-item">

            <h4 class="h4 timeline-item-title">Industrial Training And Internship</h4>
            <p class="timeline-text"> Ardent Computech Pvt Ltd <br/> Online </p>

            <span> Aug 2022 - Sep 2022 </span>

            <p class="timeline-text">
              Developed a hotel website project from zero to deployment.
              Utilized responsive design to ensure compatibility across all devices
              Tools: Html, Css , JavaScript and Bootstrap.
              Coordinated with a team of students to design and deployment.
            </p>

          </li>





        </ol>

      </section>
    </article>
  )
}

export default page