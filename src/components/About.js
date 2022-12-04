import './About.css';
import profilepic from '../assets/imgs/profile.jpg'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Diversity1Outlined } from '@mui/icons-material';

function About() {
    return (
        <Card className="card">
            <Card.Body className="cardBody">
                <Row className="welcome">
                    <Card.Title>
                        <h1>Hi! My name is <i>Valeria</i></h1>
                        <h3>I am a Full Stack Developer.</h3>
                        <h5>HTML || CSS || JavaScript || Node || React || GitHub</h5>
                    </Card.Title>
                </Row>
                <Row>
                    <Card.Title className="aboutMe">
                        <h1><u>About Me</u></h1>
                    </Card.Title>
                    <Col>
                        <Card.Text>
                            <p>I have spent the 5 years pursuing a B.S. in Mathematics and minor in Education for 7th - 12th grade. I went on into becoming a math teacher and quickly realizing that teaching in public schools wasn't for me, even though I loved teaching my favorite subject. </p>
                            <p>After leaving the teaching field, I started to thing about going back to school. For what? At the time, I had no clue. Until, I found my college flash drive filled with homework assignments from my Intro to Computer Science course. Memories of my struggles with learning C++ started to flood my brain, but soon realizing how much fun and rewarding it was to learn something difficult and yet forcing me out of my comfort zone.</p>
                            <p>And it was at that moment I decided to go back to school and attend a 6 month Coding Bootcamp to be fully certified in Full Stack Development.</p>
                            <p>With my newly acquired skills, I set out to learn and practice everything programming related as well as fully understand my tasks and create an effective strategy which will allow me to complete my tasks to the best of my ability.</p>
                            <p>A quote that I will carry with me for the rest of my career as a full stack developer: "Do your ABCs. Always Be Coding" - Bob (UT Coding Instructor)</p>
                        </Card.Text>
                    </Col>
                    <Col className="imgCard">
                        <img className="profilePic" src={profilepic} alt='Profile pic'></img>
                    </Col>
                </Row>
            </Card.Body>
        </Card >
    );
}

export default About;