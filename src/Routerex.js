import React from 'react';
import { BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import Cardwrapper from './Cardwrapper';

function Home(){
    return(
        <div className='cards'>
            <Cardwrapper/>
        </div>
    )
}
function About(){
    return( <div>
         <h2>About page</h2>
    <p>my name is john ,i am student</p>
    </div>
    );
}
function Contact(){
    return( <div>
         <h2>Contact page</h2>
         <p>email=<a
         href="soumya@gmail.com">soumya@gmail.com</a></p>
         <p>mobile:<a href="tel:+9876543210">+9876543210</a></p>
         </div>
    );
}
function Routerex(){
    return(
        <Router>
            <nav>
                <Link to="/">Home</Link>|
                <Link to="/about">About</Link>|
                <Link to="/contact">Contact</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/contact" element={<Contact/>}/>
            </Routes>
        </Router>
    );
}
export default Routerex;