
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from 'react-router-dom';
import RouterList from './helpers/Routes/RoutesList';

function App() {
  return (
    <div className="wrapperApp">
    <Routes>
      {RouterList &&
        RouterList.map((elem, ind) => {
          return (
            <Route key={ind} path={elem.path} element={elem.element} />
          );
        })}
    </Routes>
  </div>
  );
}

export default App;
