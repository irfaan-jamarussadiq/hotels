import { useLocation } from 'react-router-dom'
import './Modal.css'

function Modal({ onClose, children }) {
  const location = useLocation()
  const title = location.state.title

  return (
    <dialog className='modal' open>
      <div className='modal-close'>
        <button className='modal-close-btn' onClick={onClose}>
          <span className='close-symbol'>✕</span>
        </button>
        <div className='explore-help-text'>Explore help articles</div>
      </div>
      <h1>{title}</h1>
      {children}
      <div className='modal-feedback'>
        <h3>Was this helpful?</h3>
        <img className='feedback-icon' src='/like.png' alt='Feedback was helpful' />
        <img className='feedback-icon' src='/dislike.png' alt='Feedback was not helpful' />
      </div>
    </dialog>
  )
}

export default Modal