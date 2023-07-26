import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import { GlobalProvider } from './context/GlobalState';
import { AddTask } from './components/AddTask';
import { TaskList } from './components/TaskList';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className='container'>
        <TaskList />
        <AddTask />
      </div>
    </GlobalProvider>
  );
}

export default App;
