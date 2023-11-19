import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import TodoList from './compnents/tp5';
import Tp4 from './compnents/tp4';
import Calcws from './compnents/tp3';
import Tp1 from './compnents/tp1';
import Langcontext from './mycontexts/Langcontext';
import Cicons from './compnents/cicons';
import Ccontent from './compnents/Ccontent';
import NavigationBar from './compnents/Navbar';
import Content from './compnents/Content/Content';
import ThemeContextProvider from './compnents/Context/ThemeContext';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Routes>
        <Route path='/tp5' element={<TodoList />} />
        <Route path='/tp4' element={<Tp4 />} />
        <Route path='/tp1' element={<Tp1 />} />
        <Route path='/tp3' element={<Calcws />} />
        <Route path='/mycontexts/Langcontext' element={
          <Langcontext>
            <div>
              <Cicons />
              <Ccontent />
            </div>
          </Langcontext>
        } />
      </Routes>
      <ThemeContextProvider>
      <Content />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
