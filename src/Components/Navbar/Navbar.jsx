import React, { useContext, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
import burger_menu from '../Assets/burger-menu.svg'
import close_menu from '../Assets/close.svg'
const Navbar = () => {

    let { getTotalCartItems } = useContext(ShopContext)
    const [menu, setMenu] = useState('shop')
    const [active, setActive] = useState(false)

    const menuHandler = (activeName) => {
        setMenu(activeName)
        setActive(!active)
    }
    return (
        <div className="navbar">
            <div className="nav-logo">
                <img src={logo} alt="" />
                <p>SHOPPER</p>
            </div>
            <img onClick={() => setActive(!active)} src={burger_menu} className='menu' alt="" />
            <ul className={active ? 'nav-menu active' : 'nav-menu'}>
                <li onClick={() => menuHandler('shop')}> <Link to='/'> Shop </Link> {menu === 'shop' && <hr />} </li>
                <li onClick={() => menuHandler('Mens')}> <Link to='/mens'> Men </Link> {menu === 'Mens' && <hr />} </li>
                <li onClick={() => menuHandler('Womens')}> <Link to='/womens'> Women </Link> {menu === 'Womens' && <hr />} </li>
                <li onClick={() => menuHandler('Kids')}> <Link to='/kids'> Kids </Link> {menu === 'Kids' && <hr />} </li>
                <Link to='/login'  ><button onClick={() => setActive(!active)}>Login</button></Link>
                <img src={close_menu} onClick={() => setActive(!active)} className='close-menu' alt="" />
            </ul>
            <div className="nav-login-cart">
                <Link to='/cart'><img src={cart_icon} alt="" /></Link>
                <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>
        </div>
    )
}

export default Navbar