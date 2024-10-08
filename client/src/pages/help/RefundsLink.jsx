import { Link } from 'react-router-dom'
import './LinkPages.css'

function RefundsLink() {
  return (
    <div>
      <h1>Refund timelines, policies & processes</h1>
      <p>Expecting money back from changing or canceling your hotel or vacation rental booking? When and how you get your refund depends on how you paid.</p>

      <h3>When you paid with a credit or debit card</h3>
      <ul>
        <li>Hotels.com will process your refund and credit the card you used for your booking within 24 hours. Once that has happened, your bank will take care of the rest. Just know that it may take them up to 7 days to post the credit to your account, and up to 2 billing cycles to show on your statement.</li>
        <li>More than 7 days and still no refund on your account? Get in touch with your bank or card company to check on the status.</li>
      </ul>

      <h3>When you paid with a gift card</h3>
      <ul>
        <li>Within 4 hours of processing your refund, we'll send you a new gift card for the refunded amount to the email you used when booking.</li>
        <li>If the refund amount is small and you live in a state that requires low gift card balances (typically those less than USD 10) be refunded, you can email giftcards@hotels.com to request cash back.</li>
        <li>For help with gift card refunds, get in touch with Gift Card Customer SupportGift Card Customer Support.</li>
      </ul>

      <h3>Nonrefundable bookings</h3>
      <p>Some bookings are non-refundable. When you cancel, you simply won't receive a refund. Just a heads-up that the hotel or vacation rental may charge you an additional cancellation fee.</p>
      <hr className='separator' />
      <div className='more-about-content'>
        <div>More about: </div>
        <div className='more-links'>
          <Link className='more-link' to='payments-references'>
            <img className='more-icon' src='/more.png' />
            <span>Payments, </span>
          </Link>
        </div>
        <div className='more-links'>
          <Link className='more-link' to='refunds-references'>
            <img className='more-icon' src='/more.png' />
            <span>Refunds</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default RefundsLink