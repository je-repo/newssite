import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { NavLink } from 'react-router-dom';

import Logo from '../assets/images/megaphone.png';

import './Navbar.css';


// navbar with links, logo and responsive hamburger menu

function Navbar() {

  const [homePageData, setHomePageData] = useState([]);
  const [navbarDisplay, setNavbarDisplay] = useState(true);

  // responsive hamburger menu button logic (appears on smaller screen)
  const isSmallerScreen = useMediaQuery({
    query: "(max-width: 866px)",
  });

  const navbarDisplayStyle = {
    display: navbarDisplay ? "flex" : "none"
  };

  // useEffect to avoid infinite rendering, when conditionally setting navbarDisplay value
  useEffect(() => {
    // set navbarDisplay value, based on screen size, to show / hide navbar links
    isSmallerScreen ? setNavbarDisplay(false) : setNavbarDisplay(true)

  },[isSmallerScreen]);

  // fetch data for category names
  useEffect(() => {

    const fetchData = async () => {
      try {

        const response = await fetch(
          `http://127.0.0.1:8000/`
        );

        let data = await response.json();

        setHomePageData(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();

  }, []);

  // list for category links
  // manually creating home link, as it is not in categories
  let listItems = [
                    <li key="home" className="nav-link">
                      <NavLink to="/" className="">Home</NavLink>
                    </li>
                  ];

  // using keys from homepage data to render category links
  for (const prop in homePageData) {
    const lowerCaseProp = prop.toLowerCase().replaceAll(" ", "-");
    listItems.push( <li key={lowerCaseProp} className="nav-link">
                      <NavLink to={lowerCaseProp} className="">{prop}</NavLink>
                    </li>
      );
  }


  return (
    <div className='navbar-wrapper'>
      <div class="navbar-top-wrapper">
        <img src={Logo} alt='website-logo' className='logo'></img>
        <button className="mobile-menu-button" onClick={() => setNavbarDisplay(!navbarDisplay)}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>
      <nav className="navbar" >

        <ul className="nav-links" style={navbarDisplayStyle}>
          {listItems}
        </ul>
      </nav>

    </div>    
  );
}


export default Navbar;


