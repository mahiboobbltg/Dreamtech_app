import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from './humburger';



function App() {
  return (
    <Router>
       <div className="App">
        <Sidebar />
      </div>
    </Router>
  );
}

export default App;