import React from 'react'

import Counter from './Counter/Counter'
import List from './List/List'
import Min from './Min'
import Main_Page from './Main_Page'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Main_Page />
        <Routes>
          <Route path="/counter" element={<Counter/>}></Route>
          <Route path="/List" element={<List/>}></Route>
          <Route path="/template" element={<Min/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}