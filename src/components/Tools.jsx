import ToolsMotion from "./animations/tools_motion";
import {AiFillHtml5} from "react-icons/ai";
import {DiCss3,DiSass} from 'react-icons/di';
import {BiLogoJavascript,BiLogoReact,BiLogoRedux, BiLogoTailwindCss,
    BiLogoTypescript,BiLogoGit,BiLogoGithub,BiLogoFigma,BiLogoTrello} from 'react-icons/bi';

const Tools = () => {
    return (
        <section className="tools-section">
            <div className="tools">
            <div className="tools-container">
                <h2 className="tools-container__title">Engineering</h2>
                <p className="tools-container__paragrah">When creating JavaScript applications, 
                    I have the skills and knowledge of the most modern tools for the creation of a fast, 
                    scalable and satisfactory user experience product.
                </p>
            </div>
            <div className="tools-description">
                <h2 className="tools-description__title">Tools</h2>
                <ul className="tools-description__container">
                    <ToolsMotion label={"html"}>
                        <AiFillHtml5 className="tools-icons tools-icons--html"/>
                        <p>HTML</p>
                    </ToolsMotion>
                    <ToolsMotion label={"css"}>
                        <DiCss3 className="tools-icons tools-icons--css"/>
                        <p>css</p>
                    </ToolsMotion>
                    <ToolsMotion>
                        <BiLogoJavascript className="tools-icons tools-icons--javascript"/>
                        <p>javascript</p>
                    </ToolsMotion>
                    <ToolsMotion>
                        <BiLogoReact className="tools-icons tools-icons--react"/>
                        <p>react</p>
                    </ToolsMotion>
                    <ToolsMotion>
                        <BiLogoRedux className="tools-icons tools-icons--redux"/>
                        <p>reduxtookit</p>
                    </ToolsMotion>
                    <ToolsMotion>
                        <DiSass className="tools-icons tools-icons--sass"/>
                        <p>sass</p>
                    </ToolsMotion>
                    <ToolsMotion>
                        <BiLogoTailwindCss className="tools-icons tools-icons--tailwind"/>
                        <p>taildwindcss</p>
                    </ToolsMotion>
                    <ToolsMotion>
                        <BiLogoTypescript className="tools-icons tools-icons--typescript"/>
                        <p>typescript</p>
                    </ToolsMotion>
                    <ToolsMotion>
                        <BiLogoGit className="tools-icons tools-icons--git"/>
                        <p>git</p>
                    </ToolsMotion>
                    <ToolsMotion>
                        <BiLogoGithub className="tools-icons tools-icons--github"/>
                        <p>gitHub</p>
                    </ToolsMotion>
                    <ToolsMotion>
                        <BiLogoFigma className="tools-icons tools-icons--figma"/>
                        <p>figma</p>
                    </ToolsMotion>
                    <ToolsMotion>
                        <BiLogoTrello className="tools-icons tools-icons--trello"/>
                        <p>trello</p>
                    </ToolsMotion>
                </ul>
            </div>
            </div>
        </section>
    )
}

export default Tools;