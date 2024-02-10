import React, { useContext, useReducer, useState } from 'react'
import './CSS/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext'
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import Item from '../Components/Item/Item'

const ShopCategory = (props) => {

  const { all_product } = useContext(ShopContext)
  const [activeSort, setActiveSort] = useState(false)
  const initialState = all_product
  const reducer = (state, action) => {
    switch (action.type) {
      case 'popularity':
        return all_product
      case 'lowest price':
        {
          let copyState = [...all_product]
          let newState = copyState.sort(function (a, b) { return a.new_price - b.new_price });
          return newState
        }
      case 'highest price':
        {
          let copyState = [...all_product]
          let newState = copyState.sort(function (a, b) { return b.new_price - a.new_price });
          return newState
        }
      default: return state
    }
  }
  const [state, dispatch] = useReducer(reducer, initialState)
  const [sortValue, setSortValue] = useState('Sort by')

  const sortHandler = (value) => {
    setSortValue(value)
    dispatch({ type: value })
  }
  return (
    <>
      <img className='shopcategory-banner' src={props.banner} alt="" />
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>

        <div className="shopcategory-sort" onClick={() => setActiveSort(!activeSort)}>
          {sortValue} <img src={dropdown_icon} alt="" />
          <div className={`sort ${activeSort && 'active'}`}>
            <p onClick={e => sortHandler(e.target.innerText)}>popularity</p>
            <p onClick={e => sortHandler(e.target.innerText)}>lowest price</p>
            <p onClick={e => sortHandler(e.target.innerText)}>highest price</p>
          </div>
        </div>
      </div>
      <div className='shop-category'>
        <div className="shopcategory-products">
          {state.map((item, i) => {
            if (props.category === item.category) {
              return <Item id={item.id} image={item.image} name={item.name} new_price={item.new_price} old_price={item.old_price} key={i} />
            } else {
              return null
            }
          })}
        </div>
        <div className="shopcategory-loadmore">
          Explore More
        </div>
      </div>
    </>
  )
}

export default ShopCategory


