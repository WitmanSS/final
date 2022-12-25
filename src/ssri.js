import React ,{Component}from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Nav, Navbar,NavDropdown, NavItem, NavLink } from "react-bootstrap";
import "./Gre.css"

class SSRI extends Component{
  state ={
    displM: 'none',
    displH: "none",
    displTH:'none',
    submitM: true,
    submitH: true,
    submitTH: true
  }
  clickHandlerM = () => {
         if(this.state.submitM){
           this.setState({ displM: "card", submitM: false });}
           else if(!this.state.submitM) {
            this.setState({ displM: "none", submitM: true })
           }
   
  };
  clickHandlerH = () => {
    if(this.state.submitH){
      this.setState({ displH: "card", submitH: false });}
      else if(!this.state.submitH) {
       this.setState({ displH: "none", submitH: true })
      }
  };
 
  clickHandlerTH = () => {
    if(this.state.submitTH){
      this.setState({ displTH: "card", submitTH: false });}
      else if(!this.state.submitTH) {
       this.setState({ displTH: "none", submitTH: true })
      }
  };
 
 
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
<h1 style={{color:"darkred"}} >SSRI</h1>
</div>
  <div  className="main">
  <div className="GreM"> 
        <Button  onClick={this.clickHandlerM} id="head" style={{marginLeft:"3.5rem"}}>
       Medium Tanks
        </Button>
        <div className={this.state.displM}>
          <h5>T-34-85(D-5T)</h5>
          <img src={require("./SSRIM/1200px-ArtImage_T-34-85_(D-5T).png")} />
          <h6>German cold war era mbt</h6>
          <p>The Leopard 1A5, being a further development of the Leopard A1A1, does not differ much from its predecessor in terms of armour. The Leopard 1A5 prioritizes firepower and mobility over the survivability of the tank.
            The armour in the frontal arc is reliable against many of the autocannons found on IFVs at the rank, but occasional rounds can penetrate the turret ring. Side armour can be reliably penetrated by autocannon fire, thus it is vital to keep the front of the armour towards the enemy.
             </p>
        </div>
        <div className={this.state.displM}>
          <h5>T-44-100</h5>
          <img src={require("./SSRIM/1200px-ArtImage_T-44-100.png")} />
          <h6>German cold war era mbt</h6>
          <p>The Leopard 1A5, being a further development of the Leopard A1A1, does not differ much from its predecessor in terms of armour. The Leopard 1A5 prioritizes firepower and mobility over the survivability of the tank.
            The armour in the frontal arc is reliable against many of the autocannons found on IFVs at the rank, but occasional rounds can penetrate the turret ring. Side armour can be reliably penetrated by autocannon fire, thus it is vital to keep the front of the armour towards the enemy.
             </p>
        </div>   
         <div className={this.state.displM}>
          <h5>T-55A</h5>
          <img src={require("./SSRIM/1200px-ArtImage_T-55A.png")} />
          <h6>German cold war era mbt</h6>
          <p>The Leopard 1A5, being a further development of the Leopard A1A1, does not differ much from its predecessor in terms of armour. The Leopard 1A5 prioritizes firepower and mobility over the survivability of the tank.
            The armour in the frontal arc is reliable against many of the autocannons found on IFVs at the rank, but occasional rounds can penetrate the turret ring. Side armour can be reliably penetrated by autocannon fire, thus it is vital to keep the front of the armour towards the enemy.
             </p>
        </div>
        <div className={this.state.displM}>
          <h5>T-80U</h5>
          <img src={require("./SSRIM/1200px-T-80U_WebsiteImage_2.jpg")} />
          <h6>German cold war era mbt</h6>
          <p>The Leopard 1A5, being a further development of the Leopard A1A1, does not differ much from its predecessor in terms of armour. The Leopard 1A5 prioritizes firepower and mobility over the survivability of the tank.
            The armour in the frontal arc is reliable against many of the autocannons found on IFVs at the rank, but occasional rounds can penetrate the turret ring. Side armour can be reliably penetrated by autocannon fire, thus it is vital to keep the front of the armour towards the enemy.
             </p>
        </div>
    
</div>
  <div className="GreM">
     <Button onClick={this.clickHandlerH} id="head" style={{marginLeft:"3.5rem"}}>
       Heavy Tanks
        </Button>
        <div className={this.state.displH}>
          <h5>KV-1S</h5>
          <img src={require("./SSRIH/1200px-ArtImage_KV-1S.png")} />
          <h6>German cold war era mbt</h6>
          <p>The Leopard 1A5, being a further development of the Leopard A1A1, does not differ much from its predecessor in terms of armour. The Leopard 1A5 prioritizes firepower and mobility over the survivability of the tank.
            The armour in the frontal arc is reliable against many of the autocannons found on IFVs at the rank, but occasional rounds can penetrate the turret ring. Side armour can be reliably penetrated by autocannon fire, thus it is vital to keep the front of the armour towards the enemy.
             </p>
        </div>
        <div className={this.state.displH}>
          <h5>IS-2(1944)</h5>
          <img src={require("./SSRIH/1200px-ArtImage2_IS-2_(1944).png")} />
          <h6>German cold war era mbt</h6>
          <p>The Leopard 1A5, being a further development of the Leopard A1A1, does not differ much from its predecessor in terms of armour. The Leopard 1A5 prioritizes firepower and mobility over the survivability of the tank.
            The armour in the frontal arc is reliable against many of the autocannons found on IFVs at the rank, but occasional rounds can penetrate the turret ring. Side armour can be reliably penetrated by autocannon fire, thus it is vital to keep the front of the armour towards the enemy.
             </p>
        </div>
        <div className={this.state.displH}>
          <h5>IS-4M</h5>
          <img src={require("./SSRIH/1200px-ArtImage_IS-4M.png")} />
          <h6>German cold war era mbt</h6>
          <p>The Leopard 1A5, being a further development of the Leopard A1A1, does not differ much from its predecessor in terms of armour. The Leopard 1A5 prioritizes firepower and mobility over the survivability of the tank.
            The armour in the frontal arc is reliable against many of the autocannons found on IFVs at the rank, but occasional rounds can penetrate the turret ring. Side armour can be reliably penetrated by autocannon fire, thus it is vital to keep the front of the armour towards the enemy.
             </p>
        </div>
        <div className={this.state.displH}>
          <h5>T-10M</h5>
          <img src={require("./SSRIH/1200px-ArtImage_T-10M.png")} />
          <h6>German cold war era mbt</h6>
          <p>The Leopard 1A5, being a further development of the Leopard A1A1, does not differ much from its predecessor in terms of armour. The Leopard 1A5 prioritizes firepower and mobility over the survivability of the tank.
            The armour in the frontal arc is reliable against many of the autocannons found on IFVs at the rank, but occasional rounds can penetrate the turret ring. Side armour can be reliably penetrated by autocannon fire, thus it is vital to keep the front of the armour towards the enemy.
             </p>
        </div>
</div>
  <div div className="GreM"> 
    <Button onClick={this.clickHandlerTH} id="head" style={{marginLeft:"3.5rem"}}>
        Tank Hunters
       </Button>
       <div className={this.state.displTH}>
          <h5>SU-122</h5>
          <img src={require("./SSRITH/1200px-ArtImage_SU-122.png")} />
          <h6>German cold war era mbt</h6>
          <p>The Leopard 1A5, being a further development of the Leopard A1A1, does not differ much from its predecessor in terms of armour. The Leopard 1A5 prioritizes firepower and mobility over the survivability of the tank.
            The armour in the frontal arc is reliable against many of the autocannons found on IFVs at the rank, but occasional rounds can penetrate the turret ring. Side armour can be reliably penetrated by autocannon fire, thus it is vital to keep the front of the armour towards the enemy.
             </p>
        </div>
        <div className={this.state.displTH}>
          <h5>ISU-122</h5>
          <img src={require("./SSRITH/1200px-ArtImage_ISU-122.png")} />
          <h6>German cold war era mbt</h6>
          <p>The Leopard 1A5, being a further development of the Leopard A1A1, does not differ much from its predecessor in terms of armour. The Leopard 1A5 prioritizes firepower and mobility over the survivability of the tank.
            The armour in the frontal arc is reliable against many of the autocannons found on IFVs at the rank, but occasional rounds can penetrate the turret ring. Side armour can be reliably penetrated by autocannon fire, thus it is vital to keep the front of the armour towards the enemy.
             </p>
        </div>
        <div className={this.state.displTH}>
          <h5>ISU-125</h5>
          <img src={require("./SSRITH/1200px-ArtImage_ISU-152.png")} />
          <h6>German cold war era mbt</h6>
          <p>The Leopard 1A5, being a further development of the Leopard A1A1, does not differ much from its predecessor in terms of armour. The Leopard 1A5 prioritizes firepower and mobility over the survivability of the tank.
            The armour in the frontal arc is reliable against many of the autocannons found on IFVs at the rank, but occasional rounds can penetrate the turret ring. Side armour can be reliably penetrated by autocannon fire, thus it is vital to keep the front of the armour towards the enemy.
             </p>
        </div>
        <div className={this.state.displTH}>
          <h5>BMP-3</h5>
          <img src={require("./SSRITH/1200px-ArtImage_BMP-3.png")} />
          <h6>German cold war era mbt</h6>
          <p>The Leopard 1A5, being a further development of the Leopard A1A1, does not differ much from its predecessor in terms of armour. The Leopard 1A5 prioritizes firepower and mobility over the survivability of the tank.
            The armour in the frontal arc is reliable against many of the autocannons found on IFVs at the rank, but occasional rounds can penetrate the turret ring. Side armour can be reliably penetrated by autocannon fire, thus it is vital to keep the front of the armour towards the enemy.
             </p>
        </div>
</div>
</div>
             </body>

             </>
    
        )
    }
}
export default SSRI