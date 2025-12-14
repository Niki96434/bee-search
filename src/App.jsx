import './App.css'
import Header from './components/Header'
import Form from './components/Form'
import ListArticle from './components/ListArticle'
import Modal from './components/Modal'
import { useState, useEffect } from 'react'
import ModalArticle from './components/ModalArticle'
export default function App() {
  const [open, setOpen] = useState(false)
  function onClick() {
    setOpen(true)
    }
  return (
    <>
    <header>
      <Header onClick={onClick}/>
    </header>
    <Form />
    {open && <Modal close={() => setOpen(false)}/>}
    <ListArticle />
    </>
  )
}
