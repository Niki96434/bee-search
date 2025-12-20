import './App.css'
import Header from './components/Header'
import Form from './components/Form'
import GetCard from './components/ListArticle'
import Modal from './components/Modal'
import { useState, useEffect } from 'react'
import Pagination from './components/Pagination'
// import FormAuth from './components/FormAuth'
// import bootstrap from 'bootstrap' 
export default function App() {
  // const [backendData, setBackendData] = useState([{}])
  const [openAuth, setOpenAuth] = useState(false)
  const [open, setOpen] = useState(false)
  const [articles, setArticles] = useState([]) // все статьи

  const [search, setSearch] = useState(''); // все что вводит юзер
  // колонки таблицы
  const [title, setTitle] = useState('');
  const [img, setImg] = useState('');
  const [content, setContent] = useState('');


  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1) // страница на которой находятся - первая(offset)
  const [articlesPerPage] = useState(20) // статей в страничке (limit)
  const indexOfLastArticle = currentPage * articlesPerPage;  // 1 * 10 = 10 индекс последней статьи 
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage; // 10 - 10 = 0 - индекс первой статьи 
  const currentArticles = articles.slice(indexOfFirstArticle, indexOfLastArticle); // делим массив со статьями, который нам поступил от 0(1) до 10
 
  const loadArticles = async () => {
    const res = await fetch(`http://localhost:3000/articles?q=${search}`);
    const data = await res.json();
    setArticles(data);
  };

  useEffect(() => {
    loadArticles();
  }, []);

  const addArticle = async (e) => {
    e.preventDefault();
    console.log('SEND:', { title, img, content });
    await fetch('http://localhost:3000/articles', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, img, content })
    });

    setTitle('');
    setImg('');
    setContent('');
    loadArticles();
  };

  function onClick() {
    setOpen(true)
    }
  function onSubmit() {
    setOpenAuth(true)
  }
  return (
    <>
    <header>
      <Header onClick={onClick} onSubmit={onSubmit}/>
    </header>
    <Form handleClick={loadArticles} handleInput={(e) => setSearch(e.target.value)} search={search}/>
    {open && <Modal close={() => setOpen(false)} handleSubmit={addArticle} setContent={e => setContent(e.target.value)} setImg={(e) => setImg(e.target.value)} setTitle={(e) => setTitle(e.target.value)} content={content} img={img} title={title}/>}
    <GetCard articles={currentArticles} loading={loading}/>
    {/* {openAuth && <FormAuth psw={e => setPsw(e.target.value)} onAuth={async (e) => e.preventDefault()} email={e => setEmail(e => e.target.value)} />} */}
    <br></br>
    <Pagination articlesPerPage={articlesPerPage} totalArticles={articles.length} setCurrentPage={setCurrentPage} currentPage={currentPage} />
    </>
  )
}


