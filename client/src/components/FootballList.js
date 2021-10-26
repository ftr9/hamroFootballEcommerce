import './FootballList.css';
import FootballCard from './FootballCard';
import { connect } from 'react-redux';
const FootballList = (props) => {

    const { footballs } = props;

    return (
        <div className="footballList">
            {
                footballs.datas.map(el => {
                    return <FootballCard key={el._id}
                        id={el._id}
                        imageName={el.image}
                        category={footballs.category}
                        footballName={el.name}
                        inStock={el.inStock}
                        totalSold={el.totalSold}
                        price={el.price}
                        brand={el.brand}
                        sizes={el.sizes} />
                })
            }

        </div>
    )
}

const mapStateToProp = (state) => {
    return {
        footballs: state.footballs
    }
}

export default connect(mapStateToProp)(FootballList);
