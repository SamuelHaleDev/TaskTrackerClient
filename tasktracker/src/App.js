import './App.css';
import { Header } from './components/Header';
import { GlobalProvider } from './context/GlobalState';
import { AddTask } from './components/AddTask';
import { TaskList } from './components/TaskList';
import { DeleteTask } from './components/DeleteTask';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className='container'>
        <AddTask />
        <TaskList />
        <DeleteTask />
      </div>
    </GlobalProvider>
  );
}

export default App;
