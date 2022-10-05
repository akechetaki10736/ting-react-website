import './css/navbar.css';

const NavBar: React.FC = () => {
    return (
        <div className='navbar is-fixed-top'>
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