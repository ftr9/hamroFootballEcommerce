import './Adminpage.css';
import Solidbutton from '../button/Solidbutton';
import Orderedcart from '../Orderedcart';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import axios from 'axios';
import { connect } from 'react-redux';

const Adminpage = ({ socket }) => {

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        let data = prompt("Enter the passcode ...");
        while (data !== '134') {
            data = prompt("Enter the passcode");
        }
        //make admin room id
        socket.emit("userRoomId", "admin123456");

        //fetch all order from database
        (async () => {
            const orders = await axios.get("/api/v1/hamrofootball/adminorders");
            setOrders(orders.data.orders);
        })();

    }, [socket]);

    const history = useHistory();

    const onLogoutClicked = () => {
        history.push("/");
    }

    const returnTotalPrice = (order) => {
        let sum = 0;
        order.forEach(el => {
            sum += el.price;
        });
        return sum;
    }


    const onDelete = async (id) => {
        const deletedOrder = await axios.post(`/api/v1/hamrofootball/deleteorder/${id}`);
        if (deletedOrder.data.status !== 'fail') {
            const orderLeft = orders.filter(el => deletedOrder.data.order._id !== el._id);
            setOrders(orderLeft);
        }
    }

    const onStatusOptionChange = (userid, orderId, orderState) => {
        socket.emit("orderStatusChange", {
            userid,
            orderId,
            orderState
        })
    }

    const renderUI = () => {
        if (orders.length !== 0) {
            return orders.map((el) => {
                return (
                    <div className="Adminpage__ordercard" key={el._id}>
                        <div className="Adminpage__ordercardtop">
                            <p>{el._id}</p>
                            <p>{el.userId.name}</p>
                            <Solidbutton content="delete" icon={<ion-icon name="trash"></ion-icon>} onClicked={() => onDelete(el._id)} />
                        </div>
                        <div className="Adminpage__ordercardbody">
                            <div className="Adminpage__ordercardleft">
                                {
                                    Object.values(el.orders).map((el) => {
                                        return <Orderedcart key={el.id} price={el.price} name={el.name} selectedSize={el.selectedSize} quantitys={el.quantitys} imageName={el.imageName} category={el.category} />
                                    })

                                }
                            </div>
                            <div className="Adminpage__ordercardright">
                                <div className="Adminpage__location">
                                    <div className="Adminpage__location--place">{el.location}</div>
                                    <div className="Adminpage__location--latlong">{el.phone}</div>
                                </div>
                                <div className="Adminpage__buttons">
                                    <select className="Adminpage__select" defaultValue={el.orderStatus} onChange={(e) => onStatusOptionChange(el.userId._id, el._id, e.target.value)}>
                                        <option>not Seen</option>
                                        <option>seen</option>
                                        <option>Onway</option>
                                        <option>delivered</option>
                                    </select>
                                    <Solidbutton content={`Total ${returnTotalPrice(Object.values(el.orders))}-/`} />
                                </div>

                            </div>
                        </div>
                    </div>


                )
            })
        }
    }

    return (
        <div className="Adminpage">
            <div className="Adminpage__top">
                <div className="Adminpage__toprole">Admin</div>
                <Solidbutton content="Log out" onClicked={onLogoutClicked} />
            </div>

            <div className="Adminpage__body">


                {
                    renderUI()
                }





            </div>

        </div>
    )
}

const mapStateToProp = (state) => {
    return {
        socket: state.socket
    }
}

export default connect(mapStateToProp)(Adminpage);
