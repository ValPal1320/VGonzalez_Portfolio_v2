import Card from 'react-bootstrap/Card'
import './Footer.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
    return (
        <>
            <Card.Footer id="footer">
                <div id="icon">
                    <a href='https://github.com/ValPal1320'><GitHubIcon sx={{ fontSize: 60 }}></GitHubIcon></a>
                    <a href='https://www.linkedin.com/in/valeria-gonzalez-9476a61ab/'><LinkedInIcon sx={{ fontSize: 60 }}></LinkedInIcon></a>
                </div>
            </Card.Footer>
        </>
    );
}

export default Footer;