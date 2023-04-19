import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react';
import Div from '../Div';
import getApiConfigs from '../../apiConfig';

export default function SocialWidget() {
  const [apiConfigs, setApiConfigs] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      const configs = await getApiConfigs();
      setApiConfigs(configs);
    };

    fetchData();
    }, []);
  
    const Social = apiConfigs.social
    return (
      <>
        {Social ? (
          <Div className="cs-social_btns cs-style1">
          {Social.map((link, index) => (
            <Link title={link.name} key={index} to={link.link} className="cs-center">
              {link.icon && <Icon icon={'fa6-brands:'+link.icon.id} />}
            </Link>
          ))}
        </Div>
       ) : (
         <div></div>
       )}
      </>
    )

}
