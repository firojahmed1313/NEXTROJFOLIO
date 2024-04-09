import Navber from "@/components/Navber";
import NavberProfile from "@/components/NavberProfile";
import Service from "@/components/Service";

export default function Home() {
  return (
    <>
      <article className="about w-[90%] m-auto" >
        <section className="about-text text-base font-normal mb-5">
          <p className="mb-5 mt-5">
            I am MD Firoj Ahmed, a passionate front-end developer with a strong foundation in Computer Science & Engineering. I completed my B.Tech degree from Kalyani Government Engineering College, where I gained extensive knowledge and practical skills in the field of web development.
          </p>

          <p className="mb-5">
            I pursued my B.Tech in Computer Science & Engineering from Kalyani Government Engineering College, where I acquired a deep understanding of various programming languages, algorithms, data structures, and software development principles. Throughout my academic journey, I consistently demonstrated a strong commitment to learning and excelled in front-end development courses.
          </p>
          <p className="mb-5">
            As a front-end developer, I possess expertise in HTML, CSS, and JavaScript, which are the building blocks of modern web development. I am skilled in creating responsive and user-friendly websites, ensuring seamless user experiences across different devices and browsers. Additionally, I have experience working with popular front-end frameworks and libraries such as ReactJS and NextJS.
          </p>
          <div className="text-white bg-red-600 p-2 w-fit rounded-lg font-bold hover:border hover:border-red-500 hover:bg-white hover:text-red-600">

            <a href="https://drive.google.com/file/d/1hyoXPm8M3kcaiiI_yn9W_E1TKuI1M8P3/view?usp=sharing" className=" text-base" target="_blank">Download CV</a>
          </div>
        </section>


        <Service/>

        

      </article>
    </>
  );
}
