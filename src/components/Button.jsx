export default function Button({children, onClick}) {
    return (
    <div>
    <button onClick={onClick} type="button" className="absolute end-1.5 bottom-1.5 text-white bg-brand hover:bg-brand-strong box-border border border-transparent focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded text-xs px-3 py-1.5 focus:outline-none">{children}</button>
    </div>)
}