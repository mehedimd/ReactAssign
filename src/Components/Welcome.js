import React from 'react'
import image from '../images/hero-img.svg'

export default function Welcome() {
  return (
    <div className='bg-success text-white py-5'>
    <div className='d-flex align-items-center container '>
        <div>
            <h1>Welcome to Impact</h1>
            <br/>
            <p>Sed autem laudantium dolores. Voluptatem itaque ea consequatur eveniet. Eum quas beatae cumque eum quaerat.</p>
            <a href='#' className='btn btn-outline-light'> Get Started </a>
        </div>
        <div>
        <img src={image} alt="Girl in a jacket" />
        </div>
    </div>
    </div>
  )
}
