const OrderCartstatus = ({ status }) => {
    return (
        <div className="OrderCart__status">

            <div className="OrderCart__status--content">
                <div className={`OrderCart__status--bubble ${status.includes('not') ? 'ACTIVE' : ''}`}></div>
                <p>unseen</p>
            </div>

            <div className={`OrderCart__status--line ${status === 'seen' ? 'ACTIVE' : ''}`} ></div>

            <div className="OrderCart__status--content">
                <div className={`OrderCart__status--bubble ${status === 'seen' ? 'ACTIVE' : ''}`}></div>
                <p>seen</p>
            </div>

            <div className={`OrderCart__status--line ${status === 'Onway' ? 'ACTIVE' : ''}`}></div>

            <div className="OrderCart__status--content">
                <div className={`OrderCart__status--bubble ${status === 'Onway' ? 'ACTIVE' : ''}`}></div>
                <p>Onway</p>
            </div>

            <div className={`OrderCart__status--line ${status === 'delivered' ? 'ACTIVE' : ''}`}></div>

            <div className="OrderCart__status--content">
                <div className={`OrderCart__status--bubble ${status === 'delivered' ? 'ACTIVE' : ''}`}></div>
                <p>delivered</p>
            </div>
        </div>
    )
}

export default OrderCartstatus
