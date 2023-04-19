import React, { useEffect, useState } from 'react';
import Div from '../Div'
import ContactInfoWidget from '../Widget/ContactInfoWidget'
import MenuWidget from '../Widget/MenuWidget'
import Newsletter from '../Widget/Newsletter'
import SocialWidget from '../Widget/SocialWidget'
import TextWidget from '../Widget/TextWidget'
import getApiConfigs from '../../apiConfig';

import './footer.scss'

export default function Footer({copyrightText, logoSrc, logoAlt, text}) {
  
  const [apiConfigs, setApiConfigs] = useState({});
  const currentYear = new Date().getFullYear();
  useEffect(() => {
    const fetchData = async () => {
      const configs = await getApiConfigs();
      setApiConfigs(configs);
    };

    fetchData();
    }, []);

    const Logo = apiConfigs.logo
    let contato = apiConfigs.contato
    const copyrightLinks = [
      {
        title: 'Termos de Uso',
        href: '/'
      },
      {
        title: 'Política de privacidade',
        href: '/'
      }
    ]
  return (
    <>
      {Logo ? (
        <footer className="cs-fooer">
          <Div className="cs-fooer_main">
            <Div className="container">
              <Div className="row">
                <Div className="col-lg-4 col-sm-6">
                  <Div className="cs-footer_item">
                    <TextWidget 
                      logoSrc={Logo}
                      logoAlt='Logo'
                      text ={apiConfigs.site_general.description}
                    />
                    <SocialWidget/>
                  </Div>
                </Div>
                <Div className="col-lg-4 col-sm-6">
                  <Div className="cs-footer_item">
                    <ContactInfoWidget 
                      title='Fale Conosco'
                      phone={contato.contato.telefone}
                      address={contato.contato.endereco}
                      mail={contato.contato.email}
                    />
                  </Div>
                </Div>
                <Div className="col-lg-4 col-sm-6">
                  <Div className="cs-footer_item">
                    <Newsletter 
                      title='Inscreva-se' 
                      subtitle='Fale com a gente sobre suas ideias e projetos.' 
                      placeholder='example@gmail.com'
                    />
                  </Div>
                </Div>
              </Div>
            </Div>
          </Div>
          <Div className="container">
            <Div className="cs-bottom_footer">
              <Div className="cs-bottom_footer_left">
                <Div className="cs-copyright">Copyright © {currentYear} Espia Só.</Div>
              </Div>
              <Div className="cs-bottom_footer_right">
                <MenuWidget menuItems={copyrightLinks} variant=' cs-style2'/>
              </Div>
            </Div>
          </Div>
        </footer>
     ) : (
       <div></div>
     )}
    </>
  )
}
