import Orderedcart from '../../Orderedcart';
import Solidbutton from '../../button/Solidbutton';
import OrderCartstatus from '../OrderCartstatus';
import axios from 'axios';
import { useEffect, useState } from 'react';
import './Myorder.css';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
const Myorder = ({ socket }) => {
  const [myOrders, setMyOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const history = useNavigate();

  useEffect(() => {
    (async () => {
      const orders = await axios.get('/api/v1/hamrofootball/myorders');
      if (orders.data.status === 'success') {
        setLoading(false);
        setMyOrders(orders.data.orders);
      }

      if (orders.data.status === 'fail') {
        toast.warn('You are not logged in Please login  !!!!');
        history('/');
      }
    })();
  }, [history]);

  const returnTotalPrice = order => {
    let sum = 0;
    order.forEach(el => {
      sum += el.price;
    });
    return sum;
  };

  const returnOrdersUI = () => {
    if (loading) {
      return 'LOADING ...';
    }

    if (myOrders.length !== 0) {
      return myOrders.map(el => {
        return (
          <div className="OrderCart" key={el._id}>
            <div className="OrderCart__id"># {el._id}</div>
            <div className="OrderCart__underline"></div>

            <div className="OrderCart__orders">
              {Object.values(el.orders).map(el => {
                return (
                  <Orderedcart
                    key={el.id}
                    price={el.price}
                    name={el.name}
                    selectedSize={el.selectedSize}
                    quantitys={el.quantitys}
                    imageName={el.imageName}
                    category={el.category}
                  />
                );
              })}
            </div>

            <div className="OrderCart__underline"></div>

            <div className="OrderCart__totaldisplay">
              <h3>{el.paymentType}</h3>
              <Solidbutton
                content={`total  ${returnTotalPrice(
                  Object.values(el.orders)
                )}-/`}
              />
            </div>

            <OrderCartstatus status={el.orderStatus} />
          </div>
        );
      });
    } else {
      return (
        <div className="myOrders__noorder">
          <h3>You have no orders currently</h3>
          <div className="myOrder__noorder_img">
            <img src={'/images/emptyCart.png'} alt={'empty cart'}></img>
          </div>
        </div>
      );
    }
  };

  return <div className="myOrders">{returnOrdersUI()}</div>;
};

export default Myorder;
