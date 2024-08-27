import './ReceiptsLink.css'

function ReceiptsLink() {
  return (
    <div>
      <h1>Get a receipt for your booking</h1>
      <p>There are different ways to get your receipt, depending on how you booked and what information you have handy. So, read on to learn all about it.</p>

      <h3>From the itinerary page</h3>
      <ul>
        <li>You can get a receipt from the itinerary page itself. Just choose Print receipt or Get receipt. The rest is pretty straightforward!</li>
      </ul>

      <h3>From the hotel</h3>
      <ul>
        <li><span className='prompt-bold'>Pay at property:</span> Because these hotels have you pay in full at check-in or check-out, you'll get the receipt from them when you complete your stay.</li>
        <li><span className='prompt-bold'>Pay now:</span> You've already paid in full when you booked, so, the receipt you get from the itinerary page is your proof of purchase. For the expenses charged to your room during your stay (e.g. wifi, minibar), you'll get a separate receipt from the hotel at checkout.</li>
      </ul>

      <h3>From the car rental company</h3>
      <ul>
        <li><span className='prompt-bold'>Pay later:</span> Because you pay at the car rental company, you'll get a receipt from them when you return the car. The receipt lists all the fees and taxes paid.</li>
        <li><span className='prompt-bold'>Pay now:</span> You've already paid when you booked, so, the receipt you get from the itinerary page is your proof of purchase. You can also get a copy of your rental contract with the receipt from the car rental company.</li>
      </ul>

      <h3>Good to know:</h3>
      <ul>
        <li><span className='prompt-bold'>For package bookings:</span> While the receipt you get from the itinerary page shows the total amount you paid, your bank or credit card statement may show separate charges for each package item (flight, hotel, etc.).</li>
      </ul>
      <hr className='separator' />
    </div>
  )
}

export default ReceiptsLink 