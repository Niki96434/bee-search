export default function ModalArticleTwo({children, handleCloseCard}) {
  return (
        <>
  <div
    data-dialog-backdrop="modal"
    data-dialog-backdrop-close="true"
    className="fixed inset-0 z-[999] grid h-screen w-screen place-items-center bg-black bg-opacity-60 backdrop-blur-sm transition-opacity duration-300"
  >
    <div
      data-dialog="modal"
      className="relative m-4 p-4 w-2/5 min-w-[40%] max-w-[40%] rounded-lg bg-white shadow-sm"
    >
       <div className="flex shrink-0 flex-wrap items-center pt-4 justify-end">
        <button onClick={handleCloseCard}
          data-dialog-close="true"
          className="rounded-md bg-green-600 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-green-700 focus:shadow-none active:bg-green-700 hover:bg-green-700 active:shadow-none disabled:opacity-50 disabled:shadow-none ml-2"
          type="button"
        >
          Закрыть
        </button>
      </div>
      <div className="relative border-t border-slate-200 py-4 leading-normal text-slate-600 font-light">
        {children}
      </div>
      
    </div>
  </div>
</>
    )
}