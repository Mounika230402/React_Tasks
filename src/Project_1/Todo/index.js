import React, { useState } from 'react';
import './index.css';
import NavBar from '../Recipes/Navbar';
import Toast from '../../Toasts';
import { toast, ToastContainer } from 'react-toastify';

const TaskManager = () => {
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [taskName, setTaskName] = useState('');
  const [priority, setPriority] = useState('Top Priority');
  const [deadline, setDeadline] = useState('');
  const[error,setError]=useState(false)

  const addTask = () => {
    if (taskName && priority && deadline) {
      setTasks([...tasks, { taskName, priority, deadline }]);
      toast.success("Task is added")
      setTaskName('');
      setPriority('Top Priority');
      setDeadline('');
    }
    else if(taskName===""){
      toast.error("Enter TaskName fields")
    }
    else {
      toast.error("Enter Deadline fields")
    }
  };

  const completeTask = (index) => {
    const taskToComplete = tasks.splice(index, 1)[0];
    setCompletedTasks([...completedTasks, taskToComplete]);
    toast.success("Task is completed")
    setTasks([...tasks]);
  };

  return (
   <>
   <NavBar className="navbar"/>
   <ToastContainer position='top-right' style={{marginTop:"5vw"}}/>
    <div className="container-1">
      <div className="task-manager">
        <h1>Task Tracker</h1>
        <div className="input-group">
          <input
            type="text"
            placeholder="Enter task..."
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
          />
          <select value={priority} onChange={(e) => setPriority(e.target.value)}>
            <option value="Top Priority">Top Priority</option>
            <option value="Medium Priority">Medium Priority</option>
            <option value="Low Priority">Low Priority</option>
          </select>
          <input
            type="date"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
          />
          <button className='btn btn-primary' onClick={addTask}>Add Task</button>
        </div>
       
        <div className="task-list">
          <h2>Upcoming Tasks</h2>
          <table>
            <thead>
              <tr>
                <th>Task Name</th>
                <th>Priority</th>
                <th>Deadline</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
             
              {tasks.map((task, index) => (
                <tr key={index}>
                  <td>{task.taskName}</td>
                  <td>{task.priority}</td>
                  <td>{task.deadline}</td>
                  <td>
                    <button className='btn btn-primary' onClick={() => completeTask(index)}>Complete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="completed-tasks">
          <h2>Completed Tasks</h2>
          <table>
            <thead>
              <tr>
                <th>Task Name</th>
                <th>Priority</th>
                <th>Deadline</th>
              </tr>
            </thead>
            <tbody>
              {completedTasks.map((task, index) => (
                <tr key={index}>
                  <td>{task.taskName}</td>
                  <td>{task.priority}</td>
                  <td>{task.deadline}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div></>
  );
};

export default TaskManager;

