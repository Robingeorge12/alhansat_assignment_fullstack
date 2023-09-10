import logo from './logo.svg';
import './App.css';
import AllRoute from './Route/AllRoute';
import Navbar from './Components/Navbar/Navbar';

// import { DragDropContext } from 'react-beautiful-dnd';
import Dashboard from './Components/Dashboard/Dashboard';

function App() {
  return (
    // <DragDropContext >
    <div className="App">
  {/* <Navbar /> */}
  {/* <AllRoute /> */}
  <Dashboard />
    </div>
    //  </DragDropContext> 
  );
}

export default App;
