import HeadShot from '../../assets/images/HeadPhoto.jpg';
import data from '../../assets/data.json';
import './PersonalInfo.scss';

function PersonalInfo({ }) {
    //const navigate = useNavigate();

    return (
        <div className="PersonalInfoDisplay" >
            <img src={HeadShot} alt="HeadPic" className="head-img" />
            <div className='summary_resume'>
                <h2>About Me</h2>
                <ul>
                    {data.about.map((item, index) => (
                        <li key={index} className="key-point_resume">
                            {item}
                        </li>
                    ))}
                </ul>
            </div >
        </div>

    );
}

export default PersonalInfo;
