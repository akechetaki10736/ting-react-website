import { Fragment } from 'react';
import './css/about-cyber.css';
import Typewriter, { TypewriterClass } from 'typewriter-effect';

interface SkillSet {
    skill: string;
    value: number;
};

const AboutCyber: React.FC = () => {
    const skillSet: SkillSet[] = [
        { skill: 'Java', value: 70 },
        { skill: 'Javascript', value: 80 },
        { skill: 'NodeJS', value: 75 },
        { skill: 'Typescript', value: 75 },
        { skill: 'Solidity', value: 75 },
        { skill: 'React/Redux', value: 70 },
        { skill: 'Spring', value: 70 },
        { skill: 'Express', value: 70 },
        { skill: 'Unity', value: 60 }
    ];



    const renderPgbar = () => {

        return skillSet.map((set) => {
            const numberOfHash = set.value / 5;
            const numberOfDot = 20 - numberOfHash;
            return (
                <Fragment>
                    <p className='text--sm'>{ set.skill } <span className='process-amount'>{ set.value }</span>%</p>
                    <Typewriter onInit={(typewriter: TypewriterClass) => {
                        typewriter.pauseFor(Math.random() * 2000)
                            .typeString('#'.repeat(numberOfHash))
                            .typeString('.'.repeat(numberOfDot))
                            .pauseFor(5000)
                            .start();
                    }} options={{ loop: true }} />
                </Fragment>
            )
        });
    };

    return (
        <div className='cyber-root'>
            <div className='terminal '>
                <div className='scanline'></div>
                <div className='hydra'>
                    <div className='hydra_rebooting right-panel'>
                        <p>&lt; SKILL SET &frasl;&gt;</p>
                        { renderPgbar() }
                        <p className='loading-bar'></p>
                    </div>
                    <div className='hydra_rebooting'>
                        <p>&lt; SYSTEM REBOOTING &frasl;&gt;</p>
                        <p className='text--sm'>HYDRA VER 2.1 SYS RECOVERY</p>
                        <p className='text--sm'>PROCESS: <span className='process-amount'>0</span>%</p>
                        <p className='text--sm'><span className='process-amount'>####</span></p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AboutCyber;