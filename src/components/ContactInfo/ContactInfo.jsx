import './ContactInfo.scss';
import Button from '../Button/Button.jsx';
import EmailIcon  from '../../assets/icons/mail.png';
import LinkedinIcon  from '../../assets/icons/linkedin.png';

//import LinkedinTag  from '../../assets/icons/Alert.svg';
import FacebookIcon  from '../../assets/icons/facebook.png';
import Githubcon  from '../../assets/icons/github.png';
function ContactInfo({ }) {
    return (
        <div className='contact_area'>
            <h1> Contact Me </h1>
            <div className='social-area'>
                <div className='email-area'>
                    <Button
                        icon= {EmailIcon}
                        onClick={() => window.open("https://mail.google.com/mail", "_blank")}
                        variant="ContactIcon"
                    />
                    <p> wslycxm@yahoo.ca</p>
                </div>
                <div className='other_social-area'>
                    <Button
                        icon= {LinkedinIcon}
                       onClick={() => window.open("https://www.linkedin.com/in/shilong-wang-ca", "_blank")}
                        variant="ContactIcon"
                    />
                    <Button
                        icon= {FacebookIcon}
                        onClick={() => window.open("https://www.facebook.com/mike.wang.7965/", "_blank")}
                        variant="ContactIcon"
                        />
                     <Button
                        icon= {Githubcon}
                        onClick={() => window.open("https://github.com/wslyyvr", "_blank")}
                        variant="ContactIcon"
                    />
                </div>

            </div>
        </div>
    )
}


export default ContactInfo;