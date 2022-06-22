import React, { Component } from 'react'
import '../Styles/navbar.css'

export default class NavigationBar extends Component {
  render() {
    return (
        <header className='Navheader'>
        <nav class="navbar navbar-expand-lg navbar-light fixed-top mask-custom shadow-0">
          <div class="container">
            <a class="navbar-brand" href="#!"><span id='logo'>MedSavvy</span></a>
            <button class="navbar-toggler" type="button" data-mdb-toggle="collapse"
              data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
              aria-label="Toggle navigation">
              <i class="fas fa-bars"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto">
                <li class="nav-item">
                  <a class="nav-link" href="/">Login</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#!">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    
      </header>
    )
  }
}
