import { useState } from 'react';
import Header from './components/Header'
import Tasks from './components/Tasks';
import Footer from './components/Footer';
import AddTask from './components/AddTask';
import About from './components/About';
// import TaskDetails from './components/TaskDetails';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

const App = () => {

  const [showAddTask, setShowAddTask] = useState(false)
  
  const [tasks, setTasks ] =  useState([])

  // useEffect(()=>{
  //   // will use fetchTask method to get tasks from backend
  //   const getTasks = async ()=>{
  //     const tasksFromServer = await fetchTasks()
  //     setTasks(tasksFromServer)
  //   }

  //   getTasks()
  // },[])

  // Fetch tasks from backend
  // const fetchTasks = async()=>{
  //   //await the response first from backend
  //   const res = await fetch('http://localhost:5000/tasks')

  //   //convert to json object
  //   const data = res.json()

  //   return data
  // }


  // Fetch a single task from backend
  // const fetchaSingleTask = async(id)=>{
  //   //await the response first from backend
  //   const res = await fetch(
  //     `http://localhost:5000/tasks/${id}`)

  //   //convert to json object
  //   const data = res.json()

  //   return data
  // }






// Add Task
const addTask = (task) => {
  const id = Math.floor(Math.random()*10000)+1
  const newTask = {id, ...task}
  setTasks([...tasks,newTask])
}


// Delete task. 
const deleteTask = (id) =>{
  setTasks(tasks.filter((task) => task.id !== id))
} 


// Toggle reminder
const toggleReminder = (id)=>{   
  // UI side functionality 
  setTasks(tasks.map((task)=>
  task.id === id?{...task, reminder: !task.reminder} : task))
  }


  return (
    <Router>
    <div className = 'container'>
       {/* assign header variable inside the div tag */}
       <Header 
       onAdd = {() => setShowAddTask(!showAddTask)}
       showAdd = {showAddTask}/> 
       
      <Routes>
        <Route path = '/' element={
          <>
          {showAddTask && <AddTask onAdd = {addTask}/>}
          {tasks.length>0?(<Tasks tasks = {tasks} 
          onDelete={deleteTask} 
          onToggle = {toggleReminder}/>
          ): ('No tasks to show')}        
        </>
        } />
        
        <Route path='/about' element={<About/>} />
        
        {/* <Route path='/task/:id' element={<TaskDetails/>} /> */}
        
      </Routes>
      <Footer/>
    </div>
    </Router>
  )
}

export default App







// function App() {

//   const name = 'Brad'
//   const x = false

//   return (
//     <div className="Container">
//       <h1>Hello From React</h1>
//       {/* Use curly braces to ouptut name variable */}
//       {/* <h2>Hello {name}</h2>  */}
//       {/* Returns 'Hello 4' */}
//       {/* <h2>Hello {1+3}</h2> */}
//       <h2>Hello {x?'Yes':'No'}</h2>

//     </div>
//   );
// }

// export default App;