import {BsCodeSlash} from 'react-icons/bs'
const Header = () => {
    return <header className="header">
        <div className="header-container">
            <div className="header__logo">
                <a href="/"><h3 className="logo">Welcome<br/><BsCodeSlash/></h3></a>
            </div>
            
                <div className='header__contact'>
                    <ul className="contact">
                        <li>
                            <a href="https://www.linkedin.com/in/helter-conforme-velez-59848218b/" target='_blank'>LinkedIn</a>
                        </li>
                        <li>
                            <a href="https://github.com/helterdev" target='_blank'>Helterdev</a>
                        </li>
                        <li>
                            <a href="mailto: heltherv@gmail.com" target='_blank'>heltherv@gmail.com</a>
                        </li>

                    </ul>
                </div>
            

        </div>
        
    </header>
}

export default Header;