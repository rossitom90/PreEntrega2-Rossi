import logo from './logo.svg'
import './App.css'
import NavBar from './components/NavBar'
import Clicker from './components/clicker'
import ItemList from './components/shop/ItemList'
import ItemDetail from './components/shop/ItemDetails'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Error404 from './components/Error404'
import StarWarsContainer from './components/API/api'

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path={'/'} element={<Clicker />} />
          <Route path={'/shop'} element={<ItemList />} />
          <Route path={'/shop/item/:id'} element={<ItemDetail />} />
          <Route path={'/*'} element={<Error404 />} />
          <Route path={'/swapi'} element={<StarWarsContainer />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
