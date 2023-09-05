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
            No need to wait for long time delivery is quite fast
          </div>
        </div>
      </div>

      <div className="About__founder">
        <div className="About__founder--left">
          <img
            src="images/league/WIN_20210718_08_34_56_Pro.jpg"
            alt="Developer - Rahul dotel"
          ></img>
        </div>
        <div className="About__founder--right">
          <div className="quote">"</div>We are delighted to introduce ourselves
          as the developers and founders of HamroFoot.com. We take immense pride
          in offering you the best platform for purchasing sports products. Your
          satisfaction is our utmost priority. We value your feedback and
          welcome any suggestions to enhance your experience. Please feel free
          to contact us with your thoughts and requirements, and we will do our
          best to tailor our services to your preferences.
        </div>
      </div>
    </div>
  );
};

export default About;
