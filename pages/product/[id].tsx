import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const ProductPage = () => {
  const { query } = useRouter()
  const [product, setProduct] = useState<TProduct>();

  useEffect(() => {
    console.log(query.id)
    window
      .fetch(`/api/avo/${query.id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
  }, [])

  return (
    <section>
      <h1>Página producto: {query.id}</h1>
      {product && <p>Avo: {product.name}</p>}
    </section>
  )
}

export default ProductPage
