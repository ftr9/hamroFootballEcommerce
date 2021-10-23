import './Adminpage.css';
import Solidbutton from '../button/Solidbutton';
import Orderedcart from '../Orderedcart';
import { useEffect } from 'react';
const Adminpage = () => {

    useEffect(() => {
        let data = prompt("Enter the passcode ...");
        while (data !== '134') {
            data = prompt("Enter the passcode");
        }
    }, []);

    return (
        <div className="Adminpage">
            <div className="Adminpage__top">
                <div className="Adminpage__toprole">Admin</div>
                <Solidbutton content="Log out" />
            </div>

            <div className="Adminpage__body">

                <div className="Adminpage__ordercard">
                    <div className="Adminpage__ordercardtop">
                        <p>order 211321312323</p>
                        <p>rahul dotel</p>
                        <Solidbutton content="delete" icon={<ion-icon name="trash"></ion-icon>} />
                    </div>
                    <div className="Adminpage__ordercardbody">
                        <div className="Adminpage__ordercardleft">
                            <Orderedcart />
                        </div>
                        <div className="Adminpage__ordercardright">
                            <div className="Adminpage__location">
                                <div className="Adminpage__location--place">Pepsicola,kathmandu  suncity apartment</div>
                                <div className="Adminpage__location--latlong">Lat:30.5 long:45.56</div>
                            </div>
                            <div className="Adminpage__buttons">
                                <select className="Adminpage__select">
                                    <option>not Seen</option>
                                    <option>Seen</option>
                                    <option>on Way</option>
                                    <option>Delivered</option>
                                </select>
                                <Solidbutton content="Total 3400-/" />
                            </div>

                        </div>
                    </div>
                </div>







                <div className="Adminpage__ordercard">
                    <div className="Adminpage__ordercardtop">
                        <p>order 211321312323</p>
                        <p>rahul dotel</p>
                        <Solidbutton content="delete" icon={<ion-icon name="trash"></ion-icon>} />
                    </div>
                    <div className="Adminpage__ordercardbody">
                        <div className="Adminpage__ordercardleft">
                            <Orderedcart />
                        </div>
                        <div className="Adminpage__ordercardright">
                            <div className="Adminpage__location">
                                <div className="Adminpage__location--place">Pepsicola,kathmandu 35 near suncity apartment</div>
                                <div className="Adminpage__location--latlong">Lat:30.5 long:45.56</div>
                            </div>
                            <div className="Adminpage__buttons">
                                <select className="Adminpage__select">
                                    <option>not Seen</option>
                                    <option>Seen</option>
                                    <option>on Way</option>
                                    <option>Delivered</option>
                                </select>
                                <Solidbutton content="Total 3400-/" />
                            </div>

                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Adminpage
