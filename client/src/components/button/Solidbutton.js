import './Solidbutton.css';
const Solidbutton = ({ content, icon, color, onClicked }) => {



    return (
        <div className="Solidbutton" style={{ backgroundColor: color }} onClick={onClicked}>
            {content}
            {icon}
        </div>
    )
}

export default Solidbutton
