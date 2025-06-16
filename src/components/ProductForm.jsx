import PropTypes from 'prop-types'
import { useEffect, useState } from "react"

const initialDataForm = {
    id: 0,
    name: '',
    description: '',
    price: ''
}

export const ProductForm = ({handler, selected}) => {

    const [form, setForm] = useState(initialDataForm);
    
    const { id, name, description, price } = form;

    useEffect( () => {
        //if (selected.id > 0) {
            setForm(selected);
        //} else {
        //    setForm(initialDataForm);
        //}
    }, [selected]);

    return <form onSubmit={(e) => {
        e.preventDefault();
        if(!name || !description || !price) {
            alert('Debe completar todos los campos del formulario');
            return;
        }
        
        //if(form.id > 0) {
        //    handlerEdit(form);
        //} else {
        //    handlerAdd(form);
        //}
        handler(form);
        setForm(initialDataForm);
    }}>
        <div>
            <input placeholder="Name"
                className="form-control my-3 w-75"
                name="name"
                value={name} 
                onChange={ (e) => setForm({ ...form, name: e.target.value })} 
            />
        </div>
        <div>
            <input placeholder="Description"
                className="form-control my-3 w-75"
                name="description"
                value={description} 
                onChange={ (e) => setForm({ ...form, description: e.target.value })} 
            />
        </div>
        <div>
            <input placeholder="Price"
                className="form-control my-3 w-75"
                name="price"
                value={price} 
                onChange={ (e) => setForm({ ...form, price: e.target.value })} 
            />
        </div>
        <div>
            <button className="btn btn-primary" type="submit">
                {id > 0 ? 'Update' : 'Create'}
            </button>
        </div>
    </form>
}

ProductForm.propTypes = {
    handler: PropTypes.func.isRequired,
    selected: PropTypes.object.isRequired
}