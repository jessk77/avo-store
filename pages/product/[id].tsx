import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const ProductPage = () => {
  const { query } = useRouter()
  const [product, setProduct] = useState<TProduct>()

  useEffect(() => {
    if (query.id)
      window
        .fetch(`/api/avo/${query.id}`)
        .then((response) => response.json())
        .then((data) => setProduct(data))
  }, [query.id])

  return (
    <section>
      {product ? <h1>Avo: {product.name}</h1> : <h3>Product not found</h3>}
    </section>
  )
}

export default ProductPage
