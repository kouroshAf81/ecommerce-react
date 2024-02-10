import React, { useContext, useState } from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'

const ProductDisplay = (props) => {

    const { product } = props
    const { addToCart } = useContext(ShopContext)
    const [size, setSize] = useState('')

    const sizeHandler = (value) => {
        setSize(value)
    }
    return (
        <div className='productdisplay'>
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className='productdisplay-img'>
                    <img className='productdisplay-main-img' src={product.image} alt="" />
                </div>
            </div>
            <div className="productdisplay-right">
                <h1>{product.name}</h1>
                <div className="productdisplay-right-stars">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull_icon} alt="" />
                    <p>{Math.floor(Math.random() * 100 + 10)}</p>
                </div>

                <div className="productdisplay-right-prices">
                    <div className="productdisplay-right-price-old">${product.old_price}</div>
                    <div className="productdisplay-right-price-new">${product.new_price}</div>
                </div>
                <div className="productdisplay-right-description">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste consequuntur totam perferendis asperiores inventore quibusdam minima delectus cupiditate reiciendis temporibus?
                </div>
                <div className="productdisplay-right-size">
                    <h1>Select Size</h1>
                    <div className="productdisplay-right-sizes">
                        <div className={`${size === 'S' ? 'active' : ''}`} onClick={() => sizeHandler('S')}>S</div>
                        <div className={`${size === 'M' ? 'active' : ''}`} onClick={() => sizeHandler('M')}>M</div>
                        <div className={`${size === 'L' ? 'active' : ''}`} onClick={() => sizeHandler('L')}>L</div>
                        <div className={`${size === 'XL' ? 'active' : ''}`} onClick={() => sizeHandler('XL')}>XL</div>
                        <div className={`${size === 'XXL' ? 'active' : ''}`} onClick={() => sizeHandler('XXL')}>XXL</div>
                    </div>
                </div>
                <button onClick={() => { addToCart(product.id) }}>ADD TO CART</button>
                <p className='productdisplay-right-category'><span>Category :</span> {product.category} , T-shirt, Crop Top </p>
                <p className='productdisplay-right-category'><span>Tags :</span>Modern, Latest </p>
            </div>
        </div>
    )
}

export default ProductDisplay