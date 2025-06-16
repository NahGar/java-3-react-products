import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import { ProductTable } from './components/ProductTable'
import { ProductForm } from './components/ProductForm'

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

    //const [products, setProducts] = useState(initProducts);
    const [products, setProducts] = useState([]);

    const [productsSelected, setProductsSelected] = useState({
        id: 0,
        name: '',
        description: '',
        price: ''
    });

    useEffect(() => {
        setProducts(initProducts);
    }, []);

    const handlerProduct = (product) => {
        if(product.id > 0) {
            //setProducts(
            //    products.map(p => p.id === product.id ? product : p)
            //);
            setProducts(
                products.map( p => {
                    if(p.id === product.id) {
                        return { ...product};
                    }
                    return p;
                })
            );
        }
        else {
            //setProducts([...products, {...product, id: Date.now}]);
            setProducts([...products, {...product, id: products.length + 1}]);
        }
    }

    const handlerProductSelected = (product) => {
        setProductsSelected({... product});
    }

    const handlerProductDelete = (product) => {
        if(window.confirm('¿Está seguro de eliminar el producto "' + product.name + '"?')) {
            setProducts(products.filter(p => p.id != product.id));
            setProductsSelected({
                id: 0,
                name: '',
                description: '',
                price: ''
            });
        }
    }

    return (
        <div className='container my-4'>
            <h2>{title}</h2>
            <div className='row'>
                <div className='col'>
                    <ProductForm 
                        handler={handlerProduct}
                        selected={productsSelected} />
                </div>
                <div className='col'>
                    {
                        products.length === 0 ? 
                        <div className="alert alert-warning">No hay productos</div>
                        :
                        <ProductTable  
                            products={products} 
                            handlerSelected={handlerProductSelected}
                            handlerDelete={handlerProductDelete}
                        />
                    }
                    
                </div>
            </div>
        </div>
    )
}

ProductsApp.propTypes = {
    title: PropTypes.string.isRequired
}