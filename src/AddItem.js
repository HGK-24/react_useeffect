import { FaPlus } from 'react-icons/fa';
import { useState } from 'react';

const AddItem = ({ addNewItem }) => {
    const [newItem, setNewItem] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault();
        addNewItem(newItem)
        setNewItem('');
    }

    return (
        <form className='addForm' onSubmit={handleSubmit}>
            <label htmlFor='addItem'>Add Item</label>
            <input
                autoFocus
                id='addItem'
                type='text'
                placeholder='Add Item'
                required
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
            />
            <button
                type='submit'
                aria-label='Add Item'
            >
                {/* this is the plus icon: */}
                <FaPlus /> 
            </button>
        </form>
    )
}

export default AddItem
