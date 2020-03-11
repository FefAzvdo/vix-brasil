import React, {useState, useEffect} from 'react';
import './fixed-header.css';
import { FaSearch, FaBan } from "react-icons/fa";
 

const FixedHeader = () => {
  const headerTitle = ['ELLA BRAND', 'NOVIDADES', 'PREVIEW INVERNO 20', 'COLEÇÕES', 'BIQUÍNIS', 'MAIÔS', 'ROUPAS', 'ACESSÓRIOS', 'SALE'];

  const [opacity, setOpacity] = useState(1);
  const [marginRight, setMarginRight] = useState("-400%");
  const [display, setDisplay] = useState('flex')
  const [inputValue, setInputValue] = useState('')
  const [headerMarginTop, setHeaderMarginTop] = useState(null)
  const [headerTop, setHeaderTop] = useState(null)
  const [isBtnVisible, setIsBtnVisible] = useState("flex")

  const toggleForm = (e) => {
    e.preventDefault();

    if(opacity === 1){
      setOpacity(0);
      setMarginRight(0);
      setDisplay('none');
    }
    else{
      setMarginRight("-400%");
      setDisplay('flex');
      setOpacity(1);
    }
  }

  useEffect(() => {
    const resizeFunc = () => {
      if(window.scrollY > 80){
        setHeaderMarginTop(0)
        setHeaderTop(0)
        setIsBtnVisible("none")
      }
      else{
        setHeaderMarginTop(30)
        setHeaderTop(null)
        setIsBtnVisible("flex")
      }
  }

  window.addEventListener('scroll', resizeFunc)

  return () => {
    window.removeEventListener('scroll', resizeFunc)
  }
  })

  return(
    <div className="fixed_header_main_wrapper">
      <div 
       className="fixed_header_left_info"
       style={{opacity: opacity, display: display, top: headerTop, marginTop: headerMarginTop}}>

        {headerTitle.map(title => (
          <div className="fixed_header_innner_div" key={title}>{title}</div>
        ))}

        <div style={{display: "flex", justifyContent: "center"}}>
          <button style={{opacity: opacity, transition: "all .5s", display: isBtnVisible, cursor: "pointer"}} onClick={toggleForm}>
            <FaSearch/>
          </button>
        </div>
      </div>
      <div className="fixed_header_right_info" >
        <form style={{marginRight: marginRight, marginBottom: 15,}} className="fixed_header_form">
          <input 
            type="text"
            placeholder="Pesquise toda a loja aqui..."
            className="fixed_header_input"
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
          />
          <button className="fixed_header_button" onClick={(e) => e.preventDefault()}>
            <FaSearch/>
          </button>
          <button className="fixed_header_button not_show_on_mobile" onClick={(e) => toggleForm(e)} style={{marginLeft: 10}}>
            <FaBan/>
          </button>
        </form>
      </div>
    </div>
  )
}

export default FixedHeader;