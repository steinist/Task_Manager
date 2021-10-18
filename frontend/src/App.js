import React, {useState, useEffect} from "react"
import Tasks from "./components/Tasks"
import Alert from "./components/Alert"

import {addTask, getTask, updateTask, deleteTask} from "./services/taskServices"

function App() {
  const [name, setName] = useState("")
  const [list, setList] = useState([])
  const [isEditing, setIsEditing] = useState(false)
  const [editID, setEditID] = useState(null)
  const [alert, setAlert] = useState({show: false, msg:"", type:""})

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      showAlert(true, "danger", "Please Enter Value")
    } else if (name && isEditing) {
      setList(list.map((item) => {
        if(item.id === editID) {
          return {...item, title: name}
        }
        return item
      }))
      setName("")
      setEditID(null)
      setIsEditing(false)
      showAlert(true, "success", "Value Changes")
    } else {
      showAlert(true, "success", "Item added to the List")
      const newItem = { id: 123, title: name} //edit this ?

      setList([...list, newItem]);
      setName("")
    }
  }

  const showAlert = (show = false, type="", msg="") => {
    setAlert({show, type, msg})
  }

  const removeItem = (id) => {
    showAlert(true, "danger", "Item Remove")
    setList(list.filter((item) => item.id !== id))
  }

  const editItem = (id) => {
    const editItem = list.find((item) => item.id === id);
    setIsEditing(true);
    setEditID(id);
    setName(editItem.title);
  }

  return (
    <section className="section-center">
      <form onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert={showAlert} list={list}/>}
        <h3 style={{marginBottom:"1.5rem", textAlign:"center"}}>
          Todo List
        </h3>

        <div className="mb-3 form">
          <input type="text" className="form-control" placeholder="Add New Task" onChange={(e) => setName(e.target.value)} value={name} />
          <button type="submit" className="btn btn-success">
            {isEditing ? "Edit" : "Submit"}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div style={{marginTop: "2rem"}}>
          <Tasks items={list} removeItem={removeItem} editItem={editItem}/>

        </div>
      )}

    </section>
  );
}

export default App;
