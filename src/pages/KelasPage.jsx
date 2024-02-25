import { Container, Row, Col } from 'react-bootstrap';
import { semuaKelas } from '../data/index';


const KelasPage = () => {
  return (
  <div className="kelas-page">
    <div className="kelas min-vh-100">
      <Container>
        <Row>
          <Col>
          <h1 className="text-center fw-bold">Semua kelas</h1>
          <p className="text-center"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni, ipsa quod temporibus assumenda error autem sit rerum possimus perferendis nobis facere dolorem sequi doloribus nulla nihil voluptatibus eum quae. Nostrum. </p>
          </Col>
        </Row>
        <Row>
          {semuaKelas.map((kelas) => {
            return (
              <Col key={kelas.id} className="shadow rounded">
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
      </Container>
    </div>
  </div>
  );
};

export default KelasPage