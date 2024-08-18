import helpSections from './data/helpSections.json'
import './HelpCenter.css'

function HelpCenter() {
  return (
    <div className='help-center'>
      <h1 className='title'>Welcome to Help Center</h1>
      <div className='search-help'>
        <h2 className='subtitle'>Explore help articles</h2>
        <form className='search-dialog'>
          <img className='search-icon' src='search.png' alt='Search Icon' />
          <input className='search-help-input search-input' type='search' placeholder='Search help articles' />
        </form>
        <div className='help-section-cards'>
          {helpSections.map(section => <HelpSectionCard key={section.section} helpSection={section} />)}
        </div>
      </div>
    </div>
  )
}

function HelpSectionCard({ helpSection }) {
  return (
    <div className='help-section-card'>
      <div className='help-section-header'>
        <img className='help-section-icon' src={helpSection.icon} alt={helpSection.section} />
        <h3 className='help-section-title'>{helpSection.section}</h3>
      </div>
      <hr className='separator' />
      <ul className='help-links'>
        {helpSection.links.map(link => (
          <li key={link.href} className='help-link-item'>
            <a className='help-link' href={link.href}>{link.description} &gt;</a>
          </li>
        ))}
      </ul>
      <hr className='separator' />
      <div className='more-options'>
        <img className='more-icon' src='more.png' alt='More Options' />
        <a className='help-link' href={helpSection.moreLink}>More &gt;</a>
      </div>
    </div>
  )
}

export default HelpCenter