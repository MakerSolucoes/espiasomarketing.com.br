import React, { useState, useEffect, memo } from 'react'
import Div from '../Div'
import './logolist.scss'

const MemoizedPartnerLogo = memo(({ partnerLogo }) => (
  <div className="cs-partner_logo">
    <img src={partnerLogo} alt="Parceiro" />
  </div>
))

const LogoList = ({ partnerLogos }) => {
  const [currentItemIndex, setCurrentItemIndex] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentItemIndex((currentItemIndex + 1) % partnerLogos.length)
    }, 1500)
    return () => clearInterval(intervalId)
  }, [currentItemIndex, partnerLogos.length])

  const getPartnerLogosToShow = () => {
    const lastIndex = partnerLogos.length - 1
    const prevIndex = currentItemIndex === 0 ? lastIndex : currentItemIndex - 1
    const nextIndex = currentItemIndex === lastIndex ? 0 : currentItemIndex + 1
    return [partnerLogos[prevIndex], partnerLogos[currentItemIndex], partnerLogos[nextIndex]]
  }

  return (
    <Div className="cs-partner_logo_wrap">
      {getPartnerLogosToShow().map((partnerLogo, index) => (
        <MemoizedPartnerLogo key={index} partnerLogo={partnerLogo} />
      ))}
    </Div>
  )
}

export default LogoList
