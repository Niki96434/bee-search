import logo from '../assets/bee.png'
export default function Logo({width , height}) {
    return ( 
        <div className='logo'>
        <a href="/" className="img-logo">
          <img
            src={logo}
            alt="logo"
            className="logo-image-class"
            width={width}
            height={height}
            loading="lazy"
          />
        </a>
        </div>
    )
}