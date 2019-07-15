import React, { Component } from 'react'
import Logo from './../media/Logo.jpg'

import './index.css'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
} from 'react-router-dom'


import Home from './pages/'
import About from './pages/About'
import Error404 from './pages/Error404'
import Tienda from './Tienda'
import { Container, Navbar } from 'react-bootstrap'

class App extends Component {


    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll)
    }

    handleScroll = () => {
        let i
        const navbar = document.getElementById('navbar')
        const navbotons = document.getElementsByClassName('nav-link')       
         if (window.scrollY > 56){
            navbar.classList.add('NavBarWBg')
            navbar.classList.remove('NavBarWOBg')
            for (i=0; i<navbotons.length;i++){
                navbotons[i].classList.add('NavBotonWScroll')
            }
         } else {
            navbar.classList.remove('NavBarWBg')
            navbar.classList.add('NavBarWOBg')
            for (i=0; i<navbotons.length;i++){
                navbotons[i].classList.remove('NavBotonWScroll')
            }            
         }
       
    }


    render(){
        return(
            
            <Router>
                <Container fluid className="Container">
                <div> 
                    <Navbar id="navbar" className="NavBarWOBg" fixed="top" style={{ display:'flex',justifyContent: 'space-between'}}>
                        <span className="Menu-logo"><Navbar.Brand > <Link to="/" > <img className="Logo" src={Logo} alt=""/> </Link> </Navbar.Brand></span>
                        <span className="Menu-links">
                            <Link className="nav-link" to="/tienda" > Productos </Link>
                            <Link className="nav-link" to="/acerca" > Sobre Nosotros </Link>
                            <a className="nav-link instagram" href="https://www.instagram.com/casa_maywa" target="_blank" rel="noopener noreferrer"><i className="icon-instagram"></i></a>
                        </span>                        
                    </Navbar>

                    <main className="Main">
                        <Switch>
                            <Route path='/' exact component={Home} />
                            <Route path='/acerca' exact component={About} />
                            <Route path='/tienda' exact component={Tienda}/>
                            <Route component={Error404}/>
                            
                        </Switch>
                    </main>
                    
                </div>
                </Container>
            </Router>
          
        )
    }
}

export default App