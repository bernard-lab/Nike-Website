import { headerLogo } from '../assets/images'
import {navLinks} from '../constants/index'
import { hamburger } from '../assets/icons'

const Nav = () => {
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
        <nav className='flex justify-between items-center max-container'>
            <a href="/">
                <img 
                src={headerLogo} 
                alt="Logo"
                width={130}
                height={20} />
            </a>
            <ul className='flex flex-1 justify-center items-center gap-16 max-lg:hidden'
            >
                {/* Map the navLinks  */}
                {
                    navLinks.map((item) => (
                        <li key={item.label}> 
                            <a 
                            href={item.href}
                            className='font-montserrat leading-normal text-lg text-slate-gray'
                            >
                                {item.label}
                            </a>
                        </li>
                    ))
                }
            </ul>
            <div className='hidden max-lg:block'> {/**Hide in big device screen */}
                <img 
                src={hamburger} 
                alt="Hamburger"
                width={25} 
                height={25}
                />   
                    {/* Add Section link here */}
            </div>
        </nav>
    </header>
  )
}

export default Nav