import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import helpSections from '../../data/helpSections.json'
import './HelpCenter.css'
import Modal from '../../components/Modal'

function HelpCenter() {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()

  function openModal(link) {
    setOpen(true)
    navigate(link.href, { state: { "title": link.description } })
  }

  function closeModal() {
    setOpen(false)
    navigate("/help")
  }

  return (
    <div className='help-center'>
      <h1 className='title'>Welcome to Help Center</h1>
      <div className='search-help'>
        <h2 className='subtitle'>Explore help articles</h2>
        <form className='search-dialog'>
          <img className='search-icon' src='/search.png' alt='Search Icon' />
          <input className='search-help-input search-input' type='search' placeholder='Search help articles' />
        </form>
        <div className='help-section-cards'>
          {helpSections.map(section => (
            <HelpSectionCard
              key={section.section}
              helpSection={section}
              openModal={openModal}
            />
          ))}
        </div>
      </div>
      {open && <Modal onClose={closeModal} />}
    </div>
  )
}

function HelpSectionCard({ helpSection, openModal }) {
  return (
    <div className='help-section-card'>
      <div className='help-section-header'>
        <img className='help-section-icon' src={`/${helpSection.icon}`} alt={helpSection.section} />
        <h3 className='help-section-title'>{helpSection.section}</h3>
      </div>
      <hr className='separator' />
      <ul className='help-links'>
        {helpSection.links.map(link => (
          <li key={link.href} className='help-link-item'>
            <button className='help-link' onClick={() => openModal(link)}>{link.description} &gt;</button>
          </li>
        ))}
      </ul>
      <hr className='separator' />
      <div className='more-options'>
        <img className='more-icon' src='/more.png' alt='More Options' />
        <a className='help-link' href={helpSection.moreLink}>More &gt;</a>
      </div>
    </div>
  )
}

export default HelpCenter