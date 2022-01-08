import './Nav.css';
import logo from '../img/logo.png';
import profile from '../img/profile.jpeg';

// Icons
import { BiSearch } from "react-icons/bi";
import { AiFillBell } from "react-icons/ai";
import { MdArrowDropDown } from "react-icons/md";

export default function Nav() {
    return (
        <div className='containerNav'>
            <nav className='navMenu'>
                <div className='containerLogo'>
                    <img className='logoNav' src={logo} alt='Logo' />
                </div>
                <div className='containerUlNav'>
                    <ul className='ulNav'>
                        <li className='optionNav'>Home</li>
                        <li className='optionNav'>Audio & Subtitles</li>
                        <li className='optionNav'>TV Shows</li>
                        <li className='optionNav'>Movies</li>
                        <li className='optionNav'>New & Popular</li>
                        <li className='optionNav'>My List</li>
                    </ul>
                </div>
                <div className='containerRightNav'>
                    <BiSearch className='iconNavRight' />
                    <li id='optionRight' className='optionNav'>Kids</li>
                    <AiFillBell className='iconNavRight' />
                    <div className='containerDropDown'>
                        <img className='profileImage' src={profile} alt='Profile image' />
                        <MdArrowDropDown />
                    </div>
                </div>
            </nav>
        </div>
    )
}