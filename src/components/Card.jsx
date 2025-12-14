export default function Card({id, url, description, handleClickCard}) {
    return(
    <div key={id} className="max-w-sm mx-auto mt-10 bg-white border border-gray-200 rounded-lg shadow">
      <img
        className="rounded-t-lg"
        src={url}
        alt=""
      />

      <div className="p-5">
        {/* <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
          {title}
        </h5> */}

        <p className="mb-3 font-normal text-gray-700">
          {description}
        </p>

        <button onClick={handleClickCard}
          type="button"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800"
        >
          Читать больше
        </button>
      </div>
    </div>

    )
}