import './Anchorbutton.css';
const Anchorbutton = ({ icon, content, link }) => {
    return (
        <a href={link} className='Anchorbutton'>
            {content}
            {icon}
        </a>
    )
}

export default Anchorbutton
