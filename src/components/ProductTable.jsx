import PropTypes from 'prop-types'

export const ProductTable = ( {products, handlerSelected, handlerDelete} ) => {

    //if(products.length === 0) {
    //    return <div className="alert alert-info">No hay productos</div>
    //}

    return <table className="table table-hover table-striped">
        <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Description</th>
                <th>Price</th>
                <th></th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            {
                products.map(product => {
                    return (
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.name}</td>
                            <td>{product.description}</td>
                            <td>{product.price}</td>
                            <td>
                                <button 
                                    className="btn btn-sm btn-primary"
                                    onClick={() => handlerSelected(product)}>
                                        Edit
                                </button>
                            </td>
                            <td>
                                <button 
                                    className="btn btn-sm btn-danger"
                                    onClick={() => handlerDelete(product)}>
                                        Delete
                                </button>
                            </td>
                        </tr>
                    )
                })
            }
        </tbody>
    </table>
}

ProductTable.propTypes = {
    products: PropTypes.array.isRequired,
    handlerSelected: PropTypes.func.isRequired,
    handlerDelete: PropTypes.func.isRequired
}
