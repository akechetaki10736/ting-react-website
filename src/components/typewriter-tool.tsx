import './css/typewriter-tool.css';
import Typewriter, { TypewriterClass } from 'typewriter-effect';

const TypewriterTool: React.FC = () => {
    const twHeader = "Hello, I'm Ting";
    const twText1 = 'Back-end Developer'
    const twText2 = 'Web Developer'

    const onInit = (typewriter: TypewriterClass) => {
        typewriter.typeString(twText1)
            .pauseFor(2000)
            .deleteAll()
            .typeString(twText2)
            .pauseFor(2000)
            .deleteAll()
            .start();
    }

    return (
        <div className='tw-wrapper'>
            <div className='tw-header'>
                <h1>{ twHeader }</h1>
            </div>
            <Typewriter onInit={ onInit } options={{ loop: true }}></Typewriter>
        </div>
    );
};

export default TypewriterTool;