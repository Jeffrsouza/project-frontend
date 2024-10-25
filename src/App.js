import { Home } from "./pages/Home"
import { Home as HomeBarbearia } from "./pages/Barbearia/Home"
import { Home as HomeClient } from "./pages/Cliente/Home"
import { Cadastro } from "./pages/Cadastro"
import { Login } from "./pages/Login"
import { BrowserRouter, Routes, Route } from "react-router-dom"

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cliente" element={<HomeClient />} />
        <Route path="/barbearia" element={<HomeBarbearia />} />
      </Routes>
    </BrowserRouter>
  )
}