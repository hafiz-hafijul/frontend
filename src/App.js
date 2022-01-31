import './App.css';
import NoteList from "./Pages/NoteList"
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import NotePage from './Pages/NotePage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<NoteList />} />
          <Route path="/api/strapi/:id" element={<NotePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
