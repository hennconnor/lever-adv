import React from 'react'
import ProductCard from './ProductCard';

const Products = ({ products }) => {
    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-stretch justify-center'>
            {products.map(product => {
                return (
                    <ProductCard product={product} key={product.id} />)
            })}
        </div>

    )
}

export default Products;