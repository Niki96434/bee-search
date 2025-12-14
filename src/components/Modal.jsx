import './Modal.css'
export default function Modal({close}) {
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
      <form>
        <div className="py-4">
          <label className="block mb-2 text-sm font-medium">
            Название
          </label>
          <input
            className="w-full border rounded px-3 py-2"
            placeholder=""
          />
        </div>
        <div className="py-4">
          <label className="block mb-2 text-sm font-medium">
            Ссылка на картинку
          </label>
          <input
            className="w-full border rounded px-3 py-2"
            placeholder=""
          />
        </div>
        <div className="py-4">
          <label className="block mb-2 text-sm font-medium">
            Содержание статьи
          </label>
          <textarea
            className="w-full border rounded p-3"
            rows={4}
          />
        </div>

        <div className="flex gap-4 border-t pt-4">
          <button className="px-4 py-2 bg-blue-600 text-white rounded">
            Добавить
          </button>
          <button onClick={close}className="px-4 py-2 border rounded">
            Отмена
          </button>
        </div>
      </form>
    </div>
  </div>
</div>

    )
}