import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import SocialWidget from '../Widget/SocialWidget';
import Newsletter from '../Widget/Newsletter';
import './header.scss';
import ContactInfoWidget from '../Widget/ContactInfoWidget';
import getApiConfigs from '../../apiConfig';
import Div from '../Div';

export default function Header({ variant }) {
  const [isSticky, setIsSticky] = useState(false);
  const [sideHeaderToggle, setSideHeaderToggle] = useState(false);
  const [mobileToggle, setMobileToggle] = useState(false);
  const [apiConfigs, setApiConfigs] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const configs = await getApiConfigs();
      setApiConfigs(configs);
    };

    fetchData();
    window.addEventListener('scroll', () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    });
  }, []);
  let header = []
  const Logo = apiConfigs.logo
  header = apiConfigs.header
  const contato = apiConfigs.contato

  return (
    <>
      {contato ? (
        <>
        <header
          className={`cs-site_header cs-style1 text-uppercase ${variant ? variant : ''
            } cs-sticky_header ${isSticky ? 'cs-sticky_header_active' : ''}`}
        >
          <Div className="cs-main_header">
            <Div className="container">
              <Div className="cs-main_header_in">
                <Div className="cs-main_header_left">
                  <Link className="cs-site_branding" to="/">
                    <img src={Logo} alt="Logo" />
                  </Link>
                </Div>
                <Div className="cs-main_header_center">
                  <Div className="cs-nav cs-primary_font cs-medium">
                    {header && header.length > 0 ? (
                      <ul className="cs-nav_list" style={{ display: `${mobileToggle ? 'block' : 'none'}` }}>
                        {header.map((item, index) => (
                          <li key={index} data={item.title} >
                            <NavLink to={item.url} onClick={() => setMobileToggle(false)}>
                              {item.title}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <ul className="cs-nav_list" style={{ display: `${mobileToggle ? 'block' : 'none'}` }}>
                        <li>
                          <NavLink to="/" onClick={() => setMobileToggle(false)}>
                            Home
                          </NavLink>
                        </li>
                      </ul>
                    )}
  
  
  
                    <span
                      className={
                        mobileToggle
                          ? 'cs-munu_toggle cs-toggle_active'
                          : 'cs-munu_toggle'
                      }
                      onClick={() => setMobileToggle(!mobileToggle)}
                    >
                      <span></span>
                    </span>
                  </Div>
                </Div>
                <Div className="cs-main_header_right">
                  <Div className="cs-toolbox">
                    <span
                      className="cs-icon_btn"
                      onClick={() => setSideHeaderToggle(!sideHeaderToggle)}
                    >
                      <span className="cs-icon_btn_in">
                        <span />
                        <span />
                        <span />
                        <span />
                      </span>
                    </span>
                  </Div>
                </Div>
              </Div>
            </Div>
          </Div>
        </header>
  
        <Div
          className={
            sideHeaderToggle ? 'cs-side_header active' : 'cs-side_header'
          }
        >
          <button
            className="cs-close"
            onClick={() => setSideHeaderToggle(!sideHeaderToggle)}
          />
          <Div
            className="cs-side_header_overlay"
            onClick={() => setSideHeaderToggle(!sideHeaderToggle)}
          />
          <Div className="cs-side_header_in">
            <Div className="cs-side_header_shape" />
            <Link className="cs-site_branding" to="/">
              <img src={Logo} alt="Logo" />
            </Link>
            <Div className="cs-side_header_box">
              <h2 className="cs-side_header_heading">
                Tem um projeto em  <br /> mente? Fale com a gente.
              </h2>
            </Div>
            <Div className="cs-side_header_box">
              <ContactInfoWidget 
                title='Fale Conosco'
                phone={contato.contato.telefone}
                address={contato.contato.endereco}
                mail={contato.contato.email}
                withIcon
              />
            </Div>
            <Div className="cs-side_header_box">
              <Newsletter
                title="Inscreva-se"
                subtitle="Se inscreva para saber mais."
                placeholder="paodequeijo@gmail.com"
              />
            </Div>
            <Div className="cs-side_header_box">
              <SocialWidget />
            </Div>
          </Div>
        </Div>
      </>
     ) : (
       <div></div>
     )}
    </>
  )

}
