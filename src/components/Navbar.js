import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import './Navbar.css';
import Logo from '../assets/imgs/vgon.png'
import resume from '../assets/imgs/V_Gonzalez_Resume_2022.pdf';


function Navbar() {
    return (
        <>
            <Nav className="justify-content-end navBar" activeKey="/home">

                <a href="/home"><img src={Logo} alt='logo'></img></a>

                <Nav.Item>
                    <a href="/about-me">
                        <Button id="navText">
                            About Me
                        </Button>
                    </a>
                </Nav.Item>
                <Nav.Item>
                    <a href="/portfolio">
                        <Button id="navText">
                            Portfolio
                        </Button>
                    </a>
                </Nav.Item>
                <Nav.Item>
                    <a href={resume} target="_blank">
                        <Button id="navText">
                            Resume
                        </Button>
                    </a>
                </Nav.Item>
                <Nav.Item>
                    <a href="/contact">
                        <Button id="navText">
                            Contact
                        </Button>
                    </a>
                </Nav.Item>
            </Nav>
        </>
    );
}

export default Navbar;