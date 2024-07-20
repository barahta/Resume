import React, {useContext, useEffect} from "react"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"

import {observer} from "mobx-react-lite";
import './assets/styles/index.scss'
import MainPage from "./pages/MainPage";
import {DataProvider} from "./context/DataContext";

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
