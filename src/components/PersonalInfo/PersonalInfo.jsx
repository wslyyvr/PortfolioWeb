import HeadShot from '../../assets/images/HeadPhoto.jpg';
import data from '../../assets/data.json';
import './PersonalInfo.scss';
import { useState, useEffect } from "react";

function PersonalInfo() {

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkScreen = () => {
            const width = window.innerWidth;
            setIsMobile(width >= 375 && width <= 767);
        };

        checkScreen(); // 初始化执行
        window.addEventListener("resize", checkScreen);

        return () => window.removeEventListener("resize", checkScreen);
    }, []);

    return (
        <div className="PersonalInfoDisplay">
            <img src={HeadShot} alt="HeadPic" className="head-img" />

            <div className='summary_resume'>
                <h2>About Me</h2>

                <ul>
                    {(isMobile ? data.about_mobile : data.about).map((item, index) => (
                        <li key={index} className="key-point_resume">
                            {item}
                        </li>
                    ))}
                </ul>

            </div>
            <div className='skill_block'>
                <h1>My Skills </h1>

                <div className='skill_display'>
                    {data.skills.map((row, index) => (
                        <div key={index} className="skill_row">
                            {row.map((skill, i) => (
                                <span key={i} className="skill_tag">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default PersonalInfo;