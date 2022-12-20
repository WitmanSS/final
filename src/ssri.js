import React ,{Component}from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar,NavDropdown, NavItem, NavLink } from "react-bootstrap";

class SSRI extends Component{
    render(){
        return(
                   <>
                    <Navbar bg="dark">
        <div class="container-fluid">
          <a class="navbar-brand text-white text-opacity-75 bg-dark" href="#">Warthunder</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active text-white" aria-current="page" href="#">Home</a>
              </li>
              <NavItem >
                    <NavLink color="light" href="#" >tanks</NavLink>
              </NavItem>
              <NavLink>
                Pricing
              </NavLink>
              <Nav>
                                <NavDropdown title="TEst">
                                <NavDropdown.Item>Germany </NavDropdown.Item>
                                <NavDropdown.Item>USA</NavDropdown.Item>
                                <NavDropdown.Item>SSRI</NavDropdown.Item>

                                </NavDropdown>
                                </Nav>
            </ul>
          </div>
        </div>
      </Navbar>  
                   </>
    
        )
    }
}
export default SSRI