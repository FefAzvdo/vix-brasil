import React, {useState, useEffect} from 'react';
import "./navbar.css"

const logoVix = require('../../assets/logo_vix.png')
const logoSofia = require('../../assets/logo_sofia.png')
const bagIcon = require('../../assets/bag-icon.png')
const hamburgerMenu = require('../../assets/hamburger-menu.png')

const Navbar = () => {
  const [marginTop, setMarginTop] = useState(0)

  const innerWidth = window.innerWidth

  useEffect(() => {
    const resizeFunc = () => {
        if(window.innerWidth > 750){
          setMarginTop(0)
        }
    }

    window.addEventListener('resize', resizeFunc)

    return () => {
      window.removeEventListener('resize', resizeFunc)
    }

  }, [innerWidth])

  const handleToggleDisplay = () => {
    if(marginTop === -500){
      setMarginTop(0)
    }
    else{
      setMarginTop(-500)
    }
  }


  return(
    <div style={{border: marginTop === -500 ? 'none' : '1px solid #ccc'}}>
      <div className="only_show_on_mobile">
        <button onClick={handleToggleDisplay}>
          <img src={hamburgerMenu} alt="Ícone de menu hamburgeer" style={{width: 20}}/>
        </button>
      </div>

      <div className="navbar_main_wrapper" style={{marginTop: marginTop, transition: "all 500ms ease"}}>
        <div className="navbar_left_part" >
          <div className="navbar_left_part_info navbar_active_brand">
              <img src={logoVix} alt="Logo da Vix"/>
          </div>
          <div className="navbar_left_part_info">
            <img src={logoSofia} alt="Logo da Vix"/>
          </div>
        </div>
        <div className="navbar_right_part">
            <ul>
              <li>SOBRE A MARCA</li>
              <li>CONTATO</li>
              <li>ONDE COMPRAR</li>
              <li>MINHA CONTA</li>
            </ul>
            <div className="navbar_bag_icon_mobile">
              <img src={bagIcon} alt="Ícone de uma sacola"/>
            </div>
        </div>
      </div>


    </div>
  )
}

export default Navbar