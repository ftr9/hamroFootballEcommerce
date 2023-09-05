import './Home.css';
import Anchorbutton from '../../button/Anchorbutton';
import Solidbutton from '../../button/Solidbutton';
import Imagebutton from '../../button/Imagebutton';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

//action creators
import {
  AUTHENTICATION,
  AUTHENTICATION__LOGOUT,
} from '../../../redux/actions/index';

const Home = props => {
  const { userInfo, AUTHENTICATION, AUTHENTICATION__LOGOUT, socket } = props;
  const history = useNavigate();

  useEffect(() => {
    AUTHENTICATION();
  }, [AUTHENTICATION]);

  const return_Button_On_UserStatus = () => {
    switch (userInfo.status) {
      case 'logged':
        socket.emit('userRoomId', userInfo.user._id);
        return (
          <Imagebutton
            content="Logout"
            imageurl={userInfo.user.picture}
            onClicked={() => AUTHENTICATION__LOGOUT()}
          />
        );
      case 'notlogged':
        return (
          <Anchorbutton
            content={'Login'}
            link={`/auth/google/login`}
            icon={<ion-icon name="log-in"></ion-icon>}
          />
        );
      default:
        return <Solidbutton content="Loading..." />;
    }
  };

  return (
    <div className="Home">
      <div className="Home__top">
        <div className="Home__top--left">
          {userInfo.status === 'logged' ? userInfo.user.name : 'guest'}
        </div>
        <div className="Home__top--right">{return_Button_On_UserStatus()}</div>
      </div>

      <div className="Home__middle">
        <div className="Home__middle--content">
          <div className="Home__middle--contenttitle">
            Buy Once Play Anytime Everywhere
          </div>
          <p>
            Want to buy best football at your price with high quality,durable
            then you are at right site feel free to check everything.It is a
            long established fact that a reader will be distracted by the
            readable content of a page when looking at its layout. The point of
            using
          </p>
          <Solidbutton
            content="Shop now "
            icon={<ion-icon name="bag-add"></ion-icon>}
            onClicked={() => history('/products')}
          />
        </div>
        <div className="Home__middle--image">
          <img src="/images/budiaama.png" alt="character"></img>
        </div>
      </div>

      <div className="Home__bottom">
        <Solidbutton
          content="Admin ?"
          icon={<ion-icon name="person-circle"></ion-icon>}
          onClicked={() => history('/admin')}
        />
      </div>
    </div>
  );
};

const mapStateToProp = state => {
  return {
    userInfo: state.userInfo,
    socket: state.socket,
  };
};

export default connect(mapStateToProp, {
  AUTHENTICATION,
  AUTHENTICATION__LOGOUT,
})(Home);
