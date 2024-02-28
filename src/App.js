import { BrowserRouter, Routes, Route, Link, NavLink} from 'react-router-dom'
import Home from './Pages/Home';
import About from './Pages/About';
import style from './style.css'

function App() {
  return (
    <BrowserRouter>
      <header>
        <nav>
          <h1>SiteTitle</h1>
          <NavLink to="/" >Home</NavLink>
          <NavLink to="about">About</NavLink>
        </nav>
      </header>
      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='' />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
