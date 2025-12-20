import './Header.css'
import Logo from './Logo'
import Button from './Button'
export default function Header({onClick, onSubmit}) {
            return (
            <header className="header">
              <div className="header-content">
                  <Logo width={50} height={45}/>
                  <Button children={'Добавить новую статью'} onClick={onClick}/>
                  
                  {/* <Button children={'Вход'} onClick={onSubmit} /> */}
              </div> 
            </header>
  )
}