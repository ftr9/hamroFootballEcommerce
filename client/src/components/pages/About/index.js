import './About.css';
const About = () => {
    return (
        <div className="About">
            <div className="About__services">
                <div className="About__services__detail">
                    <ion-icon name="card"></ion-icon>
                    <h3>Online payment</h3>
                    <div className="About__description">
                        get the full advantage of paying digitally in cashless world
                    </div>
                </div>
                <div className="About__services__detail">
                    <ion-icon name="bicycle"></ion-icon>
                    <h3>Home delivery</h3>
                    <div className="About__description">
                        just checkout your product and it is available right on your door
                    </div>
                </div>
                <div className="About__services__detail">
                    <ion-icon name="timer"></ion-icon>
                    <h3>Quick and fast</h3>
                    <div className="About__description">
                        No need to wait for long time  delivery  is quite fast
                    </div>
                </div>
            </div>

            <div className="About__founder">
                <div className="About__founder--left">
                    <img src="images/league/WIN_20210718_08_34_56_Pro.jpg" alt="Developer - Rahul dotel"></img>
                </div>
                <div className="About__founder--right">
                    <div className="quote">"</div>Hello, its me rahul dotel <b>developer and founder</b> of HamroFoot.com . Feel free to check out every thing as this is the best platform to buy sports products.If you have any feedfack then  contact me  i will make the services available for you per wish .
                </div>
            </div>
        </div>
    )
}

export default About
