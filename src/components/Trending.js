import { Card, Container, Row, Col, Image } from 'react-bootstrap';
import cdiImage from '../assets/img/trending/cintadalamikhlas.jpg';
import hslImage from '../assets/img/trending/homesweetloan.jpg';
import pabImage from '../assets/img/trending/pantaskahakuberhijab.jpg';
import ssmk3Image from '../assets/img/trending/suamisuamimasakini3.jpg';
import tssImage from '../assets/img/trending/theshadowstray.jpg';
import zmImage from '../assets/img/trending/zonamerah.jpg';


const Trending = () => {
    return (
        <div>
            <Container>
                <h1 className='text-white'>TRENDING MOVIES</h1>
                <br/>
                <Row>
                    <Col md={4} className='movieWrapper' id='trending'>
                        <Card className="movieImage">
                            <Image src={cdiImage} alt="cdi card" className='images'/>
                            <div className='bg-dark'>
                            <div className='p-2 m-1 text-white'>
                            <Card.Title className='text-center'>CINTA DALAM IKHLAS</Card.Title>
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
                            <Image src={hslImage} alt="cdi card" className='images'/>
                            <div className='bg-dark'>
                            <div className='p-2 m-1 text-white'>
                            <Card.Title className='text-center'>HOME SWEET LOAN</Card.Title>
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
                            <Image src={pabImage} alt="cdi card" className='images'/>
                            <div className='bg-dark'>
                            <div className='p-2 m-1 text-white'>
                            <Card.Title className='text-center'>PANTASKAH AKU BERHIJAB</Card.Title>
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
                            <Image src={ssmk3Image} alt="cdi card" className='images'/>
                            <div className='bg-dark'>
                            <div className='p-2 m-1 text-white'>
                            <Card.Title className='text-center'>SUAMI-SUAMI MASA KINI 3</Card.Title>
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
                            <Image src={tssImage} alt="cdi card" className='images'/>
                            <div className='bg-dark'>
                            <div className='p-2 m-1 text-white'>
                            <Card.Title className='text-center'>THE SHADOW STRAY</Card.Title>
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
                            <Image src={zmImage} alt="cdi card" className='images'/>
                            <div className='bg-dark'>
                            <div className='p-2 m-1 text-white'>
                            <Card.Title className='text-center'>ZONA MERAH</Card.Title>
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

export default Trending