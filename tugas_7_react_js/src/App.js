import React, {Component } from "react";
import {Alert, Badge, Breadcrumb, Button, Card, Col, Container,Media, Row} from "react-bootstrap"

class App extends Component {
  render() {
    return (
      <div>
        <Container className="mt-3 mb-3">
        <Row>
          <Col md={3}>
          <Alert variant="primary">Website React bootstrap</Alert>
          </Col>
          <Col md={{ offset:2 }}>
            <Button className="mr-2" variant="primary">
              Notification <Badge variant="light">9</Badge>
            </Button>
            <Button variant="primary">
              Message <Badge variant="light">39</Badge>
            </Button>
          </Col>
          <Col>
            <Media>
              <img width="30" height="30" src="https://banner2.kisspng.com/20180420/kuq/kisspng-computer-icons-user-clip-art-my-vector-5ad9a348cd2ce1.8035052415242125528404.jpg" alt="Gambar Usr"/>
              <Media.Body>
                <span className="ml-2">Fajrul</span>
              </Media.Body>
            </Media>
          </Col>
        </Row>
      </Container>
      <Container className="d-flex flex-row-reverse">
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="/berita">Berita</Breadcrumb.Item>
          <Breadcrumb.Item href="/berita-bola" active>Bola</Breadcrumb.Item>
        </Breadcrumb>
      </Container>
      <Container>
        <Row>
          <Col>
            <Card style={{ width: "250px" }}>
              <Card.Img variant="top" src="https://images.performgroup.com/di/library/GOAL/f7/ad/diego-godin-vs-thailand_l9viaa2o7afh19gjl6vnekbgq.jpg?t=-1214473334&w=1920&h=1362&quality=100" />
              <Card.Body>
                <Card.Title>
                  Diego Godin Ukir Rekor Spesial Lawan Thailand
                </Card.Title>
                <Card.Text>
                  Godin sekarang menjadi pemain Uruguay dengan caps terbanyak setelah membantu negaranya melibas Thailan di Final Piala Tiongkok. Diego Godin boleh berbangga setelah resmi menjadi
                </Card.Text>
                <Button variant="primary">
                  Read More
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "250px" }}>
              <Card.Img variant="top" src="https://images.performgroup.com/di/library/GOAL/30/f0/neymar-psg-paris-saint-germain-2018-19_gmakk5891n9c19udcwofmrsgc.jpg?t=-1258742791&quality=60&w=1600" />
              <Card.Body>
                <Card.Title>
                  Neymar Bahas Kontrak Bari Di Paris Saint-Germain
                </Card.Title>
                <Card.Text>
                  Ayah sang pemain bintang Brasil berusaha meredam rumor ketertarikan Madrid. Neymar sedang berdiskusi dengan PSG soal perpanjangan kontrak bersama kampiun Ligue 1 Prancis, demikian kata ayahnya
                </Card.Text>
                <Button variant="primary">
                  Read More
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "250px" }}>
              <Card.Img variant="top" src="https://images.performgroup.com/di/library/GOAL/f3/33/england-celebrate-vs-montenegro_e97kv5anpqlq1gr9nc2qaz4ko.jpg?t=-1232521935&quality=60&w=1600" />
              <Card.Body>
                <Card.Title>
                  Inggris Mau Jadi Tim terbaik di Dunia
                </Card.Title>
                <Card.Text>
                  Kumpulan talenta terbaik yang dimiliki inggris saat ini membuat Barkley sangat optimistis. Ross Barkley merasa Inggris sudah berada di jalur yang benar untuk bisa menjadi tim terbaik di dunia dengan banyaknya talenta yang muncul sekarang ini.
                </Card.Text>
                <Button variant="primary">
                  Read More
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "250px" }}>
              <Card.Img variant="top" src="https://images.performgroup.com/di/library/GOAL/63/7f/sani-rizki-fauzi-indonesia-u-22_4yztc4nehkt61fa7omuyagf71.jpg?t=351764441&quality=60&w=1600" />
              <Card.Body>
                <Card.Title>
                  Sani Rizki Fauzi tegaskan Mental Pemain Timnas Indonesia U-23 Tetap Bagus
                </Card.Title>
                <Card.Text>
                  Gelandangan tim nasional Indonesia U-23, Sani Rizki Fauzi menegaskan kesiapannya untuk bermain pada laga melawan Brunei Darussalam I-23. Kedua tim akan bentrok pada laga pemungkas grup K
                </Card.Text>
                <Button variant="primary">
                  Read More
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      </div>
    );
  }
}

export default App;
