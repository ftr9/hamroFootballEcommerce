import './Imagebutton.css';
const Imagebutton = (props) => {

    const { content, imageurl } = props;

    return (
        <div className="Imagebutton">
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
