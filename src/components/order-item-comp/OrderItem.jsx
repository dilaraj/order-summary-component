import './OrderItem.css'
import musicIcon from '../../assets/images/icon-music.svg'

export default function OrderItem() {
    return (
        <div className="order-item-container">
            <div className="order-item-img">
                <img src={musicIcon} alt="Music Icon" className='order-item-icon'/>
            </div>
            <div className="order-desc">
                <span className="item-name">Annual Plan</span>
                <span className="item-price">$59.99/year</span>
            </div>
            <div className="order-change">
                Change
            </div>
        </div>
    )
}