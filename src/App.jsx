import './App.css'
import illustrationHero from './assets/images/illustration-hero.svg'

function App() {

  return (
    <div className='order-summary-container'>
      <div className="order-summary-img-container">
        <img src={illustrationHero} alt="Illustration Hero Image" className='order-hero-img'/>
      </div>
      <div className="order-summary-text">
        <div className="summary-header">Order Summary</div>
        <div className="summary-subText">You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!</div>
        <div className="order-item">order-item</div>
        <div className="payment-btn">Proceed to Payment</div>
        <div className="cancel-btn">Cancel Order</div>
      </div>
    </div>
  )
}

export default App
