import Header from './Header';
import AddItem from './AddItem';
import Content from './Content';
import Footer from './Footer';
import { useState } from 'react';

function App() {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item };
    items.push(myNewItem);

    //  //
    // setItems(items);
  }

  //   // 
  //   const listItems = [...items, myNewItem];
  //   setItems(listItems);
  // }

  const handleCheck = (id) => {
    const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
    setItems(listItems);

    // // what do you think about this line?  what will be the result?
    // setItems(items.map((item) => item.id === id-1 ? { ...item, checked: !item.checked } : item));
   
   
    // // maybe this way?
    // setItems(prevItems => prevItems.map((item) => item.id === id-1 ? { ...item, checked: !item.checked } : item));
  }

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
  }

  const addNewItem = (newItem) => {
    if (!newItem) return;
    addItem(newItem);
  }

  return (
    <div className="App">
      <Header title="Grocery List" />
      <AddItem addNewItem={addNewItem} />
      <Content
        items={items}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length={items.length} />
    </div>
  );
}

export default App;
