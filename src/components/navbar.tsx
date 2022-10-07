import './css/navbar.css';
import { useEffect, useRef, useState } from 'react';

const NavBar: React.FC = () => {
    const [ isPageTop, setIsPageTop ] = useState(true);

    const handleScrollEvent = () => {
        if (window.scrollY !== 0) {
            setIsPageTop(false);
        } else {
            setIsPageTop(true);
        }
    };

    useEffect(() => {
        let timer: NodeJS.Timeout;
        document.addEventListener('scroll', () => {
            timer = setTimeout(handleScrollEvent, 250);      
        });

        return () => {
            document.removeEventListener('scroll', handleScrollEvent);
            if (timer) {
                clearTimeout(timer);      
            }
        };
    });


    return (
        <div className={`navbar is-fixed-top ${ !isPageTop && 'not-at-top' }`}>
            <div className='navbar-brand'>
                <a className='navbar-item' href='#'>
                    <i className='fa-solid fa-code fa-xl'></i>
                </a>
            </div>
            <div className='navbar-menu'>
                <div className='navbar-end'>
                    <a className='navbar-item' href='#'>
                        Home
                    </a>
                    <a className='navbar-item' href='#'>
                        About
                    </a>
                    <a className='navbar-item' href='#'>
                        Work
                    </a>
                    <a className='navbar-item' href='#'>
                        Contact
                    </a>
                </div>
            </div>
        </div>
    );
};

export default NavBar;