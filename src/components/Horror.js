import { Card, Container, Row, Col, Image } from 'react-bootstrap';
import kgImage from '../assets/img/horror/kuasagelap.jpg';
import pbpi2Image from '../assets/img/horror/parabetinapengikutiblis2.jpg';
import pImage from '../assets/img/horror/perewangan.jpg';
import ssrImage from '../assets/img/horror/santetsegoropitu.jpg';
import sImage from '../assets/img/horror/sumala.jpg';
import tdImage from '../assets/img/horror/tebusandosa.jpg';


const Horror = () => {
    return (
        <div>
            <Container>
                <br/>
                <h1 className='text-white'>HORROR MOVIES</h1>
                <br/>
                <Row>
                    <Col md={4} className='movieWrapper' id='horror'>
                        <Card className="movieImage">
                            <Image src={kgImage} alt="cdi card" className='images'/>
                            <div className='bg-dark'>
                            <div className='p-2 m-1 text-white'>
                            <Card.Title className='text-center'>KUASA GELAP</Card.Title>
                            <Card.Text className='text-left'>
                                This is a wider card with supporting text below as a
                            </Card.Text>
                            <Card.Text className='text-left'>
                                Last updated 3 mins ago
                            </Card.Text>
                            </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className='movieWrapper'>
                        <Card className="movieImage">
                            <Image src={pbpi2Image} alt="cdi card" className='images'/>
                            <div className='bg-dark'>
                            <div className='p-2 m-1 text-white'>
                            <Card.Title className='text-center'>PARA BETINA PENGIKUT IBLIS 2</Card.Title>
                            <Card.Text className='text-left'>
                                This is a wider card with supporting text below as a
                            </Card.Text>
                            <Card.Text className='text-left'>
                                Last updated 3 mins ago
                            </Card.Text>
                            </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className='movieWrapper'>
                        <Card className="movieImage">
                            <Image src={pImage} alt="cdi card" className='images'/>
                            <div className='bg-dark'>
                            <div className='p-2 m-1 text-white'>
                            <Card.Title className='text-center'>PEREWANGAN</Card.Title>
                            <Card.Text className='text-left'>
                                This is a wider card with supporting text below as a
                            </Card.Text>
                            <Card.Text className='text-left'>
                                Last updated 3 mins ago
                            </Card.Text>
                            </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className='movieWrapper'>
                        <Card className="movieImage">
                            <Image src={ssrImage} alt="cdi card" className='images'/>
                            <div className='bg-dark'>
                            <div className='p-2 m-1 text-white'>
                            <Card.Title className='text-center'>SANTET SEGORO PITU</Card.Title>
                            <Card.Text className='text-left'>
                                This is a wider card with supporting text below as a
                            </Card.Text>
                            <Card.Text className='text-left'>
                                Last updated 3 mins ago
                            </Card.Text>
                            </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className='movieWrapper'>
                        <Card className="movieImage">
                            <Image src={sImage} alt="cdi card" className='images'/>
                            <div className='bg-dark'>
                            <div className='p-2 m-1 text-white'>
                            <Card.Title className='text-center'>SUMALA</Card.Title>
                            <Card.Text className='text-left'>
                                This is a wider card with supporting text below as a
                            </Card.Text>
                            <Card.Text className='text-left'>
                                Last updated 3 mins ago
                            </Card.Text>
                            </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className='movieWrapper'>
                        <Card className="movieImage">
                            <Image src={tdImage} alt="cdi card" className='images'/>
                            <div className='bg-dark'>
                            <div className='p-2 m-1 text-white'>
                            <Card.Title className='text-center'>TEBUSAN DOSA</Card.Title>
                            <Card.Text className='text-left'>
                                This is a wider card with supporting text below as a
                            </Card.Text>
                            <Card.Text className='text-left'>
                                Last updated 3 mins ago
                            </Card.Text>
                            </div>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Horror