import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { Feed, Home, Login, Register } from './pages'
import { GlobalStyle } from './styles/global'

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  )
}

export default App
