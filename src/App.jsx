import { useState } from 'react'
import Contact from './components/Contact'
import Main from './components/Main'
import Project from './components/Project'
import Sidenav from './components/Sidenav'
import Work from './components/Work'

function App() {

  return (
    <div>
      <Sidenav />
      <Main />
      <Work />
      <Project />
      <Contact />
    </div>
  )
}

export default App
