import { useLocation } from 'react-router-dom'
import './Modal.css'

function Modal({ onClose, children }) {
  const location = useLocation()
  const title = location.state.title

  return (
    <div className='dialog-wrapper'>
      <div className='modal' id='dialog'>
        <div className='modal-close'>
          <button className='modal-close-btn' onClick={onClose}>
            <span className='close-symbol'>✕</span>
          </button>
          <div className='explore-help-text'>Explore help articles</div>
        </div>
        <h1>{title}</h1>
        <hr className='separator' />
        {children}
        <div className='modal-feedback'>
          <h3>Was this helpful?</h3>
          <button className='feedback-btn'>
            <img className='feedback-icon' src='/like.png' alt='Feedback was helpful' />
          </button>
          <button className='feedback-btn'>
            <img className='feedback-icon' src='/dislike.png' alt='Feedback was not helpful' />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Modal