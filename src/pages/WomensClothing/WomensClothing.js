import './WomensClothing.css'

import React, { useEffect, useState } from 'react'

import ProductCart from '../../components/ProductCart/ProductCart'

const WomensClothing = () => {
  const [products, setProducts] = useState([])
  const [error, setError] = useState()

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/women's clothing")
      .then(res => res.json())
      .then(data => {
        setProducts(data)
        setError()
      }).catch(err => setError(err))
  }, [])
  return (
    <div className='container mt-3'>
      {error && <h2 className='mt-3'>No Products To Show</h2>}
      <div className='row'>
        {products.length === 0 ? (<div className="d-flex justify-content-center align-items-center mt-5">
          <div className="spinner-border text-secondary" role="status">
            <span className='visually-hidden'>Loading...</span>
          </div>
          <p className='loading'>Loading...</p>
        </div>)
          : (products?.map((product, index) => {
            return (<div className='col-md-3' key={index}><ProductCart items={product} /></div>)
          }))}
      </div>
    </div>
  )
}

export default WomensClothing