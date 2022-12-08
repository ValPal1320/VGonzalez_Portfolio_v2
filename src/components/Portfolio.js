import './Portfolio.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import pom from '../assets/imgs/peace_of_mind.PNG';
import totr from '../assets/imgs/trivia_on_the_rocks.PNG';
import nt from '../assets/imgs/note_taker.PNG';
import cq from '../assets/imgs/coding_quiz.PNG';
import wdb from '../assets/imgs/weather_dashboard.PNG';
import ws from '../assets/imgs/work_scheduler.PNG';

function Portfolio() {
    return (
        <Container id="portfolioCard">
            <Card.Title className="myWork">
                <h1>Portfolio</h1>
            </Card.Title>
            <div id="portfolio">
                <Row id="card">
                    <Col>
                        <img id="pom" src={pom} alt="Peace of Mind"></img>
                    </Col>
                    <Col>
                        <h3>Peace of Mind</h3>
                        <p id="description">With this site, users will be able to come together anonymously and support one another through the ups and downs of what life brings. Mental health is a serious concern and everyone deserve and need a safe space to be able to talk about it without the fear of judgment.</p>
                        <div id="links">
                            <a href="https://peace-of-mind-app-v2.herokuapp.com/">Deployed Application</a>
                            <a href="https://github.com/AndreaRene/Peace-Of-Mind_V2">GitHub Repository</a>
                        </div>
                    </Col>
                </Row>
                <Row id="card">
                    <Col>
                        <h3>Trivia on the Rocks</h3>
                        <p id="description">A fun app all about cocktail recipes and alcohol/drink related trivia!</p>
                        <div id="links">
                            <a href="https://valpal1320.github.io/Trivia_on_the_rocks/">Deployed Application</a>
                            <a href="https://github.com/ValPal1320/Trivia_on_the_rocks">GitHub Repository</a>
                        </div>
                    </Col>
                    <Col>
                        <img id="totr" src={totr} alt="Trivia on the Rocks"></img>
                    </Col>
                </Row>
                <Row id="card">
                    <Col>
                        <img id="nt" src={nt} alt="Note Taker"></img>
                    </Col>
                    <Col>
                        <h3>Note Taker</h3>
                        <p id="description">A simple and useful note taking app will allow a user to type and save notes.</p>
                        <div id="links">
                            <a href="https://vgonzalez-note-taker.herokuapp.com/">Deployed Application</a>
                            <a href="https://github.com/ValPal1320/Note_Taker">GitHub Repository</a>
                        </div>
                    </Col>
                </Row>
                <Row id="card">
                    <Col>
                        <h3>Coding Quiz</h3>
                        <p id="description">Test your coding knowledge with this 5 multiple choice questions coding quiz. This quiz comes with a timer and can track your high scores! </p>
                        <div id="links">
                            <a href="https://valpal1320.github.io/5_Questions_Coding_Quiz/">Deployed Application</a>
                            <a href="https://github.com/ValPal1320/5_Questions_Coding_Quiz">GitHub Repository</a>
                        </div>
                    </Col>
                    <Col>
                        <img id="cq" src={cq} alt="Coding Quiz"></img>
                    </Col>
                </Row>
                <Row id="card">
                    <Col>
                        <img id="wdb" src={wdb} alt="Weather Dashboard"></img>
                    </Col>
                    <Col>
                        <h3>Weather Dashboard</h3>
                        <p id="description">Enter in a city and search to view the current weather, temperature, humidity, wind speed, and UV Index for that city at the current time and date. Will also display the weather, temperature and hummidity forecast for the next five days.</p>
                        <div id="links">
                            <a href="https://valpal1320.github.io/Weather_Dashboard/">Deployed Application</a>
                            <a href="https://github.com/ValPal1320/Weather_Dashboard">GitHub Repository</a>
                        </div>
                    </Col>
                </Row>
                <Row id="card">
                    <Col>
                        <h3>Work Day Scheduler</h3>
                        <p id="description">Plan ahead for your work day with this user friendly Work Day Scheduler. The scheduler will always display the current date and get automatically updated accoding to the current time in your area. Save and/or delete your planned duties or breaks!</p>
                        <div id="links">
                            <a href="https://valpal1320.github.io/Work_Scheduler/">Deployed Application</a>
                            <a href="https://github.com/ValPal1320/Work_Scheduler">GitHub Repository</a>
                        </div>
                    </Col>
                    <Col>
                        <img id="ws" src={ws} alt="Work Scheduler"></img>
                    </Col>
                </Row>
            </div>
        </Container>
    );
}

export default Portfolio;