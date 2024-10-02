import {Container, Row, Col, Button } from 'react-bootstrap';

const Intro = () => {
    return (
        <div className='intro'>
            <Container className='text-white d-flex justify-content-center align-items-center text-center'>
                <Row>
                    <Col>
                    <div className='title'>NONTON FILM</div>
                    <div className='title'>GRATIS!!!</div>
                    <div className='introButton mt-3 text-center'>
                        <Button>Lihat Lainnya</Button>
                    </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Intro