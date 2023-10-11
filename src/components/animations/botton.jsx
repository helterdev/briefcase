const Button = ({text, icon, link, type}) => {
    return (
<a href={`${link}`} target="_blank">
    <button className="Btn" type={type}>
        <div className="sign">
            {icon}
        </div>
    
    <div className="text">{text}</div>
    </button>
</a>
)
}

export default Button;