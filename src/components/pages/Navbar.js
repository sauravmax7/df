import React from 'react';
import './Navbar.css';

  export const Navbar=()=>{
      return(
        <nav class="navbar navbar-findcond navbar-fixed-top">
        <div class="container">
           
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                
            <div class="collapse navbar-collapse" id="navbar">
                <ul class="nav navbar-nav navbar-right">
                    <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Category</a>
                        <ul class="dropdown-menu" role="menu">
                            <li><a href="#">Social</a></li>
                            <li><a href="#">Science/Technology</a></li>
                            <li><a href="#">Sports</a></li>
                            <li><a href="#">Business</a></li>
                            <li><a href="#">Wellbeing/Lifestyle</a></li>
                           
                        </ul>
                    </li>
                    <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">City</a>
                        <ul class="dropdown-menu" role="menu">
                            <li><a href="#">Mumbai</a></li>
                            <li><a href="#">Kolkata</a></li>
                            <li><a href="#">Delhi</a></li>
                            <li><a href="#">Hyderabad</a></li>
                            <li><a href="#">Pune</a></li>
                            <li><a href="#">Raipur</a></li>
                            <li><a href="#exit">Nagpur</a></li>

                        </ul>
                    </li>
                    <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">States</a>
                        <ul class="dropdown-menu" role="menu">
                            <li><a href="#">Maharashtra</a></li>
                            <li><a href="#">Chittisgarh</a></li>
                            <li><a href="#">West-Bengal</a></li>
                            <li><a href="#">Gujarat</a></li>
                            <li><a href="#">Kerala</a></li>
                           

                        </ul>
                    </li>
                </ul>
                {/* <div class="row input-group" id="custom-search-input">
                                <input type="text" class="  search-query form-control" placeholder="Search" />
                                <span class="input-group-btn">
                                    <button class="btn btn-danger" type="button">
                                        <span class=" glyphicon glyphicon-search"></span>
                                    </button>
                                </span>
                            </div> */}

                            
                <form class="navbar-form navbar-right search-form" role="search">
                    <input type="text" class="search-query form-control" placeholder="Search" />
{/*                     
                                    <button class="btn btn-danger" type="button">
                                        <span class=" glyphicon glyphicon-search"></span>
                                    </button> */}
                       
                    
                </form>
            </div>
        </div>
    </nav>
       

      )
  }