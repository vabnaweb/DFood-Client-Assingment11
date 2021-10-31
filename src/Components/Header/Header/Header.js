import React from 'react';
import { Container, Nav, Navbar,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';


const Header = () => {
    const {user,logOut}=useAuth();
    return (
        <div>
            <Navbar bg="secondary" variant="dark" sticky="top" collapseOnSelect expand="lg">
                <Container>


                    <Navbar.Toggle />
                    <Navbar.Collapse >
                    <Navbar.Brand ><i class="fas fa-utensils"></i> DFood</Navbar.Brand>
                        <Nav.Link as={Link} to="/home" className="text-light fw-bold">Home</Nav.Link>
                        <Nav.Link as={Link} to="/myorder" className="text-light fw-bold">MyOrder</Nav.Link>
                        <Nav.Link as={Link} to="/manageallorders" className="text-light fw-bold">ManageAllOrders</Nav.Link>
                        <Nav.Link as={Link} to="/addneworder" className="text-light fw-bold">AddNewOrders</Nav.Link>
                    </Navbar.Collapse>

                    <Nav className="me-auto justify-content-end text-white">
                        {
                            user?.email ?
                                <div> <Button className="bg-light text-dark" onClick={logOut}>LogOut</Button>
                                    Signed in as: <span>{user?.displayName}</span>
                                </div> :
                                <Nav.Link as={Link} to="/login" className="text-light fw-bold">SignIn</Nav.Link>
                        }

                       


                    </Nav>

                </Container>
            </Navbar>
        </div>
    );
};

export default Header;