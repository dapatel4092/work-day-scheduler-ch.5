import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = ({ currentPage, handlePageChange }) => {
    return (<>
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">Dhruv</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#Aboutme" onClick={() => handlePageChange('About')}>About me</Nav.Link>
                        <Nav.Link href="#Portfolio"onClick={() => handlePageChange('Portfolio')}>Portfolio</Nav.Link>
                        <Nav.Link href="#Resume"onClick={() => handlePageChange('Resume')}>Resume</Nav.Link>
                        <Nav.Link href="#Contact"onClick={() => handlePageChange('Contact')}>Contact me</Nav.Link>
                      
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
       
        

    </>)
}
export default Header;