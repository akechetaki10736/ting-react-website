import 'bulma/css/bulma.css';
import './components/css/index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import NavBar from './components/navbar';
import TypewriterTool from './components/typewriter-tool';


const App = () => {
    return (
        <div className='columns bg-image'>
            <div className='column'>
                <NavBar />
                <TypewriterTool />
            </div>
            <div className='colums'>
                <div className='column test'>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi dolor nisi impedit vel eveniet quae porro sunt! Fugiat tenetur quos possimus similique! Ipsum quod eos, quo aspernatur aliquid incidunt sint!
                    </p>
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

    // return (
    //     <div className='columns bg-image'>
    //         <div className='column'>
    //             <NavBar />
    //             <div className='columns'>
    //                 <div className='colum typewriter-wrapper'>
                        
    //                 </div>
    //             </div>
    //         </div>
            
    //         <div className='typewriter'>
    //             <h1>Hello, I'm Ting.</h1>
    //         </div>
    //     </div>
    // );


//     <div className='columns bg-image'>
//     <div className='column'>
//         <NavBar />
//         <div className='columns'>
//             <div className='column typewriter-wrapper'>
//                 <div className='typewriter'>
//                     <span>
//                         <h1>Hello, I'm Ting.</h1>
//                     </span>
//                 </div>
//             </div>
//         </div>
//     </div>
    
// </div>