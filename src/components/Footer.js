import './Footer.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
    return (
        <>
            <footer id="footer">
                <div id="icon">
                    <a href='https://github.com/ValPal1320'><GitHubIcon id="icon" sx={{ fontSize: 60 }}></GitHubIcon></a>
                    <a href='https://www.linkedin.com/in/valeria-gonzalez-9476a61ab/'><LinkedInIcon id="icon" sx={{ fontSize: 60 }}></LinkedInIcon></a>
                </div>
            </footer>
        </>
    );
}

export default Footer;