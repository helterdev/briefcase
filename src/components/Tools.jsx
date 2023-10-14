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
                    <a href="https://developer.mozilla.org/es/docs/Web/HTML" target="_blank">
                        <AiFillHtml5 className="tools-icons tools-icons--html"/>
                        <p>HTML</p>
                    </a>
                    </ToolsMotion>
                    <ToolsMotion label={"css"}>
                    <a href="https://developer.mozilla.org/es/docs/Web/CSS" target="_blank">
                        <DiCss3 className="tools-icons tools-icons--css"/>
                        <p>css</p>
                    </a>
                    </ToolsMotion>
                    <ToolsMotion>
                    <a href="https://developer.mozilla.org/es/docs/Web/JavaScript" target="_blank">
                        <BiLogoJavascript className="tools-icons tools-icons--javascript"/>
                        <p>javascript</p>
                    </a>
                    </ToolsMotion>
                    <ToolsMotion>
                    <a href="https://es.react.dev/" target="_blank">
                        <BiLogoReact className="tools-icons tools-icons--react"/>
                        <p>react</p>
                    </a>
                    </ToolsMotion>
                    <ToolsMotion>
                    <a href="https://redux-toolkit.js.org/" target="_blank">
                        <BiLogoRedux className="tools-icons tools-icons--redux"/>
                        <p>reduxtookit</p>
                    </a>
                    </ToolsMotion>
                    <ToolsMotion>
                    <a href="https://sass-lang.com/" target="_blank">
                        <DiSass className="tools-icons tools-icons--sass"/>
                        <p>sass</p>
                    </a>
                    </ToolsMotion>
                    <ToolsMotion>
                    <a href="https://tailwindcss.com/" target="_blank">
                        <BiLogoTailwindCss className="tools-icons tools-icons--tailwind"/>
                        <p>taildwindcss</p>
                    </a>
                    </ToolsMotion>
                    <ToolsMotion>
                    <a href="https://www.typescriptlang.org/" target="_blank">
                        <BiLogoTypescript className="tools-icons tools-icons--typescript"/>
                        <p>typescript</p>
                    </a>
                    </ToolsMotion>
                    <ToolsMotion>
                    <a href="https://git-scm.com/" target="_blank">
                        <BiLogoGit className="tools-icons tools-icons--git"/>
                        <p>git</p>
                    </a>
                    </ToolsMotion>
                    <ToolsMotion>
                    <a href="https://github.com/" target="_blank">
                        <BiLogoGithub className="tools-icons tools-icons--github"/>
                        <p>gitHub</p>
                    </a>
                    </ToolsMotion>
                    <ToolsMotion>
                    <a href="https://www.figma.com/" target="_blank">
                        <BiLogoFigma className="tools-icons tools-icons--figma"/>
                        <p>figma</p>
                    </a>
                    </ToolsMotion>
                    
                    <ToolsMotion>
                    <a href="https://trello.com/home" target="_blank">
                        <BiLogoTrello className="tools-icons tools-icons--trello"/>
                        <p>trello</p>
                    </a>
                    </ToolsMotion>
                    
                </ul>
            </div>
            </div>
        </section>
    )
}

export default Tools;