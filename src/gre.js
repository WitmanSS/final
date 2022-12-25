import React ,{Component}from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button ,Nav, Navbar,NavDropdown, NavItem, NavLink } from "react-bootstrap";
import "./Gre.css"
class GRE extends Component{
    render(){
        return(
                   <>
                <body>
                     <div className="App">
      <Navbar id="nav" color="dark" sticky="top" expand="lg" collapseOnSelect>
        <Navbar.Brand style={{marginLeft:"30px"}}>
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
    </div> 
                   </body>
      <div className="main">
        <div className="GreM"> 
              <Button id="head" style={{marginLeft:"3.5rem"}}>
             Medium Tanks
              </Button>
              <div className="card">
                <h5>Panzer IV H</h5>
                <img src={require("./GreM/1200px-ArtImage_Pz.IV_H.png")} />
                <h6>German cold war era mbt</h6>
                <p>The Leopard 1A5, being a further development of the Leopard A1A1, does not differ much from its predecessor in terms of armour. The Leopard 1A5 prioritizes firepower and mobility over the survivability of the tank.
                  The armour in the frontal arc is reliable against many of the autocannons found on IFVs at the rank, but occasional rounds can penetrate the turret ring. Side armour can be reliably penetrated by autocannon fire, thus it is vital to keep the front of the armour towards the enemy.
                   </p>
              </div>
              <div className="card">
                <h5>Panther A</h5>
                <img src={require("./GreM/1200px-ArtImage_Panther_A.png")} />
                <h6>German cold war era mbt</h6>
                <p>The Leopard 1A5, being a further development of the Leopard A1A1, does not differ much from its predecessor in terms of armour. The Leopard 1A5 prioritizes firepower and mobility over the survivability of the tank.
                  The armour in the frontal arc is reliable against many of the autocannons found on IFVs at the rank, but occasional rounds can penetrate the turret ring. Side armour can be reliably penetrated by autocannon fire, thus it is vital to keep the front of the armour towards the enemy.
                   </p>
              </div>   
               <div className="card">
                <h5>Leopard 1A5</h5>
                <img src={require("./GreM/1200px-ArtImage_Leopard_1A5.png")} />
                <h6>German cold war era mbt</h6>
                <p>The Leopard 1A5, being a further development of the Leopard A1A1, does not differ much from its predecessor in terms of armour. The Leopard 1A5 prioritizes firepower and mobility over the survivability of the tank.
                  The armour in the frontal arc is reliable against many of the autocannons found on IFVs at the rank, but occasional rounds can penetrate the turret ring. Side armour can be reliably penetrated by autocannon fire, thus it is vital to keep the front of the armour towards the enemy.
                   </p>
              </div>
              <div className="card">
                <h5>Leopard 2A6</h5>
                <img src={require("./GreM/1200px-ArtImage_Leopard_2A6.png")} />
                <h6>German cold war era mbt</h6>
                <p>The Leopard 1A5, being a further development of the Leopard A1A1, does not differ much from its predecessor in terms of armour. The Leopard 1A5 prioritizes firepower and mobility over the survivability of the tank.
                  The armour in the frontal arc is reliable against many of the autocannons found on IFVs at the rank, but occasional rounds can penetrate the turret ring. Side armour can be reliably penetrated by autocannon fire, thus it is vital to keep the front of the armour towards the enemy.
                   </p>
              </div>
          
      </div>
        <div className="GreM">
           <Button id="head" style={{marginLeft:"3.5rem"}}>
             Heavy Tanks
              </Button>
              <div className="card">
                <h5>Tiger E</h5>
                <img src={require("./GreH/1200px-ArtImage_Tiger_E.png")} />
                <h6>German cold war era mbt</h6>
                <p>The Leopard 1A5, being a further development of the Leopard A1A1, does not differ much from its predecessor in terms of armour. The Leopard 1A5 prioritizes firepower and mobility over the survivability of the tank.
                  The armour in the frontal arc is reliable against many of the autocannons found on IFVs at the rank, but occasional rounds can penetrate the turret ring. Side armour can be reliably penetrated by autocannon fire, thus it is vital to keep the front of the armour towards the enemy.
                   </p>
              </div>
              <div className="card">
                <h5>Tiger II (P)</h5>
                <img src={require("./GreH/1200px-ArtImage_Tiger_II_(P).png")} />
                <h6>German cold war era mbt</h6>
                <p>The Leopard 1A5, being a further development of the Leopard A1A1, does not differ much from its predecessor in terms of armour. The Leopard 1A5 prioritizes firepower and mobility over the survivability of the tank.
                  The armour in the frontal arc is reliable against many of the autocannons found on IFVs at the rank, but occasional rounds can penetrate the turret ring. Side armour can be reliably penetrated by autocannon fire, thus it is vital to keep the front of the armour towards the enemy.
                   </p>
              </div>
              <div className="card">
                <h5>Tiger II (H)</h5>
                <img src={require("./GreH/1200px-ArtImage_Tiger_II_(H).png")} />
                <h6>German cold war era mbt</h6>
                <p>The Leopard 1A5, being a further development of the Leopard A1A1, does not differ much from its predecessor in terms of armour. The Leopard 1A5 prioritizes firepower and mobility over the survivability of the tank.
                  The armour in the frontal arc is reliable against many of the autocannons found on IFVs at the rank, but occasional rounds can penetrate the turret ring. Side armour can be reliably penetrated by autocannon fire, thus it is vital to keep the front of the armour towards the enemy.
                   </p>
              </div>
              <div className="card">
                <h5>Maus</h5>
                <img src={require("./GreH/1200px-ArtImage_Maus.png")} />
                <h6>German cold war era mbt</h6>
                <p>The Leopard 1A5, being a further development of the Leopard A1A1, does not differ much from its predecessor in terms of armour. The Leopard 1A5 prioritizes firepower and mobility over the survivability of the tank.
                  The armour in the frontal arc is reliable against many of the autocannons found on IFVs at the rank, but occasional rounds can penetrate the turret ring. Side armour can be reliably penetrated by autocannon fire, thus it is vital to keep the front of the armour towards the enemy.
                   </p>
              </div>
      </div>
        <div div className="GreM"> 
          <Button id="head" style={{marginLeft:"3.5rem"}}>
              Tank Hunters
             </Button>
             <div className="card">
                <h5>Maus</h5>
                <img src={require("./GreH/1200px-ArtImage_Maus.png")} />
                <h6>German cold war era mbt</h6>
                <p>The Leopard 1A5, being a further development of the Leopard A1A1, does not differ much from its predecessor in terms of armour. The Leopard 1A5 prioritizes firepower and mobility over the survivability of the tank.
                  The armour in the frontal arc is reliable against many of the autocannons found on IFVs at the rank, but occasional rounds can penetrate the turret ring. Side armour can be reliably penetrated by autocannon fire, thus it is vital to keep the front of the armour towards the enemy.
                   </p>
              </div>
              <div className="card">
                <h5>Maus</h5>
                <img src={require("./GreH/1200px-ArtImage_Maus.png")} />
                <h6>German cold war era mbt</h6>
                <p>The Leopard 1A5, being a further development of the Leopard A1A1, does not differ much from its predecessor in terms of armour. The Leopard 1A5 prioritizes firepower and mobility over the survivability of the tank.
                  The armour in the frontal arc is reliable against many of the autocannons found on IFVs at the rank, but occasional rounds can penetrate the turret ring. Side armour can be reliably penetrated by autocannon fire, thus it is vital to keep the front of the armour towards the enemy.
                   </p>
              </div>
              <div className="card">
                <h5>Maus</h5>
                <img src={require("./GreH/1200px-ArtImage_Maus.png")} />
                <h6>German cold war era mbt</h6>
                <p>The Leopard 1A5, being a further development of the Leopard A1A1, does not differ much from its predecessor in terms of armour. The Leopard 1A5 prioritizes firepower and mobility over the survivability of the tank.
                  The armour in the frontal arc is reliable against many of the autocannons found on IFVs at the rank, but occasional rounds can penetrate the turret ring. Side armour can be reliably penetrated by autocannon fire, thus it is vital to keep the front of the armour towards the enemy.
                   </p>
              </div>
              <div className="card">
                <h5>Maus</h5>
                <img src={require("./GreH/1200px-ArtImage_Maus.png")} />
                <h6>German cold war era mbt</h6>
                <p>The Leopard 1A5, being a further development of the Leopard A1A1, does not differ much from its predecessor in terms of armour. The Leopard 1A5 prioritizes firepower and mobility over the survivability of the tank.
                  The armour in the frontal arc is reliable against many of the autocannons found on IFVs at the rank, but occasional rounds can penetrate the turret ring. Side armour can be reliably penetrated by autocannon fire, thus it is vital to keep the front of the armour towards the enemy.
                   </p>
              </div>
      </div>
      </div>
                   </>
    
        )
    }
}
export default GRE