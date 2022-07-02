import './App.css';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom'
import { Home } from './Home';
import { List } from './List';
import { Course } from './Course';
import { Search } from './Search';

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <Link to="/">Home</Link>
          <Link to="courses">Courses</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Course />}>
            <Route path="search" element={<Search type="2" />} />
            <Route path="list" element={<List />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
