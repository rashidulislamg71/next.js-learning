import ProductCard from '@/components/productCard/page';
import React from 'react'

async function ProductsPage() {
    const res = await fetch("http://localhost:4000/products", {cache: "no-store"});
    const productsData = await res.json();
    return (
        <div>
            <h1>my products is: {productsData.length}</h1>
            <div className='grid grid-cols-3 w-full  gap-5'>
                {
                    productsData.map(product => <ProductCard key={product.id} product={product}>

                    </ProductCard>)
                }
            </div>

        </div>
    )
}

export default ProductsPage