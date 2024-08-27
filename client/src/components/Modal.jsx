import { Outlet } from 'react-router-dom'
import './Modal.css'

function Modal({ onClose }) {
  return (
    <div className='dialog-wrapper'>
      <div className='modal' id='dialog'>
        <div className='modal-close'>
          <button className='modal-close-btn' onClick={onClose}>
            <span className='close-symbol'>✕</span>
          </button>
          <div className='explore-help-text'>Explore help articles</div>
        </div>
        <hr className='separator' />
        <Outlet />
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