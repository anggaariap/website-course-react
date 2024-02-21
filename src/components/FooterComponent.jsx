import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const FooterComponent = () => {
  return (
    <div className="footer py-5">
      <Container>
        <Row className="d-flex justify-content-between">
          <Col lg="5">
            <h3 className="title fw-bold">Course Website</h3>
            <p className="desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus aspernatur praesentium ut? Reprehenderit quisquam assumenda porro in eaque voluptas explicabo quod laborum! Quaerat, eligendi consequatur iure vero repudiandae quae optio?</p>
            <div className="phone mb-2 mt-4">
              <Link className="text-decoration-none">
                <i className="fa-barnds fa-whatsapp"></i>
                <p className="m-0">+62 1234-5678-912</p>
              </Link>
            </div>
            <div className="email">
              <Link className="text-decoration-none">
                <i className="fa-regular fa-envelope"></i>
                <p className="m-0">person-email@gmail.com</p>
              </Link>
            </div>
          </Col>
          <Col className="d-flex flex-column col-lg-2 col mt-lg-0 mt-5">
            <h5 className="fw-bold">Menu</h5>
            <Link to="">Home</Link>
            <Link to="kelas">Kelas</Link>
            <Link to="testimonial">Testimonial</Link>
            <Link to="faq">FAQ</Link>
            <Link to="syaratketen">Syarat & Ketentuan</Link>
          </Col>
          <Col lg="4" className="mt-lg-0 mt-5">
            <h5 className="fw-bold mb-4">Subscribe untuk info lengkap</h5>
            <div className="subscribe">
              <input type="text" placeholder="Subscribe..."></input>
              <button className="btn btn-danger rounded-end rounded-0">Subscribe</button>
            </div>
            <div className="social mt-5">
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-instagram"></i>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="text-center px-md-0 px-3">
              &copy; Copyright {new Date().getFullYear()} by <span>Angga Aria P</span>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default FooterComponent
