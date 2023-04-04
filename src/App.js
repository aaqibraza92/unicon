import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./helpers/Global/GCss/index";
import { Route, Routes, useLocation } from "react-router-dom";
import RouterList from "./helpers/Routes/RoutesList";
import { useEffect } from "react";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className="wrapperApp">
      <Routes>
        {RouterList &&
          RouterList.map((elem, ind) => {
            return <Route key={ind} path={elem.path} element={elem.element} />;
          })}
      </Routes>
    </div>
  );
}

export default App;
