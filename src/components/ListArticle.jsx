  import Card from '../components/Card'
  import data from "../data.json";
  import './ListArticle.css'
  import { useState } from 'react'
  import ModalArticle from './ModalArticle';
  export default function GetCard() {
     const [closeCard, setCloseCard] = useState(false)
     const [select, selectedCard] = useState(null)
      return (
        <>
        <div className='containerList'>{data.map(i => (<Card key={i.id} url={i.imgs} description={i.titleArticle} handleClickCard={() => {selectedCard(i)
                                                                                                           setCloseCard(true)}} />))}</div>
                       {select && closeCard && (<ModalArticle handleCloseCard={() => setCloseCard(false)}>{select.fullTextArticle}</ModalArticle>)}

        </>)
}