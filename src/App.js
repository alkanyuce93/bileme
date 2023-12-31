import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button, Card, FloatingLabel, Form } from "react-bootstrap";
import WhatsAppWidget from "react-whatsapp-widget";

function AutoLayoutExample() {
  const handleWhatsAppMessage = () => {
    window.open(
      "https://wa.me/905363572024?text=Merhaba, size ulaşmak istiyorum!",
      "_blank"
    );
  };

  const handlePhoneCall = () => {
    window.location.href = "tel:+905363572024";
  };

  return (
    <Container fluid>
      <Row style={{ paddingTop: 100 }}>
        <Col className="offset-xl-2 pb-5" xl={8} sm={12}>
          <Row style={{ marginBottom: 100 }}>
            <Row>
              <div
                className="col-12 mb-5"
                style={{ color: "ThreeDLightShadow" }}
              >
                <h1>Mobil Bıçak Bileme ve Kaliteli Bıçak Satışı</h1>
              </div>
            </Row>
            <Col md={6} sm={12}>
              <div>
                <h3 style={{ textAlign: "justify", marginBottom: 30 }}>
                  Mutfaklardan iş yerlerine, her yerde keskinlik arıyorsanız
                  doğru yerdesiniz! Avrupa Yakası'nda, mobil bıçak bileme ve
                  kaliteli bıçak satışı hizmetimizle karşınızdayız.
                </h3>
                <h3 style={{ textAlign: "justify", marginBottom: 30 }}>
                  {" "}
                  🔪 Keskinlik Yeniden Tanımlanıyor: Mutfak bıçakları,
                  profesyonel bıçaklar veya endüstriyel bıçaklar... Hangi türde
                  olursa olsun, bıçaklarınızın keskinliğini ilk günkü gibi geri
                  kazandırıyoruz. Mobil hizmetimiz sayesinde, sizi ziyaret
                  ederek bıçaklarınızı yerinde bileme şansı sunuyoruz.
                </h3>
                <h3 style={{ textAlign: "justify", marginBottom: 30 }}>
                  {" "}
                  🛒 Kaliteli Bıçak Satışı: İhtiyacınız olan kaliteli bıçağı
                  bulamıyor musunuz? Endişelenmeyin, size en iyi markaların
                  kaliteli bıçaklarını sunuyoruz. İster evde kullanın, ister iş
                  yerinizde, keskin ve dayanıklı bıçaklarla işlerinizi
                  kolaylaştırın.
                </h3>
              </div>
            </Col>
            <Col md={6} sm={12}>
              <div style={{ position: "relative" }}>
                <img style={{ width: "100%" }} src="mobil2.jpeg" alt="random" />
              </div>
            </Col>
          </Row>
          <Row className="pt-5 pb-5" style={{ marginBottom: 100 }}>
            <Row>
              <div className="col-12">
                <h1>🛵 Mobil Bıçak Bileme Hizmeti</h1>
              </div>
            </Row>
            <Col md={4} sm={12}>
              <div>
                <img
                  style={{ width: "100%" }}
                  alt="bıçak bileme bileyici"
                  data-id="2031041"
                  data-animated-url="https://cdn.dribbble.com/users/359305/screenshots/2031041/media/b3ecbaa92e6cc76407339eec437f3d8c.gif"
                  skip_resize="true"
                  srcset="https://cdn.dribbble.com/users/359305/screenshots/2031041/media/b3ecbaa92e6cc76407339eec437f3d8c.gif 320w, https://cdn.dribbble.com/users/359305/screenshots/2031041/media/b3ecbaa92e6cc76407339eec437f3d8c.gif 400w, https://cdn.dribbble.com/users/359305/screenshots/2031041/media/b3ecbaa92e6cc76407339eec437f3d8c.gif 450w, https://cdn.dribbble.com/users/359305/screenshots/2031041/media/b3ecbaa92e6cc76407339eec437f3d8c.gif 640w, https://cdn.dribbble.com/users/359305/screenshots/2031041/media/b3ecbaa92e6cc76407339eec437f3d8c.gif 700w, https://cdn.dribbble.com/users/359305/screenshots/2031041/media/b3ecbaa92e6cc76407339eec437f3d8c.gif 800w, https://cdn.dribbble.com/users/359305/screenshots/2031041/media/b3ecbaa92e6cc76407339eec437f3d8c.gif 768w"
                  src="https://cdn.dribbble.com/users/359305/screenshots/2031041/media/b3ecbaa92e6cc76407339eec437f3d8c.gif"
                ></img>
              </div>
            </Col>
            <Col md={4} sm={12}>
              <Card>
                <Card.Body>
                  <Card.Title style={{ textAlign: "justify" }}>
                    {" "}
                    Size uygun zaman ve yerde hizmet sunuyoruz. Mutfaklarınızdan
                    uzaklaşmadan, bıçaklarınızın keskinliğini kontrol etmek ve
                    gerektiğinde bilemek için bizi arayın.
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} sm={12}>
              <Card>
                <Card.Body>
                  <Card.Title style={{ textAlign: "justify" }}>
                    {" "}
                    Keskin bıçaklarınızla lezzetli yemeklere ve sorunsuz işlere
                    adım atın! Bize ulaşın ve bıçaklarınızı profesyonelce
                    bileterek kaliteli bıçakların keyfini çıkarın."
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row className="pt-5">
            <Row>
              <div className="col-12">
                <h1>BIÇAK ÇEŞİTLERİMİZ</h1>
              </div>
            </Row>
            <Col className="pt-3" xxl={4} md={6} xs={6}>
              <Card>
                <Card.Body style={{ height: 300 }}>
                  <Card.Img variant="top" src="bicak-2.jpeg" height={250} />
                </Card.Body>
              </Card>
            </Col>
            <Col className="pt-3" xxl={4} md={6} xs={6}>
              <Card>
                <Card.Body style={{ height: 300 }}>
                  <Card.Img variant="top" src="bicak-4.png" height={250} />
                </Card.Body>
              </Card>
            </Col>
            <Col className="pt-3" xxl={4} md={6} xs={6}>
              <Card>
                <Card.Body style={{ height: 300 }}>
                  <Card.Img variant="top" src="bicak-6.jpeg" height={250} />
                </Card.Body>
              </Card>
            </Col>
            <Col className="pt-3" xxl={4} md={6} xs={6}>
              <Card>
                <Card.Body style={{ height: 300 }}>
                  <Card.Img variant="top" src="bicak-1.jpg" height={250} />
                </Card.Body>
              </Card>
            </Col>
            <Col className="pt-3" xxl={4} md={6} xs={6}>
              <Card>
                <Card.Body style={{ height: 300 }}>
                  <Card.Img variant="top" src="bicak-7.jpeg" height={250} />
                </Card.Body>
              </Card>
            </Col>
            <Col className="pt-3" xxl={4} md={6} xs={6}>
              <Card>
                <Card.Body style={{ height: 300 }}>
                  <Card.Img variant="top" src="bicak-8.jpg" height={250} />
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row className="pt-5">
            <Row>
              <div className="col-12">
                <h1>Bize Ulaşın</h1>
              </div>
            </Row>
            <Col className="pt-3" xxl={6} sm={12}>
              <Button
                variant="success"
                onClick={handleWhatsAppMessage}
                style={{ display: "flex", alignItems: "center" }}
              >
                <img
                  src="whatsapp.png"
                  alt="WhatsApp Icon"
                  style={{ marginRight: "10px", width: "50px", height: "50px" }}
                />
                WhatsApp'tan Mesaj Gönder
              </Button>
            </Col>
            <Col className="pt-3" xxl={6} sm={12}>
              <Button
                variant="primary"
                onClick={handlePhoneCall}
                style={{ display: "flex", alignItems: "center" }}
              >
                <h1>Arayın: 0536 357 20 24 </h1>
              </Button>
            </Col>
          </Row>
        </Col>
        <div class="card text-center">
          <div class="card-header">ADRESİMİZ:</div>

          <div class="card-footer text-muted">
            Yerimiz İSTANBUL EYÜPSULTAN ALİBEYKÖYDE'DİR
          </div>
        </div>
      </Row>
    </Container>
  );
}

export default AutoLayoutExample;
