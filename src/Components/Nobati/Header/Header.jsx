import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from "../Components/Logo";
import {Login} from "../Auth/Login";
import {Link, NavLink} from "react-router-dom";

import {useContext} from "react";
import {AuthContext} from "../../../context/authContext";


const Header =()=> {
    const {category } = useContext(AuthContext);
    return (
        <Navbar expand="lg">
            <Container className={'justify-content-md-center'}>
                <Navbar.Brand href="#">
                    <Logo/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse className={'justify-content-between'} id="navbarScroll">
                    <Nav
                        className="ms-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                       <Nav.Link>
                        <NavLink to="/category">Home</NavLink>
                       </Nav.Link>
                        {
                            category.length > 0 ? (
                                category.map((j)=>(<Link  key={j.id} to={`/cat/${j.id}`}>{j.name}</Link>)
                            )) : null
                        }
                        <Nav.Link href="#action2">Link</Nav.Link>
                    </Nav>
                 <Login/>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;