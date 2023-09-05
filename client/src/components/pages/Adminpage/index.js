import './Adminpage.css';
import Solidbutton from '../../button/Solidbutton';
import Orderedcart from '../../Orderedcart';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { connect, useSelector } from 'react-redux';
import useAuth from '../../hooks/useAuth';
import { toast } from 'react-toastify';

const useFetchOnLogin = () => {
  const [isfetching, setFetching] = useState(true);
  const [orders, setOrders] = useState([]);
  const { status: authStatus, user } = useSelector(state => state.userInfo);

  useEffect(() => {
    //if user is not logged in then do not fetch
    if (authStatus !== 'logged') {
      return;
    }

    //if user s logged in but is not admin then do not fetch
    if (!user['https://example.com/roles'].includes('admin')) {
      return;
    }
    (async () => {
      try {
        const orders = await axios.get('/api/v1/hamrofootball/adminorders');
        setOrders(orders.data.orders);
      } catch (err) {
        console.log(err);
      } finally {
        setFetching(false);
      }
    })();
  }, [authStatus, user]);

  return { isfetching, orders, setOrders };
};

const Adminpage = ({ socket }) => {
  const { isAuthenticating } = useAuth();
  const history = useNavigate();
  const { status: authStatus, user } = useSelector(state => state.userInfo);
  const { isfetching, orders, setOrders } = useFetchOnLogin();

  useEffect(() => {
    //if no auth status is null do nothing

    if (!authStatus) {
      return;
    }

    //if user is not logged in redirect to home page
    if (authStatus === 'notlogged' && !isAuthenticating) {
      history('/');
      return;
    }

    //if user is logged in and admin then socket connection otherwise home page

    if (
      authStatus === 'logged' &&
      user['https://example.com/roles'].includes('admin')
    ) {
      socket.emit('userRoomId', 'admin123456');
    } else {
      toast.warn('You are not authorized to access Admin page  !!!');
      history('/');
    }
  }, [socket, authStatus, user, history, isAuthenticating]);

  if (isAuthenticating) {
    return <h1>Authenticating....</h1>;
  }

  if (isfetching) {
    return <h1>Fetching Orders....</h1>;
  }

  const onLogoutClicked = () => {
    history('/');
  };

  const returnTotalPrice = order => {
    let sum = 0;
    order.forEach(el => {
      sum += el.price;
    });
    return sum;
  };

  const onDelete = async id => {
    const deletedOrder = await axios.post(
      `/api/v1/hamrofootball/deleteorder/${id}`
    );
    if (deletedOrder.data.status !== 'fail') {
      const orderLeft = orders.filter(
        el => deletedOrder.data.order._id !== el._id
      );
      setOrders(orderLeft);
    }
  };

  const onStatusOptionChange = (userEmail, orderId, orderState) => {
    console.log(userEmail, orderId, orderState);
    socket.emit('orderStatusChange', {
      userEmail,
      orderId,
      orderState,
    });
  };

  const renderUI = () => {
    return orders.map(el => {
      return (
        <div className="Adminpage__ordercard" key={el._id}>
          <div className="Adminpage__ordercardtop">
            <p>{el?._id}</p>
            <p>{el?.userId?.name}</p>
            <Solidbutton
              content="delete"
              icon={<ion-icon name="trash"></ion-icon>}
              onClicked={() => onDelete(el._id)}
            />
          </div>
          <div className="Adminpage__ordercardbody">
            <div className="Adminpage__ordercardleft">
              {Object.values(el.orders).map(el => {
                return (
                  <Orderedcart
                    key={el?.id}
                    price={el?.price}
                    name={el?.name}
                    selectedSize={el?.selectedSize}
                    quantitys={el?.quantitys}
                    imageName={el?.imageName}
                    category={el?.category}
                  />
                );
              })}
            </div>
            <div className="Adminpage__ordercardright">
              <div className="Adminpage__location">
                <div className="Adminpage__location--place">{el.location}</div>
                <div className="Adminpage__location--latlong">{el.phone}</div>
                <div className="Adminpage__location--latlong">
                  {el.paymentType}
                </div>
              </div>
              <div className="Adminpage__buttons">
                <select
                  className="Adminpage__select"
                  defaultValue={el.orderStatus}
                  onChange={e =>
                    onStatusOptionChange(el.userEmail, el._id, e.target.value)
                  }
                >
                  <option>not Seen</option>
                  <option>seen</option>
                  <option>Onway</option>
                  <option>delivered</option>
                </select>
                <Solidbutton
                  content={`Total ${returnTotalPrice(
                    Object.values(el.orders)
                  )}-/`}
                />
              </div>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="Adminpage">
      <div className="Adminpage__top">
        <div className="Adminpage__toprole">Admin</div>
        <Solidbutton content="Log out" onClicked={onLogoutClicked} />
      </div>

      <div className="Adminpage__body">{renderUI()}</div>
    </div>
  );
};

const mapStateToProp = state => {
  return {
    socket: state.socket,
  };
};

export default connect(mapStateToProp)(Adminpage);
