import 'bulma/css/bulma.css';
import './components/css/index.css';
import ReactDOM from 'react-dom/client';
import NavBar from './components/navbar';
import TypewriterTool from './components/typewriter-tool';
import About from './components/about';
import AboutCyber from './components/about-cyber';
import Work from './components/work';
import Contact from './components/contact';

const App = () => {

    return (
        <div>
            <div className='columns bg-image'>
                <div className='column landing'>
                    <NavBar />
                    <TypewriterTool />
                </div>
            </div>
            <div className='columns'>
                <div className='column'>
                    <AboutCyber />
                </div>
            </div>
            <div className='columns'>
                <div className='column'>
                    <Work />
                </div>
            </div>
            <div className='columns'>
                <div className='column'>
                    <Contact />
                </div>
            </div>
        </div>
    );
};

const rootDiv = document.querySelector('#root')!;

if (rootDiv) {
    const root = ReactDOM.createRoot(rootDiv);
    root.render(<App />);
}
