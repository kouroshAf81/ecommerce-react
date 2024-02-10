import React from 'react'
import './NewCollections.css'
import new_collection from '../Assets/new_collections'
import Item from '../Item/Item'


const NewCollections = () => {
  return (
    <div className='new-collections'>
        <h1>NEW COLLECTIONS</h1>
        <hr />
        <div className="collections" id='new'>
            {new_collection.map((item,i) => {
                return <Item  id={item.id} image={item.image} name={item.name} new_price={item.new_price} old_price={item.old_price} key={i}  />})}
        </div>
    </div>
  )
}

export default NewCollections