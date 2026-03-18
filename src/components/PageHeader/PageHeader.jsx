import './PageHeader.scss';
import Button from '../Button/Button.jsx';
//import HeaderImage from '../../assets/images/HeaderPic.png';
//import UserIconTag from '../../assets/icons/User.svg';
import resume from '../../assets/Mike_Wang_Resume.pdf';

function PageHeader({ }) {
  //const navigate = useNavigate();

  return (
    <div className="header" >
      <h1>Mike's Portfilio</h1>
      <p>Where Code Becomes Art</p>
      <Button
        text="Resume Download"
        onClick={() => {
          const link = document.createElement("a");
          link.href = resume;
          link.download = "Mike_Wang_Resume.pdf";
          link.click();
        }}
        initialBackgroundColor="#3967dd"
        initialColor="#ffffff"
        variant="ResumeButton"
      />
    </div>

  );
}

export default PageHeader;
