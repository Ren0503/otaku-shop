import React from 'react'
import { Container } from 'react-bootstrap'
import HomeRoutes from './routes/HomeRoutes'
import ProductRoutes from './routes/ProductRoutes'
import UserRoutes from './routes/UserRoutes'
import AdminRoutes from './routes/AdminRoutes'
import OrderRoutes from './routes/OrderRoutes'
import { BrowserRouter as Router } from 'react-router-dom'


import { Header, Menu, Footer } from './components/core'

const App = () => {
  return (
    <Router>
      <Header />
      <Menu />
      <main>
        <HomeRoutes />
        <Container>
          <UserRoutes />
          <AdminRoutes />
          <OrderRoutes />
          <ProductRoutes />
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App
