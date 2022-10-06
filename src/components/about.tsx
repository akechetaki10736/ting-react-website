import './css/about.css';
import { Fragment } from 'react';

interface SkillSet {
    skill: string;
    value: number;
};

const About:React.FC = () => {
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
            return (
                <div className='progress-container' data-text={ `${ set.value }%` } key={ set.skill }>
                    <span className='skill-name'>{ set.skill }</span>
                    <progress className='progress is-info is-small pgbar' value={ set.value } max="100" />
                </div>
            )
        })
    }

    return (
        <Fragment>
        <div className='box'>
            <div className='pgbars'>
            {/* <span className='tag is-dark is-normal'>Primary</span>
            <progress className='progress is-info is-normal pgbar' value="80" max="100">20%</progress> */}
            { renderPgbar() }
            </div>
            <article className='message is-dark about'>
                <div className='message-body'>
                    <h1>—About me—</h1>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. A eligendi quaerat architecto at assumenda dignissimos, nemo vitae. Nisi minima aperiam, blanditiis impedit neque tempore sed explicabo odio deleniti ullam expedita!Lorem ipsum, dolor sit amet consectetur adipisicing elit. A eligendi quaerat architecto at assumenda dignissimos, nemo vitae. Nisi minima aperiam, blanditiis impedit neque tempore sed explicabo odio deleniti ullam expedita!Lorem ipsum, dolor sit amet consectetur adipisicing elit. A eligendi quaerat architecto at assumenda dignissimos, nemo vitae. Nisi minima aperiam, blanditiis impedit neque tempore sed explicabo odio deleniti ullam expedita!
                </div>
            </article>
        </div>
        </Fragment>
    );
};

export default About;