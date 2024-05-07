import Data from '../../Data/index.json';
import "./Skills.css";

function MySkills(){
    return(
        <section className='skills--section' id='myskills'>
            <div className='portfolio container'>
                <p className='skills--tittle'>My skills</p>
                <h2 className='skills--section--heading'>My Expertise</h2>
            </div>
            <div key={""} className='skills--section--container'>
                {Data?.skills?.map((item, index) =>(
                    <div className='skills--section--card'>
                        <div className='skills--section--img'>
                            <img src={item.src} alt='Product Chain'  width="100px" height="100px"/>
                        </div>
                        <div className='skills--section--card--content'>
                            <h3 className='skills--section--title'>{item.title}</h3>
                            <p className='skills--section--description'>{item.description}</p>
                        </div>
                    </div>                   
                ))}
            </div>
        </section>
    )
}

export default MySkills;