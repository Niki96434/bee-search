import './Form.css'
import Button from './Button'
import { useState } from 'react'
export default function Form() {
    function handleClick() {
        console.log('ищем статью')
    }
    return (
    <div className='container-form'>
            <div className="title-form">
                    <h1 className="title">Гид по пчеловодству</h1>
                    <span>Будущее пчеловодства</span>
            </div>
            <form id='form' className="max-w-md mx-auto z-10">
                    <label
                    htmlFor="search"
                    className="block mb-2.5 text-sm font-medium text-heading sr-only "
                    >
                    Найти статью
                    </label>
                    <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg
                        className="w-4 h-4 text-body"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        fill="none"
                        viewBox="0 0 24 24"
                        >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeWidth={2}
                            d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                        />
                        </svg>
                    </div>
                    <input
                        type="search"
                        id="search"
                        className="block w-full p-3 ps-9 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body"
                        placeholder="Search"
                        required=""
                    />
                    <Button
                        onClick={handleClick}
                        type="button"
                        className="absolute end-1.5 bottom-1.5 text-white bg-brand hover:bg-brand-strong box-border border border-transparent focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded text-xs px-3 py-1.5 focus:outline-none"
                    >
                        {'Поиск'}
                    </Button>
                    </div>
            </form>
    </div>
// </div>
    )
}