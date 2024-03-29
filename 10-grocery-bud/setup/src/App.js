import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";

const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if (list) {
    return JSON.parse(localStorage.getItem("list"));
  } else {
    return [];

function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState(getLocalStorage());
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({ show: true, msg: "hello world", type: "success" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      //display alert
      showAlert(true, "please enter value", "danger")
    }
      else if(name && isEditing){
setList(list.map((item)=>{
  if(item.id === editID){
    return {...item,title:name}
  }
  return item
}))
 setName('');
 setEditID(null);
 setIsEditing(false);
 showAlert(true, "value changed", "success");
    }else{
      //show alert
      showAlert(true, "item added to the list", "success")
      const newItem = { id: new Date().getTime().toString(), title: name };
    console.log("hello");
      setList([...list, newItem]);
      setName("");
    }
  }

const showAlert = (show = false, msg = "", type = "") => {
  setAlert({ show, msg, type });
};

const clearList_= () => {
  showAlert(true, "empty list", "danger");
  setList([]);
}
const removeItem = (id) => {
  showAlert(true, "item removed", "danger");
  setList(list.filter((item) => item.id !== id));
};
const editItem = (id) => {
  const specificItem = list.find((item) => item.id === id);
  setIsEditing(true);
  setEditID(id);
  setName(specificItem.title);
};
useEffect(() => {
localStorage.setItem('list',JSON.stringify(list))

},[list])
  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removedAlert={showAlert} list={list}/>}
        <h3>Grocery bud</h3>
        <div className="form-control">
          <input
            type="text"
            className="grocery"
            placeholder="e.g. eggs"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit" className="submit-btn">
            {" "}
            {isEditing ? "edit" : "submit"}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div className="grocery-container">
          <List items={list} removeItem ={removeItem}/>
          <button className="clear-btn" onClick={clearList} editItem={editItem}>clear items</button>
        </div>
      )}
    </section>
  );
}

export default App;
