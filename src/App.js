import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './components/About'
import Main from './components/Main'
import Running from './components/Running'
import Header from './components/Header'
import './App.css'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/running" element={<Running />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
