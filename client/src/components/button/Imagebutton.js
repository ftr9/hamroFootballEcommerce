import './Imagebutton.css';
const Imagebutton = (props) => {

    const { content, imageurl, onClicked } = props;

    return (
        <div className="Imagebutton" onClick={onClicked}>
            <div className="Imagebutton__image">
                <img src={imageurl} alt="me"></img>
            </div>
            <div className="Imagebutton__content">
                {content}
            </div>
        </div>
    )
}

export default Imagebutton
