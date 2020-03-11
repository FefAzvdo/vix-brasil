import React, {useState, useEffect, Fragment} from 'react';
import "./navbar.css"

const logoVix = require('../../assets/logo_vix.png')
const logoSofia = require('../../assets/logo_sofia.png')
const bagIcon = require('../../assets/bag-icon.png')
const hamburgerMenu = require('../../assets/hamburger-menu.png')

const Navbar = () => {
  const [marginLeft, setMarginLeft] = useState(0);
  const [display, setDisplay] = useState('flex')

  const innerWidth = window.innerWidth

  useEffect(() => {
    const resizeFunc = () => {
        if(window.innerWidth > 750){
          setMarginLeft(0);
          setDisplay("flex")
        }
    }

    window.addEventListener('resize', resizeFunc)

    return () => {
      window.removeEventListener('resize', resizeFunc)
    }

  }, [innerWidth])

  const handleToggleDisplay = () => {
    if(marginLeft === "-150%"){
      setMarginLeft(0)
      setDisplay("flex")
    }
    else{
      setMarginLeft("-150%")
      setDisplay("none")
    }
  }


  return(
    <div style={{border: marginLeft === "-150%" ? 'none' : '1px solid #ccc'}}>
      <div className="only_show_on_mobile">
        <button onClick={handleToggleDisplay}>
          <img src={hamburgerMenu} alt="Ícone de menu hamburgeer" style={{width: 20}}/>
        </button>
      </div>

      <div className="navbar_main_wrapper" style={{marginLeft: marginLeft, transition: "all .5s ease"}}>
        <div className="navbar_left_part" style={{display: display}}>
          <div className="navbar_left_part_info navbar_active_brand">
              <img src={logoVix} alt="Logo da Vix"/>
          </div>
          <div className="navbar_left_part_info">
            <img src={logoSofia} alt="Logo da Vix"/>
          </div>
        </div>
        <div className="navbar_right_part" style={{display: display}}>
            <ul>
              <li>SOBRE A MARCA</li>
              <li>CONTATO</li>
              <li>ONDE COMPRAR</li>
              <li>MINHA CONTA</li>
              {
                innerWidth <= 750 &&
                <Fragment>
                  <li>ELLA BRAND</li>
                  <li>NOVIDADES</li>
                  <li>PREVIEW INVERNO 20</li>
                  <li>COLEÇÕES</li>
                  <li>BIQUÍNIS</li>
                  <li>MAIÔS</li>
                  <li>ROUPAS</li>
                  <li>ACESSÓRIOS</li>
                  <li>SALE</li>
                </Fragment>
              }
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