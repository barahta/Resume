import React, {useContext, useEffect} from "react"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import '@fortawesome/fontawesome-free/css/all.css';
import {observer} from "mobx-react-lite";
import './assets/styles/index.scss'
import MainPage from "./pages/MainPage";
import {DataProvider} from "./context/DataContext";
import {library} from "@fortawesome/fontawesome-svg-core";
import {fas} from "@fortawesome/free-solid-svg-icons";
import {fab} from "@fortawesome/free-brands-svg-icons";
library.add(fas, fab);
function App() {

  return (
      <DataProvider>
        <Router>
          <div className="App">
            <Routes>
              <Route path="/" element={<MainPage/>} />

            </Routes>
          </div>
        </Router>
      </DataProvider>
  );
}

export default observer(App)
