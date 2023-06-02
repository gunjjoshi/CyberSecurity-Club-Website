"use client"
import styles from './page.module.css';
import Image from 'next/image';
import { Container, Row, Col, Button } from 'react-bootstrap';

const MediaComponent = () => {
    return (
        <Container>
            <Row>
                <Col xs={12} md={6}>
                    <Image src="/images.png" alt="Media" width={300} height={300} className={styles.eventclass} />
                </Col>
                <Col xs={12} md={6}>
                    <div style={{ color: 'white' }} className="d-flex flex-column justify-content-center h-100 whitetext">
                        <h2 style={{ color: 'white' }} className='whitetext'>Event 1</h2>
                        <p style={{ color: 'white' }} className='whitetext'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, nemo nulla! Assumenda tempora iste id a. Quos cupiditate harum sunt cumque nobis sit at ad quidem? Dolorem, consectetur velit ea vitae unde autem tempora a, perferendis harum consequuntur quis deserunt eveniet fugit architecto voluptatibus ab! Minima illum maxime qui deserunt.</p>
                        <Button variant="primary" style={{ backgroundColor: '#3acc6b', color: 'black', borderColor: '#3acc6b' }}>Read More</Button>
                    </div>
                </Col>
            </Row>
        </Container >
    );
};

export default MediaComponent;
