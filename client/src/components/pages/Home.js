import './Home.css';
import Anchorbutton from '../button/Anchorbutton';
const Home = () => {
    return (
        <div className="Home">

            <div className="Home__top">
                <div className="Home__top--left">
                    Guest
                </div>
                <div className="Home__top--right">
                    <Anchorbutton content={"Login"} link={"#"} icon={<ion-icon name="log-in"></ion-icon>} />
                </div>
            </div>

            <div className="Home__middle">
                <div className="Home__middle--content">
                    <div className="Home__middle--contenttitle">
                        Buy Once Play Anytime Everywhere
                    </div>
                    <p>Want to buy best football at your price with high quality,durable then you are at right site feel free to check everything.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using</p>
                    <Anchorbutton content="Shop now" icon={<ion-icon name="bag-add"></ion-icon>} />
                </div>
                <div className="Home__middle--image">
                    <img src="/images/budiaama.png" alt="character"></img>
                </div>
            </div>

            <div className="Home__bottom">
                <Anchorbutton icon={<ion-icon name="person-circle"></ion-icon>} content="Admin ?" />
            </div>
        </div>
    )
}

export default Home
