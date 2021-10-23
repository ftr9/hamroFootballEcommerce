import './Solidbutton.css';
const Solidbutton = ({ content, icon, color }) => {


    return (
        <div className="Solidbutton" style={{ backgroundColor: color }}>
            {content}
            {icon}
        </div>
    )
}

export default Solidbutton
