import React ,{Component}from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

class tanks extends Component{
    render(){
        <div id="flex">
        <div class="dropdown ">
          <a class="btn btn-secondary dropdown-toggle bg-primary " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            USA
          </a>
        
          <ul class="dropdown-menu">
            <li><a class="dropdown-item " href="./usamain.html">Main Tanks</a></li>
            <li><a class="dropdown-item " href="#">Tanks  Hunters</a></li>
            <li><a class="dropdown-item " href="#">Medium tanks</a></li>
          </ul>
        </div>
        <div class="dropdown">
          <a class="btn btn-secondary dropdown-toggle bg-dark" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Germany
          </a>
        
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Main Tanks</a></li>
            <li><a class="dropdown-item" href="#">Tanks  Hunters</a></li>
            <li><a class="dropdown-item" href="#">Medium tanks</a></li>
          </ul>
        </div>
        <div class="dropdown">
          <a class="btn btn-secondary dropdown-toggle bg-danger" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            SSRI
          </a>
        
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Main Tanks</a></li>
            <li><a class="dropdown-item" href="#">Tanks  Hunters</a></li>
            <li><a class="dropdown-item" href="#">Medium tanks</a></li>
          </ul>
        </div>
       
      </div>
    }
}