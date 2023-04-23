
import React, { useRef } from "react"; 
import { Container, Row, Col,ListGroup, ListGroupItem } from "reactstrap";
// import { Container } from "reactstrap"; 
import HomeCSS from './Home.module.css';

import heroImg from "./assests/images/hero-img1.png";

import aboutImg from "./assests/images/about-us.png";import CountUp from "react-countup";

import chooseImg from "./assests/images/choose-us.png";
 
const navLinks = [ 
  { 
    display: "Home", 
    url: "#", 
  }, 
  { 
    display: "About", 
    url: "#", 
  }, 
 
  { 
    display: "Courses", 
    url: "#", 
  }, 
  { 
    display: "Pages", 
    url: "#", 
  }, 
  { 
    display: "Blog", 
    url: "#", 
  }, 
]; 
const FeatureData = [  {
    title: "Quick Learning",    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum molestias, aperiam doloribus aut sapiente praesentium eos iste dicta amet itaque!",
    icon: "ri-draft-line",  },
  {
    title: "All Time Support",    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum molestias, aperiam doloribus aut sapiente praesentium eos iste dicta amet itaque!",
    icon: "ri-discuss-line",  },
  {
    title: "Certification",    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum molestias, aperiam doloribus aut sapiente praesentium eos iste dicta amet itaque!",
    icon: "ri-contacts-book-line",  },
];
const footerQuickLinks = [  {
    display: "Home",    url: "#",
  },  {
    display: "About US",    url: "#",
  },
  {    display: "Courses",
    url: "#",  },
  {
    display: "Blog",    url: "#",
  },];
const footerInfoLinks = [
  {
    display: "Privacy Policy",    url: "#",
  },  {
    display: "Membership",    url: "#",
  },
  {    display: "Purchases Guide",
    url: "#",  },
  {
    display: "Terms of Service",    url: "#",
  },];

const Home = () => { 
  const menuRef = useRef(); 
 
  const menuToggle = () => menuRef.current.classList.toggle("active__menu"); 

//   const CourseCard = (props) => {  const { imgUrl, title, lesson, students, rating } = props.item;
 
  return ( 
    <div>
    <header className={HomeCSS.header}> 
      <Container> 
        <div className="navigation d-flex align-items-center justify-content-between"> 
          <div className="logo"> 
            <h2 className=" d-flex align-items-center gap-1"> 
              <i class="ri-pantone-line"></i> Learners. 
            </h2> 
          </div> 
 
          <div className="nav d-flex align-items-center gap-5"> 
            <div className={HomeCSS.nav__menu} ref={menuRef} onClick={menuToggle}> 
              <ul className={HomeCSS.nav__list}> 
                {navLinks.map((item, index) => ( 
                  <li key={index} className={HomeCSS.nav__item}> 
                    <a href={item.url}>{item.display}</a> 
                  </li> 
                ))} 
              </ul> 
            </div> 
 
            <div className={HomeCSS.nav__right}> 
              <p className="mb-0 d-flex align-items-center gap-2"> 
                <i class="ri-phone-line"></i> +88 0123456789 
              </p> 
            </div> 
          </div> 
 
          <div className={HomeCSS.mobile__menu}> 
            <span> 
              <i class="ri-menu-line" onClick={menuToggle}></i> 
            </span> 
          </div> 
        </div> 
      </Container> 
    </header>
    {/* <div className={HomeCSS.spacer}> */}
    <section>
    <Container> 
        <Row> 
          <Col lg="6" md="6"> 
            <div className={HomeCSS.hero__content}> 
              <h2 className="mb-4 hero__title">Unlock your potential with <br/>RRSF scholarship! 
 
              </h2> 
              <p className="mb-5"> 
              Apply for scholarships with ease on our website - we provide comprehensive information and guidance to make your application stand out.  
                quas officiis et repellat! 
              </p> 
            </div> 
            <div className={HomeCSS.search}> 
              
              <button className="btn">Search</button> 
            </div> 
          </Col> 
 
          <Col lg="6" md="6"> 
            <img src={heroImg} alt="" className="w-100 hero__img" /> 
          </Col> 
        </Row> 
      </Container> 
    </section>
    {/* </div> */}
    {/* <section>
    <Container> 
        <Row> 
          <Col lg="2" md="3" sm="4" xs="6"> 
            <h3 className=" d-flex align-items-center gap-1"> 
              <i class="ri-vimeo-line"></i> Vimeo 
            </h3> 
          </Col> 
 
          <Col lg="2" md="3" sm="4" xs="6"> 
            <h3 className=" d-flex align-items-center gap-1"> 
              <i class="ri-pinterest-line"></i> Pinterest 
            </h3> 
          </Col> 
 
          <Col lg="2" md="3" sm="4" xs="6"> 
            <h3 className=" d-flex align-items-center gap-1"> 
              <i class="ri-dribbble-line"></i> Dribble 
            </h3> 
          </Col> 
 
          <Col lg="2" md="3" sm="4" xs="6"> 
            <h3 className=" d-flex align-items-center gap-1"> 
              {" "} 
              <i class="ri-apple-fill"></i> Apple 
            </h3> 
          </Col> 
 
          <Col lg="2" md="3" sm="4" xs="6"> 
            <h3 className=" d-flex align-items-center gap-1"> 
              {" "} 
              <i class="ri-finder-fill"></i> Finder 
            </h3> 
          </Col> 
 
          <Col lg="2" md="3" sm="4" xs="6"> 
            <h2 className=" d-flex align-items-center gap-1"> 
              {" "} 
              <i class="ri-google-fill"></i> Google 
            </h2> 
          </Col> 
        </Row> 
      </Container> 
    </section> */}
    {/* <div className={HomeCSS.spacer}> */}
    <section>
    <Container> 
        <Row> 
          <Col lg="6" md="6"> 
            <div className={HomeCSS.about__img}> 
              <img src={aboutImg} alt="" className="w-100" /> 
            </div> 
          </Col> 
 
          <Col lg="6" md="6"> 
            <div className={HomeCSS.about__content}> 
              <h2>About RRSF</h2> 
              <p> 
              RRSF identifies children who performed extraordinarily well in academics and who are bright and deserving yet came from a low-income home.  
              The scholarship is given and the student's journey starts when a facilitator confirms their financial necessity. 
              </p> 
 
              <div className={HomeCSS.about__counter}> 
                <div className=" d-flex gap-5 align-items-center"> 
                  <div className="single__counter"> 
                    <span className={HomeCSS.counter}> 
                      <CountUp start={0} end={25} duration={2} suffix="K" /> 
                    </span> 
 
                    <p className={HomeCSS.counter__title}>Number of Applicants</p> 
                  </div> 
 
                  <div className="single__counter"> 
                    <span className={HomeCSS.counter}> 
                      <CountUp start={0} end={12} duration={2} suffix="M" /> 
                    </span> 
 
                    <p className={HomeCSS.counter__title}>Benifited students</p> 
                  </div> 
                </div> 
 
                <div className=" d-flex gap-5 align-items-center"> 
                  <div className="single__counter"> 
                    <span className={HomeCSS.counter}> 
                      <CountUp start={0} end={95} duration={2} suffix="M" /> 
                    </span> 
 
                    <p className={HomeCSS.counter__title}>Foundation</p> 
                  </div> 
 
                  <div className="single__counter"> 
                    <span className={HomeCSS.counter}> 
                      <CountUp start={0} end={5} duration={2} suffix="K" /> 
                    </span> 
 
                    <p className={HomeCSS.counter__title}>District</p> 
                  </div> 
                </div> 
              </div> 
            </div> 
          </Col> 
        </Row> 
      </Container> 
    </section>
    {/* <div className="single__course__item"> 
      <div className="course__img"> 
        <img src={imgUrl} alt="" className="w-100" /> 
      </div> 
 
      <div className="course__details"> 
        <h6 className="course__title mb-4">{title}</h6> 
 
        <div className=" d-flex justify-content-between align-items-center"> 
          <p className="lesson d-flex align-items-center gap-1"> 
            <i class="ri-book-open-line"></i> {lesson} Lessons 
          </p> 
 
          <p className="students d-flex align-items-center gap-1"> 
            <i class="ri-user-line"></i> {students}K 
          </p> 
        </div> 
 
        <div className=" d-flex justify-content-between align-items-center"> 
          <p className="rating d-flex align-items-center gap-1"> 
            <i class="ri-star-fill"></i> {rating}K 
          </p> 
 
          <p className="enroll d-flex align-items-center gap-1"> 
            <a href="#"> Enroll Now</a> 
          </p> 
        </div>  course section is not added*/}
      {/* </div> 
    </div> */}
    {/* // </div>  */}
    <section> 
      <Container> 
        <Row> 
          <Col lg="6" md="6"> 
            <div className="choose__content"> 
              <h2>Why Choose Us</h2> 
              <p> 
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Incidunt mollitia nostrum harum eos praesentium odit a sed quod 
                aut fugit. Lorem ipsum dolor sit amet consectetur adipisicing 
                elit. Reprehenderit omnis, culpa eligendi inventore perspiciatis 
                minus. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Dolores cupiditate facilis provident quidem accusamus impedit 
                tenetur laboriosam debitis nisi eius! 
              </p> 
            </div> 
            </Col>
            <Col lg="6" md="6"> 
            <div className="choose__img"> 
            <img src={chooseImg} alt="" className="w-100" />
            </div>
            </Col>
          </Row>
        </Container>
    </section>
    <section> 
      <Container> 
        <Row> 
          {FeatureData.map((item, index) => ( 
            <Col lg="4" md="6" key={index}> 
              <div className="single__feature text-center px-4"> 
                <h2 className="mb-3"> 
                  <i class={item.icon}></i> 
                </h2> 
                <h6>{item.title}</h6> 
                <p>{item.desc}</p> 
              </div> 
            </Col> 
          ))} 
        </Row> 
      </Container> 
    </section>
    <footer className={HomeCSS.footer}> 
      <Container> 
        <Row> 
          <Col lg="3" md="6" className="mb-4"> 
            <h2 className=" d-flex align-items-center gap-1"> 
              <i class="ri-pantone-line"></i> Learners. 
            </h2> 
 
            <div className={HomeCSS.follows}> 
              <p className="mb-0">Follow us on social media</p> 
              <span> 
                {" "} 
                <a href="facebook.com"> 
                  <i class="ri-facebook-line"></i> 
                </a> 
              </span> 
 
              <span> 
                {" "} 
                <a href="facebook.com"> 
                  <i class="ri-instagram-line"></i> 
                </a> 
              </span> 
 
              <span> 
                {" "} 
                <a href="facebook.com"> 
                  <i class="ri-linkedin-line"></i> 
                </a> 
              </span> 
 
              <span> 
                {" "} 
                <a href="facebook.com"> 
                  <i class="ri-twitter-line"></i> 
                </a> 
              </span> 
            </div> 
          </Col> 
 
          <Col lg="3" md="6" className="mb-4"> 
            <h6 className="fw-bold">Explore</h6> 
            <ListGroup className={HomeCSS.link__list}> 
              {footerQuickLinks.map((item, index) => ( 
                <ListGroupItem key={index} className="border-0 ps-0 link__item"> 
                  {" "} 
                  <a href={item.url}>{item.display}</a> 
                </ListGroupItem> 
              ))} 
            </ListGroup> 
          </Col> 
 
          <Col lg="3" md="6" className="mb-4"> 
            <h6 className="fw-bold">Information</h6> 
            <ListGroup className={HomeCSS.link__list}> 
              {footerInfoLinks.map((item, index) => ( 
                <ListGroupItem key={index} className="border-0 ps-0 link__item"> 
                  {" "} 
                  <a href={item.url}>{item.display}</a> 
                </ListGroupItem> 
              ))} 
            </ListGroup> 
          </Col> 
 
          <Col lg="3" md="6"> 
            <h6 className="fw-bold">Get in Touch</h6> 
 
            <p>Address: Sylhet, Bangladesh</p> 
            <p> Phone: +88 0123456789 </p> 
            <p>Email: example@gmail.com</p> 
          </Col> 
        </Row> 
      </Container> 
    </footer>

    </div>
 


  ); 
}; 
 
export default Home;
