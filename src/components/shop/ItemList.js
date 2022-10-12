import React, { useEffect, useState } from 'react'
import { products } from './data/products'
import ItemCard from './ItemCard'

const ItemList = () => {
  const [items, setItems] = useState([])

  useEffect(() => {
    getProducts().then((response) => {
      console.log(response)
      setItems(response)
    })
  }, [])

  const getProducts = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products)
      }, 1000)
    })
  }

  return (
    <>
      <div class="flex flex-wrap space-x-4 space-y-4 justify-center">
        {items.map((i) => (
          <ItemCard key={i.id} {...i} />
        ))}
      </div>
    </>
  )
}

export default ItemList
