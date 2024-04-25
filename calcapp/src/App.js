import { Calculator } from './components/Calc';
import { ErrorBoundary } from './components/Errorboundary';
import { LifeCycle } from './components/LifeCycle';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Home from './pages/Home';
import About from './pages/About';
import Navbar from './components/Navbar';
import NotFound from './pages/NotFound';
import AboutDetail from './pages/About/AboutDetails';
import Setting from './pages/Settings';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Navigate to="/home" replace />} />

        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/calc' element={<Calculator />} />
        <Route path='/life' element={<LifeCycle />} />
        <Route path='/setting/*' element={<Setting />} />

        <Route path='*' element={<NotFound />} />
        <Route path='/about/:about_details' element={<AboutDetail />} />

      </Routes>

    </BrowserRouter>
    // <div className="App p-5">
    //   <header className="App-header">
    //     <h1>React Calculator</h1>
    //     <Calculator />
    //     <hr/>
    //     <ErrorBoundary>
    //     <LifeCycle/>

    //     </ErrorBoundary>
    //   </header>
    // </div>
  );
}

export default App;
