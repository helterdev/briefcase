const Button = ({text, icon, link, type}) => {
    return (
        <div className="button-container">
            <a href={`${link}`} target="_blank">
                <button className="Btn" type={type}>
                    <div className="sign">
                        {icon}
                    </div>
                    <div className="text">{text}</div>
                </button>
            </a>
        </div>
)
}

export default Button;