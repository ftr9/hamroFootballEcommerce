import { connect } from 'react-redux';
import { useEffect, useState } from 'react';
const OrderCartstatus = ({ status, socket }) => {

    const [orderState, setOrderState] = useState(status);



    useEffect(() => {
        socket.on("orderChangedByAdmin", (data) => {
            setOrderState(data);
        });
        return () => {
            socket.removeAllListeners(["orderChangedByAdmin"]);
        }
    }, [socket]);

    const checkForNotSeenStatus = () => {
        if (orderState.includes('not') || orderState === 'seen' || orderState === 'Onway' || orderState === 'delivered') {
            return 'ACTIVE';
        } else {
            return '';
        }
    }
    const checkForSeenStatus = () => {
        if (orderState === 'seen' || orderState === 'Onway' || orderState === 'delivered') {
            return 'ACTIVE';
        } else {
            return '';
        }
    }
    const checkForOnwayStatus = () => {
        if (orderState === 'Onway' || orderState === 'delivered') {
            return 'ACTIVE';
        } else {
            return '';
        }
    }
    const checkForForDeliveredStatus = () => {
        if (orderState === 'delivered') {
            return 'ACTIVE';
        } else {
            return '';
        }
    }

    return (
        <div className="OrderCart__status">

            <div className="OrderCart__status--content">
                <div className={`OrderCart__status--bubble ${checkForNotSeenStatus()}`}></div>
                <p>unseen</p>
            </div>

            <div className={`OrderCart__status--line ${checkForSeenStatus()}`} ></div>

            <div className="OrderCart__status--content">
                <div className={`OrderCart__status--bubble ${checkForSeenStatus()}`}></div>
                <p>seen</p>
            </div>

            <div className={`OrderCart__status--line ${checkForOnwayStatus()}`}></div>

            <div className="OrderCart__status--content">
                <div className={`OrderCart__status--bubble ${checkForOnwayStatus()}`}></div>
                <p>Onway</p>
            </div>

            <div className={`OrderCart__status--line ${checkForForDeliveredStatus()}`}></div>

            <div className="OrderCart__status--content">
                <div className={`OrderCart__status--bubble ${checkForForDeliveredStatus()}`}></div>
                <p>delivered</p>
            </div>
        </div>
    )
}

const mapStateToProp = (state) => {
    return {
        socket: state.socket
    }
}

export default connect(mapStateToProp)(OrderCartstatus);
