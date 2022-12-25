import React ,{Component}from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar,NavDropdown, Button ,  } from "react-bootstrap";
import "./test.css"
import Background from "./img/texture-1306790.png"

class Test extends Component{
    render(){
        return(
                   <body>
                     <div className="App">
      <Navbar id="nav" color="dark" sticky="top" expand="lg" collapseOnSelect>
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
          </Nav>
        </Navbar.Collapse>

      </Navbar>
      <div className="content">
        
             Warthunder <br/>
             <div></div>
       <Button id="head">
       login
      </Button>
       {' '}
       <br/>
       <Button id="head2" >
       register
      </Button>
       {' '}
       </div>
    </div> 
                   </body>
                     
         
    
        )
    }
}
export default Test