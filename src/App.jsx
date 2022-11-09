import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import ErrorBoundary from './Pages/ErrorBoundary';
import ErrorPage from './Pages/ErrorPage';
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='errorBoundary' element={<ErrorBoundary />} />
        <Route path='errorPage' element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  )
}


export default App;