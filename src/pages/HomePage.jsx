import { Container, Row, Col } from "react-bootstrap";
import HeroImage from '../assets/img/hero.png';

import { kelasTerbaru, dataSwiper } from "../data/index";
import { useNavigate } from "react-router-dom";
// import { FaqComponent } from '../components/FaqComponent';


import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

const HomePage = () => {
    let navigate = useNavigate();
    
    return (
    <div className="homepage">
        <header className="w-100 min-vh-100 d-flex align-items-center">
            <Container>
                <Row className="header-box d-flex align-items-center pt-lg-5">
                    <Col>
                        <h1 className="mb-4 animate__animated animate__fadeInUp animate__delay-0.6s">
                            Temukan <br/> <span>Bakat dan Kreatifitasmu</span> <br/> bersama kami
                        </h1>
                        <p className="mb-4 animate__animated animate__fadeInUp animate__delay-0.6s">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae corporis a ex, reiciendis accusantium similique dolorum, numquam veniam ipsam, earum doloremque. Enim distinctio quidem aliquam perspiciatis animi natus ratione omnis!
                        </p>
                        <button className="btn btn-danger btn-lg rounded-2 mr-2 animate__animated animate__fadeInUp animate__delay-1s">Lihat Promo</button>
                        <button className="btn btn-outline-danger btn-lg rounded-2 animate__animated animate__fadeInUp animate__delay-1s" onClick={() => navigate("/kelas")}>Lihat Kelas</button>
                    </Col>
                    <Col lg="6" className="pt-lg-0 pt-5">
                        <img src={HeroImage} alt="hero" className="animate__animated animate__fadeInUp" />
                    </Col>
                </Row>
            </Container>
        </header>
        <div className="kelas w-100 min-vh-100">
            <Container>
                <Row>
                    <Col>
                    <h1 className="text-center fw-bold">Kelas Terbaru</h1>
                    <p className="text-center mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, tempora fugiat blanditiis dolorem ad possimus quo, quod nostrum deleniti, laudantium eaque illo exercitationem. Cumque nisi quaerat, dicta voluptas odio alias.</p>
                    </Col>
                </Row>
                <Row>
                    {kelasTerbaru.map((kelas) => {
                        return (
                            <Col key={kelas.id} className="shadow rounded" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={kelas.delay}>
                                <img src={kelas.image} alt="unsplash.com" className="w-100 mb-5 rounded-top" />
                                <div className="star mb-3 px-3">
                                    <i className={kelas.star1}></i>
                                    <i className={kelas.star2}></i>
                                    <i className={kelas.star3}></i>
                                    <i className={kelas.star4}></i>
                                    <i className={kelas.star5}></i>
                                </div>
                                <h5 className="mb-5 px-3">{kelas.title}</h5>
                                <div className="ket d-flex justify-content-between align-items-center px-3 pb-3">
                                    <p className="m-0 text-primary fw-bold">{kelas.price}</p>
                                    <button className="btn btn-danger rounded-2">{kelas.buy}</button>
                                </div>
                            </Col>
                        );
                    })}
                </Row>
                <Row>
                    <Col className="text-center" >
                        <button className="btn btn-success rounded-5 btn-lg" onClick={() => navigate("/kelas")} data-aos="fade-up" data-aos-duration="1000">
                            Lihat Selengkapnya
                            <i className="fa-solid fa-chevron-right ml-3"></i>
                        </button>
                    </Col>
                </Row>
            </Container>
        </div>
        <div className="testimonial py-5">
            <Container>
                <Row>
                    <Col>
                        <h1 className="text-center mb-5">Testimonial</h1>
                    </Col>
                </Row>
                <Row>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={10}
                        pagination={{
                       clickable: true,
                    }}
                    breakpoints={{
                        640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                        },
                        768: {
                          slidesPerView: 2,
                          spaceBetween: 40,
                        },
                        992: {
                            slidesPerView: 2,
                            spaceBetween: 50,
                        },
                        1200: {
                            slidesPerView: 3,
                            spaceBetween: 50,
                        },
                    }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        {dataSwiper.map((data) => {
                            return (
                            <SwiperSlide key={data.id} className="shadow-sm">
                                <p className="desc">{data.desc}</p>
                                <div className="people">
                                    <img src={data.image} alt="" />
                                    <div className="detil mt-3">
                                        <h5 className="mb-1">{data.name}</h5>
                                        <p className="m-0 fw-bold">{data.skill}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </Row>
            </Container>
        </div>
        {/* <FaqComponent/> */}
    </div>
  )
}

export default HomePage