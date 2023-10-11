import Button from "./animations/botton";
import {IoSend} from 'react-icons/io5';

const ContactMe = () => {
    return (
        <section className="section-form">
            <div className="form-container">
                <h2>Contact Me</h2>
                <div className="form-div">
                <form className="form-div__form">
                    <div className="form-group">
                        <label htmlFor="name">Your Name</label>
                        <input type="text"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email"> Your Email</label>
                        <input type="email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Your message</label>
                        <textarea name="message" id="" cols="50" rows="10"></textarea>
                    </div>
                    <Button text={"Send"} icon={<IoSend style={{fill: "#f5f5f5"}}/>} type={"submit"}/>
                </form>
                </div>
            </div>
        </section>
    )
}

export default ContactMe;