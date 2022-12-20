import React ,{Component}from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar,NavDropdown, Button ,  } from "react-bootstrap";
import "./test.css"

class Test extends Component{
    render(){
        return(
                   <>
                      <div className="App">
      <Navbar bg="info" color="dark"
        sticky="top" expand="lg" collapseOnSelect>
        <Navbar.Brand>

          Warthunder
        </Navbar.Brand>
        <Navbar.Toggle className="coloring" />
        <Navbar.Collapse>
          <Nav>
            <NavDropdown title="Tanks">
              <NavDropdown.Item href="#Tanks/Germany">Germany</NavDropdown.Item>
              <NavDropdown.Item href="#products/SSRI">SSRI</NavDropdown.Item>
              <NavDropdown.Item href="#products/USA">USA</NavDropdown.Item>

            </NavDropdown>
            <Nav.Link href="#blog">Blog</Nav.Link>
            <Nav.Link href="#about-us">About Us</Nav.Link>
            <Nav.Link href="#contact-us">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>

      </Navbar>
      <div className="content">
             Warthunder <br/>
             <div></div>
       <Button id="head" onClick={() => window.location.href = 'file:///C:/Users/PREDATOR/bs2/final/src/login.html'}>
       login
      </Button>
       {' '}
       <br/>
       <Button id="head" >
       register
      </Button>
       {' '}
       </div>
       <div>
        
         </div>
    </div> 
         </>
    
        )
    }
}
export default Test