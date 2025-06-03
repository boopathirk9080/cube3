import React from 'react'
import GalleryHead from './GalleryHead'
import Gallery from './Gallary'

function GalleryAll() {
  return (
    <div id='gallery' className='bg-[#fdeced]' >
        <GalleryHead/>
        <Gallery/>
    </div>
  )
}

export default GalleryAll