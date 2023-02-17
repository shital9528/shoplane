import React from 'react'
import "./SingleProduct.css"
import { useLocation } from 'react-router-dom'
import ToggleButton from '../../Helper/ToggleButton/ToggleButton'
import StarRatings from 'react-star-ratings'
import { addFavorite, removeFavorite } from '../../reducers/cartSlice';
import { useDispatch } from 'react-redux';
import { FaHeart } from 'react-icons/fa';
import { useSelector } from 'react-redux'
import { cartSelector } from '../../reducers/cartSlice'

const SingleProduct = () => {
    let location = useLocation()
    const { image, id, title, price, description, rating } = location.state

    let cart = useSelector(cartSelector)
    let isInCart = cart.cartItems.findIndex(item => item.id === id) >= 0;
    let isFavorite = cart.favoriteItems.findIndex(item => item.id === id) >= 0;

    const dispatch = useDispatch()
    
    const handleAddFavorite = (product) => {
        dispatch(addFavorite(product))
    }

    const handleRemoveFavorite = (product) => {
        dispatch(removeFavorite(product))
    }
    return (
        <div className="product-detail-wrapper">
            <div className="product-image-wrapper">
                <img
                    className="product-image"
                    src={image}
                    alt={title}
                />
            </div>
            <div className="product-info-wrapper">
                <h5>Brand</h5>
                <h2>{title}</h2>
                <p className="product-description">
                    {description}
                </p>
                <h4 className="product-price">${price}</h4>
                <div className='rating'>
                    <h6><StarRatings rating={rating.rate}
                        starRatedColor="goldenrod"
                        starEmptyColor="black"
                        starDimension="20px"
                        starSpacing="5px"
                        numberOfStars={5}
                        name='rating' /></h6>
                    <span>({rating.count})</span>
                </div>
                <div className='fav-icon'>
                    <span> Add favorite : </span>
                    <FaHeart
                        color={isFavorite ? "red" : "gray"}
                        onClick={isFavorite ? (() => handleRemoveFavorite(location.state)) :
                            (() => handleAddFavorite(location.state))}
                        size={20}
                    />
                </div>
                <ToggleButton isInCart={isInCart} product={location.state} key={id} />
            </div>
        </div>
    )
}

export default SingleProduct