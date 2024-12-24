import { Link } from 'react-router-dom'
import './Card.css'

export const Card = ({id, title, price, address, date, img}) => {
    return (
        <Link className="content-main__item" to={`product/${id}`}>
            <img className="content-main__item_img" src={img} alt="" width="264" height="178" />
            <h5 className="content-main__item_title">
            {title}
            </h5>
            <strong className="content-main__item_price">{price}</strong>
            <div className="content-main__item_desc">
                <span className="content-main__item_desc-city">{address}</span>
                <span className="content-main__item_desc-date">{date}</span>
            </div>

        </Link>
    )
}