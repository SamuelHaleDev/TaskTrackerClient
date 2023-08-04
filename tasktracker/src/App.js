import './App.css';
import { Header } from './components/Header';
import { GlobalProvider } from './context/GlobalState';
import { AddTask } from './components/AddTask';
import { TaskList } from './components/TaskList';
import { DeleteTask } from './components/DeleteTask';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <GlobalProvider>
      <Header />
      <AddTask />
      <section className='listSection my-2'>
        <TaskList />
        <DeleteTask />
      </section>
    </GlobalProvider>
  );
}

export default App;
