import React from 'react'
import './loading.css'

const LoadingSkeleton = ({className = ''}) => {
  return (
    <div className={`loading ${className}`}></div>
  )
}

export default LoadingSkeleton