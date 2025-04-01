import { Routes, Route } from 'react-router-dom';
import CreateEmployee from './pages/CreateEmployee.jsx';
import EmployeeList from './pages/EmployeeList.jsx';
import NotFound from './pages/NotFound.jsx';

function App() {
  return (
    <Routes>
      <Route path="/create-employee" element={<CreateEmployee />} />
      <Route path="/employee-list" element={<EmployeeList />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
