import './ProductCart.css'

import { addFavorite, removeFavorite } from '../../reducers/cartSlice';

import { FaHeart } from 'react-icons/fa';
import React from 'react'
import StarRatings from 'react-star-ratings'
import ToggleButton from '../../Helper/ToggleButton/ToggleButton';
import { cartSelector } from '../../reducers/cartSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux'

const ProductCart = (props) => {


    const dispatch = useDispatch()

    let product = props.items

    let cart = useSelector(cartSelector)
    let isInCart = cart.cartItems.findIndex(item => item.id === product.id) >= 0;
    let isFavorite = cart.favoriteItems.findIndex(item => item.id === product.id) >= 0;


    const nav = useNavigate()

    const handleAddFavorite = (product) => {
        dispatch(addFavorite(product))
    }

    const handleRemoveFavorite = (product) => {
        dispatch(removeFavorite(product))
    }
    const handleClick = (product) => {
        nav("/singleProduct", { state: { ...product } })
    }

    return (
        <div >
            <div className="card card-main" onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                handleClick(product)
            }
            }>
                < div className='card-body card-main-child'>
                    <div className="favorite-icon">
                        <FaHeart
                            color={isFavorite ? "red" : "gray"}
                            onClickCapture={isFavorite ? ((e) => {
                                e.preventDefault()
                                e.stopPropagation()
                                handleRemoveFavorite(product)
                            }) :
                                ((e) => {
                                    e.preventDefault()
                                    e.stopPropagation()
                                    handleAddFavorite(product)
                                })}
                            size={20}
                        />
                    </div>
                    <img src={product.image} className="card-img-top" alt={product.title} />
                    <h5 className="card-title"><span>Brand : </span>{product.title}</h5>
                    <div className="card-body card-details">
                        <div className='rating'>
                            <h6><StarRatings rating={product.rating.rate}
                                starRatedColor="goldenrod"
                                starEmptyColor="black"
                                starDimension="15px"
                                starSpacing="2px"
                                numberOfStars={5}
                                name='rating' /></h6>
                            <span>({product.rating.count})</span>
                        </div>
                        <h6>${product.price}</h6>
                        <ToggleButton isInCart={isInCart} product={product} key={product.id} />
                    </div>
                </div>

            </div>
        </div >
    )
}

export default ProductCart