import Orderedcart from '../Orderedcart';
import Solidbutton from '../button/Solidbutton';

import './Myorder.css';
const Myorder = () => {
    return (
        <div className="myOrders">
            <div className="OrderCart">
                <div className="OrderCart__id">{123454554545546}</div>
                <div className="OrderCart__underline"></div>

                <div className="OrderCart__orders">
                    <Orderedcart />
                    <Orderedcart />

                </div>


                <div className="OrderCart__underline"></div>

                <div className="OrderCart__totaldisplay">
                    <Solidbutton content={"total  1400-/"} />
                </div>


                <div className="OrderCart__status">

                    <div className="OrderCart__status--content">
                        <div className="OrderCart__status--bubble"></div>
                        <p>unseen</p>
                    </div>

                    <div className="OrderCart__status--line"></div>

                    <div className="OrderCart__status--content">
                        <div className="OrderCart__status--bubble"></div>
                        <p>seen</p>
                    </div>

                    <div className="OrderCart__status--line"></div>

                    <div className="OrderCart__status--content">
                        <div className="OrderCart__status--bubble"></div>
                        <p>Onway</p>
                    </div>

                    <div className="OrderCart__status--line"></div>

                    <div className="OrderCart__status--content">
                        <div className="OrderCart__status--bubble"></div>
                        <p>delivered</p>
                    </div>
                </div>


            </div>

        </div>


    )
}

export default Myorder
