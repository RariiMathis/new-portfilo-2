import { useState, useEffect } from 'react';
import jsonData from "../../data/index.json";

export default function MySkills() {
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        setSkills(jsonData.skills);
    }, []);

    return (
        <section className="skills--section" id="mySkills">
           <div className='portfolio--container'>
            <p className='section--title'>My Skills</p>
            <h2 className='skills--section--heading'>My Expertise</h2>
           </div>
           <div className='skills--section--container'>
               {skills.map((item, index) => (
                   <div key={index} className='skills--section--item'>
                       <div className='skills--section--img'>
                           <img src={item.src} alt="Product Chain" />
                       </div>
                       <div className='skills--section--card--content'>
                           <h3 className='skills--section--title'>
                               {item.title}
                           </h3>
                           <p>{item.description}</p>
                       </div>
                   </div>
               ))}
           </div>
        </section>
    );
}

