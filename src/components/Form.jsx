import './Form.css'
import Button from './Button'
import { useState } from 'react'
export default function Form({handleClick, search, handleInput}) {
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
                    <input
                        value={search}
                        type="search"
                        id="search"
                        className="block w-full p-3 ps-9 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body"
                        placeholder="Search"
                        required=""
                        onChange={handleInput}
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