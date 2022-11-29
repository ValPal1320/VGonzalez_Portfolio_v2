import Nav from 'react-bootstrap/Nav';
import './Navbar.css';
import Logo from '../assets/imgs/vgon.png'

function Navbar() {
    return (
        <>
            <Nav className="justify-content-end navBar" activeKey="/home">
                <img src={Logo} alt='logo'></img>
                <Nav.Item>
                    <Nav.Link href="/home" id="navText">About Me</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1" id="navText">Portfolio</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2" id="navText">Resume</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2" id="navText">Contact</Nav.Link>
                </Nav.Item>
            </Nav>
        </>
    );
}

export default Navbar;