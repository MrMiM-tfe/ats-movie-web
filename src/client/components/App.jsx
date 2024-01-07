import "primereact/resources/themes/lara-light-indigo/theme.css"; // theme
import "primereact/resources/primereact.min.css"; // core css
import "primeicons/primeicons.css"; // icons
import "primeflex/primeflex.css";

import "./assets/index.css";

import { Routes, Route } from "react-router-dom"
import Header from "./layouts/heder"
import Home from "./pages/home"
import Movies from "./pages/movies"
import Series from "./pages/series"
import Search from "./pages/search"
import SingleMovie from "./pages/singeMovie"
import About from "./pages/about"

import { SearchProvider } from "./contexts/search";
import { DataProvider } from "./contexts/data";

function App() {
  
  // test to remember
  // window.electron.ipcRenderer.invoke("save", "what").then(v => {
  //   console.log(v);
  // })

  return (
    <DataProvider>
    <SearchProvider>
      <div className="Main h-screen">
        <Header/>
        <div className="panel">
          <Routes>
            <Route path="/"  element={<Home />}/>
            <Route path="/movies"  element={<Movies />}/>
            <Route path="/series"  element={<Series />}/>
            <Route path="/about"  element={<About />}/>
            <Route path="/search"  element={<Search />}/>
            <Route path="/movie/:id"  element={<SingleMovie />}/>
          </Routes>
        </div>
      </div>
    </SearchProvider>
    </DataProvider>
  )
}

export default App
