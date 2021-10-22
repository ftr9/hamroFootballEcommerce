import './Solidbutton.css';
const Solidbutton = (props) => {

    const { content, icon } = props;

    return (
        <div className="Solidbutton">
            <div className="Solidbutton__content">
                {content}
            </div>
            <div className="Solidbutton__icon">
                {icon}
            </div>
        </div>
    )
}

export default Solidbutton
