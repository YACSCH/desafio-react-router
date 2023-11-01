import { Routes, Route} from 'react-router-dom'

import NavBar from './components/NavBar'
import Home from './views/Home'
import Contact from './views/Contact'
import NotFound from './views/NotFound'

function App() {
 

  return (
    <>
    <NavBar/>
    <Routes>
      <Route path='/' element= { <Home/> } />
      <Route path='/contact' element= { <Contact/> } />
      <Route path='*' element= { <NotFound/> } />
    </Routes>
    </>
  )
}

export default App
