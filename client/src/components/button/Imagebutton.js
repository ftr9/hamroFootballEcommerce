import './Imagebutton.js';
const Imagebutton = (props) => {

    const { content, image } = props;

    return (
        <div className="Imagebutton">
            <div className="Imagebutton__image">
                {image}
            </div>
            <div className="Imagebutton__content">
                {content}
            </div>
        </div>
    )
}

export default Imagebutton
