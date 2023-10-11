import Button from "./animations/botton";
import {BsCodeSlash} from 'react-icons/bs';
import {MdPreview} from 'react-icons/md';



const Projects = () => {
    return (
        <section className="projects">
            <div className="projects-container">
                <h2 className="projects-container__title">Projects</h2>
                <div className="projects-container__div">
                    <div className="projects-card">
                        <div className="projects-card__secundary">
                            <div className="card-container">
                                <h3>Pelifast</h3>
                                <p>
                                    Website that compiles information on the best-rated or currently broadcast movies and series.<br/>
                                    Developed with technologies such as React + Vite, Sass, Material UI, Context API, TailwindCss.
                                </p>
                                <div className="card-container__link">
                                    <Button text={"Code"} icon={<BsCodeSlash className="ico"/>} type={"button"} link={"https://github.com/helterdev/Pelifast"}/>
                                    <Button text={"Preview"} icon={<MdPreview className="ico"/>} type={"button"} link={"https://pelifast.vercel.app/"}/>
                                </div>
                                </div>
                            
                            
                        </div>
                    </div>
                    <div className="projects-card">
                        <div className="projects-card__secundary">
                            <div className="card-container">
                                <h3>Frontend technical test</h3>
                                <p>
                                    It is a single page of a specific product that is adaptable to all devices.<br/>
                                    Developed with technologies such as React + Vite, Sass, Material UI, TailwindCss.
                                </p>
                                <div className="card-container__link">
                                    <Button text={"Code"} icon={<BsCodeSlash className="ico"/>} type={"button"} link={"https://github.com/helterdev/prueba-tecnica"}/>
                                    <Button text={"Preview"} icon={<MdPreview className="ico"/>} type={"button"} link={"https://prueba-tecnica-weld.vercel.app/"}/>
                                </div>
                                </div>
                            
                            
                        </div>
                    </div>
                    <div className="projects-card">
                        <div className="projects-card__secundary">
                            <div className="card-container">
                                <h3>Simple virtual store</h3>
                                <p>
                                    Challenge met as part of the Oracle One program, creating a website that simulates a virtual store.<br/>
                                    Developed with technologies such as HTML, CSS y JavaScript.
                                </p>
                                <div className="card-container__link">
                                    <Button text={"Code"} icon={<BsCodeSlash className="ico"/>} type={"button"} link={"https://github.com/helterdev/AluraGeek"}/>
                                    <Button text={"Preview"} icon={<MdPreview className="ico"/>} type={"button"} link={"https://helterdev.github.io/AluraGeek/"}/>
                                </div>
                                </div>
                            
                            
                        </div>
                    </div>
                    
                </div>
            </div>
            
            
        </section>
    )
}

export default Projects;