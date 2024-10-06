import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { Feed, Home, Login } from './pages'
import { GlobalStyle } from './styles/global'

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/feed" element={<Feed />} />
      </Routes>
    </Router>
  )
}

export default App
