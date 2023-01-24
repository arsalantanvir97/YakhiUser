import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

const ImageLazyLoad = ({ src, classname, onClick }) => {
  return (
    <LazyLoadImage
      onClick={onClick}
      visibleByDefault={true}
      wrapperClassName={classname}
      src={src}
      alt=''
      className={classname}
      effect='blur'
    />
  )
}

export default ImageLazyLoad
