import { Fragment } from 'react';
import './css/work.css';

const Work: React.FC = () => {
    return (
        <div className='card-root'>
            <div className='main'>
                <h1>Responsive Card Grid Layout</h1>
                <ul className='cards'>
                    <li className='cards_item'>
                        <div className='card'>
                            <div className='card_image'><img src='https://picsum.photos/500/300/?image=10'/></div>
                            <div className='card_content'>
                                <h2 className='card_title'>Card Grid Layout</h2>
                                <p className='card_text'>Demo of pixel perfect pure CSS simple responsive card grid layout</p>
                                <button className='btn card_btn'>Read More</button>
                            </div>
                        </div>
                    </li>
                    <li className='cards_item'>
                        <div className='card'>
                            <div className='card_image'><img src='https://picsum.photos/500/300/?image=5'/></div>
                            <div className='card_content'>
                                <h2 className='card_title'>Card Grid Layout</h2>
                                <p className='card_text'>Demo of pixel perfect pure CSS simple responsive card grid layout</p>
                                <button className='btn card_btn'>Read More</button>
                            </div>
                        </div>
                    </li>
                    <li className='cards_item'>
                        <div className='card'>
                            <div className='card_image'><img src='https://picsum.photos/500/300/?image=11'/></div>
                            <div className='card_content'>
                                <h2 className='card_title'>Card Grid Layout</h2>
                                <p className='card_text'>Demo of pixel perfect pure CSS simple responsive card grid layout</p>
                                <button className='btn card_btn'>Read More</button>
                            </div>
                        </div>
                    </li>
                    <li className='cards_item'>
                        <div className='card'>
                            <div className='card_image'><img src='https://picsum.photos/500/300/?image=14'/></div>
                            <div className='card_content'>
                                <h2 className='card_title'>Card Grid Layout</h2>
                                <p className='card_text'>Demo of pixel perfect pure CSS simple responsive card grid layout</p>
                                <button className='btn card_btn'>Read More</button>
                            </div>
                        </div>
                    </li>
                    <li className='cards_item'>
                        <div className='card'>
                            <div className='card_image'><img src='https://picsum.photos/500/300/?image=17'/></div>
                            <div className='card_content'>
                                <h2 className='card_title'>Card Grid Layout</h2>
                                <p className='card_text'>Demo of pixel perfect pure CSS simple responsive card grid layout</p>
                                <button className='btn card_btn'>Read More</button>
                            </div>
                        </div>
                    </li>
                    <li className='cards_item'>
                        <div className='card'>
                            <div className='card_image'><img src='https://picsum.photos/500/300/?image=2'/></div>
                            <div className='card_content'>
                                <h2 className='card_title'>Card Grid Layout</h2>
                                <p className='card_text'>Demo of pixel perfect pure CSS simple responsive card grid layout</p>
                                <button className='btn card_btn'>Read More</button>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Work;