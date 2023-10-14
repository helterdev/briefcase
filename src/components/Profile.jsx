const Profile = () => {
    return(
        <section className="profile-div">
            <div className="profile">
            <div className="profile__container">
                <article className="article">
                    <div className="article__container">
                        <h1>
                            <span>
                                FrontEnd
                                <br/>
                                Developer
                                <span>.</span>
                            </span>
                        </h1>
                        <p className="article__paragrah">
                            Hello!<br/> My name is Helter Conforme Velez and I am a frontend developer.
                            <br />
                            
                            I like to create modern, robust and scalable frontend products based on the best possible user experience.
                        </p>
                    </div>
                    <div className="about-me">
                        <ul className="about-me__container">
                            <li>I maintain constant training on the latest web technologies</li>
                            <li>I have worked on personal projects seeking to improve my skills 
                                 focused on creating products that are beneficial on a daily basis.
                            </li>
                        </ul>
                    </div>
                </article>
            </div>
            <div className="profile__photo">
                <figure className="photo-container">
                    
                     <img className="photo-container__photo" src="/profile.jpeg" alt="profile" title="profile"></img>               
                    
                </figure>     
            </div>
            </div>
        </section>

    )
}

export default Profile;