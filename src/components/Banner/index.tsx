import React from 'react'
import './Banner.css'

interface BannerProps {
  altText?: string
  urlImage: string
}

const Banner = ( { altText, urlImage }: BannerProps ) => {
  return (
    <header className='banner'>
        <img  src={urlImage} alt={altText} />
    </header>
  )
}

export default Banner