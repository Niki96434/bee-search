import './App.css'
import Header from './components/Header'
import Form from './components/Form'
import GetCard from './components/ListArticle'
import Modal from './components/Modal'
import { useState, useEffect } from 'react'
import Pagination from './components/Pagination'
// import bootstrap from 'bootstrap' 
export default function App() {
  const [open, setOpen] = useState(false)
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1) // страница на которой находятся - первая(offset)
  const [articlesPerPage] = useState(10) // статей в страничке (limit)
  const indexOfLastArticle = currentPage * articlesPerPage;  // 1 * 10 = 10 индекс последней статьи 
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage; // 10 - 10 = 0 - индекс первой статьи 
  const currentArticles = articles.slice(indexOfFirstArticle, indexOfLastArticle); // делим массив со статьями, который нам поступил от 0(1) до 10
  useEffect(() =>  {const getArticles = async () => {
      setLoading(true)
      const res = await fetch('/data.json')
      const response = await res.json()
      setArticles(response)
      setLoading(false)
      console.log(response)
    };
     getArticles()}, [])

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
    <GetCard articles={currentArticles} loading={loading}/>
    <br></br>
    <Pagination articlesPerPage={articlesPerPage} totalArticles={articles.length} setCurrentPage={setCurrentPage} currentPage={currentPage} />
    </>
  )
}


