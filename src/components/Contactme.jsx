import { useForm } from "react-hook-form";
import Button from "./animations/botton";
import {IoSend} from 'react-icons/io5';
import { useRef } from "react";
import emailjs from '@emailjs/browser';
import { Toaster, toast } from "sonner";

const ContactMe = () => {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const form = useRef();
    const onSubmit = async () => {
       try {
        const status = await emailjs.sendForm('service_xuzlzjd', 'template_5owo3am', form.current, 'TLu51gSYn9BwBxWJK')
        if(status.status === 200){
            toast.success('Enviado');
        }
       } catch (error) {
        toast.error('Error con el servidor, por favor intente luego');
       }
    }
    
    

    return (
        <section className="section-form">
            <div className="form-container">
                <h2>Contact Me</h2>
                <div className="form-div">
                <form className="form-div__form" onSubmit={handleSubmit(onSubmit)} ref={form}>
                    <div className="form-group">
                        <label htmlFor="name">Your Name</label>
                        <input type="text" name="user_name" id="user_name"  {...register("user_name", {
                            required: {
                                value: true, 
                                message: `Permíteme saber tú nombre`
                            },
                            minLength: {
                                value: 3,
                                message: 'El nombre de ser de minímo 3 carácteres'
                            },
                            maxLength: {
                                value: 20,
                                message: 'El nombre no debe contener más de 20 carácteres'
                            }
                            },
                            
                        )
                        }/>
                        {errors.user_name && <span className="message-error">{errors.user_name.message}</span>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="email"> Your Email</label>
                        <input type="email" id="email" name="user_email"{...register("user_email", {
                            required: {
                                value: true,
                                message: 'Permíteme un correo para poder contactarte'
                            },
                            pattern: {
                                value: '[a-z0-9]+@[a-z]+\.[a-z]{2,3}',
                                message: "Debe contener el siguiente formato"
                            }
                        })}/>
                        {errors.user_email && <span className="message-error">{errors.user_email.message}</span>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Your message</label>
                        <textarea name="message" id="message" cols="50" rows="10" {...register("message", {
                            required: {
                                value: true,
                                message: 'Ayúdame con un mensaje'
                            },
                            maxLength: 200
                        })}></textarea>
                        {errors.message && <span className="message-error">{errors.message.message}</span>}
                    </div>
                    <Button text={"Send"} icon={<IoSend style={{fill: "#f5f5f5"}}/>} type={"submit"} link={"#"}/>
                </form>
                </div>
            </div>
            <Toaster richColors position="top-right"/>
        </section>
    )
}

export default ContactMe;