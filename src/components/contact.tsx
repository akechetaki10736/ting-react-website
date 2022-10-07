import './css/contact.css';

const Contact = () => {
    const githubUrl = 'https://github.com/akechetaki10736';
    const linkedInUl = 'https://www.linkedin.com/in/tingi%C4%81u-k%C3%AC/';
    const autoreplyMessage = 'Dear Sender,\n\tThank you, I will reply asap.'

    return (
        <div className='contact-root'>
            <main className='container'>
                <form className='form' action='https://formsubmit.co/c3a163c9ad7c3c226dcbdab2db920913' method='POST'>
                    <div className='icon'>
                        <a title='github' href={ githubUrl } target='_blank' >
                            <i className='fa-brands fa-github fa-2xl'></i>
                        </a>
                        <a title='linkedIn' href={ linkedInUl } target='_blank' >
                            <i className='fa-brands fa-linkedin fa-2xl'></i>
                        </a>                     
                    </div>
                    <h1>Contact me&nbsp;</h1>
                    <div className='input'>
                        <input id='name' type='text' name='name' className='input__element' placeholder='Your name' required />
                    </div>
                    <div className='input'>
                        <input id='email' type='email' name='email' className='input__element' placeholder='Email' required />
                    </div>
                    <div className='input'>
                        <textarea name='message' placeholder='Message'/>
                    </div>
                    <input type="hidden" name="_autoresponse" value={ autoreplyMessage }></input>
                    <button type='submit' className='button' onClick={ () => console.log('click') }>
                        <div className='button__label'>Submit</div>
                        <div className='button__icon'>{'>'}</div>
                    </button>
                </form>
            </main>
        </div>
    );
};

export default Contact;