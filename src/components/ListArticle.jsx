  import Card from '../components/Card'
  import CardLS from './CardLS';
  import './ListArticle.css'
  import { useState } from 'react'
  import ModalArticle from './ModalArticle';
  const GetCard = ({articles, loading}) => {
     const [closeCard, setCloseCard] = useState(false)
     const [select, selectedCard] = useState(null)
     const [modal, getModal] = useState(false)
     const saveTitle = JSON.parse(localStorage.getItem("titleArticle"))
     const saveImg = JSON.parse(localStorage.getItem("imgs"))
     const saveContent = JSON.parse(localStorage.getItem("fullTextArticle"))
     function getModalWindow() {
      getModal(true)
     }
     if (loading) {
      return <h2>loading...</h2>
     }
      return (
        <>
        <div className='containerList'>
          {/* {saveTitle != '' && <CardLS saveTitle={saveTitle} saveImg={saveImg} handleClickCard={getModalWindow}/>}
          {modal && <ModalArticle handleCloseCard={() => getModal(false)}>{saveContent}</ModalArticle>} */}
          {Array.isArray(articles) && articles.map(i => (<Card key={i.id} url={i.imgs} description={i.titleArticle} handleClickCard={() => {selectedCard(i)
                                                                                                           setCloseCard(true)}} />))}
                                                                                                           {console.log('articles in ListArticle:', articles)}
        </div>
                       {select && closeCard && (<ModalArticle handleCloseCard={() => setCloseCard(false)}>{select.fullTextArticle}</ModalArticle>)}

        </>)
}
export default GetCard