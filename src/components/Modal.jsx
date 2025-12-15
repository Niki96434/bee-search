import './Modal.css'
import data from '../data.json'
import { useState, useEffect} from "react"

export default function Modal({close}) {
  const [titleArticle, setTitle] = useState('')
  const [imgs, setImageUrl] = useState('')
  const [fullTextArticle, setContent] = useState('')
  const [articles, setArticles] = useState('') // изменяем состояние массива с объектами статей
  
  useEffect(() => localStorage.setItem("titleArticle", JSON.stringify(titleArticle)), [titleArticle]) // сохранение в ЛС каждый раз когда меняется переменная в скобках
  useEffect(() => localStorage.setItem("imgs", JSON.stringify(imgs)), [imgs])
  useEffect(() => localStorage.setItem("fullTextArticle", JSON.stringify(fullTextArticle)), [fullTextArticle])
  
  function handleSubmit() { // при нажатии на кнопку "добавить" мы добавляем объект статьи
     setArticles({titleArticle, imgs, fullTextArticle})
     alert('добавили в ЛС статью')
  }

  
    return (
    <div className="fixed inset-0 z-[50] flex items-center justify-center bg-black/50">
  <div className="relative p-4 w-full max-w-md">
    <div className="relative bg-white border rounded-lg shadow p-4 md:p-6">
      
      {/* Header */}
      <div className="flex items-center justify-between border-b pb-4">
        <h3 className="text-lg font-medium">
          Создать новую статью
        </h3>

        <button onClick={close} type="button">
          ✕
        </button>
      </div>

      {/* Body */}
      <form onSubmit={handleSubmit}>
        <div className="py-4">
          <label className="block mb-2 text-sm font-medium">
            Название
          </label>
          <input value={titleArticle}
            className="w-full border rounded px-3 py-2"
            placeholder=""
             onChange={e => setTitle(e.target.value)}
          />
        </div>
        <div className="py-4">
          <label className="block mb-2 text-sm font-medium">
            Ссылка на картинку
          </label>
          <input value={imgs}
            className="w-full border rounded px-3 py-2"
            placeholder=""
            onChange={e => setImageUrl(e.target.value)}
          />
        </div>
        <div className="py-4">
          <label className="block mb-2 text-sm font-medium">
            Содержание статьи
          </label>
          <textarea
            className="w-full border rounded p-3"
            rows={4}
            value={fullTextArticle}
            onChange={e => setContent(e.target.value)}
          />
        </div>

        <div className="flex gap-4 border-t pt-4">
          <button type='submit' onClick={handleSubmit} className="px-4 py-2 bg-blue-600 text-white rounded">
            Добавить
          </button>
          <button type='button' onClick={close}className="px-4 py-2 border rounded">
            Отмена
          </button>
        </div>
      </form>
    </div>
  </div>
</div>

    )
}