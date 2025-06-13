import PropTypes from 'prop-types'
import { useState } from 'react'
import { ProductTable } from './components/ProductTable'

const initProducts = [
    {
        id: 1, 
        name: 'Product 1', 
        description: 'Description 1', 
        price: 100 
    },
    { 
        id: 2, 
        name: 'Product 2', 
        description: 'Description 2', 
        price: 200 
    },
    { 
        id: 3, 
        name: 'Product 3', 
        description: 'Description 3', 
        price: 300 
    }
]

export const ProductsApp = ({title='Title default'}) => {

    const [products, setProducts] = useState(initProducts);

    return (
        <div className='container my-4'>
            <h2>{title}</h2>
            <div className='row'>
                <div className='col'>
                    <ProductTable  products={products} />
                </div>
            </div>
        </div>
    )
}

ProductsApp.propTypes = {
    title: PropTypes.string.isRequired
}