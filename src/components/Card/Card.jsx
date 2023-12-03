import './Card.css'
import PropTypes from 'prop-types';

export default function Card({titulo, description}) {
  return (
    <div className="div-card">
      <p className='p-title'>{titulo}</p>
      <p className='p-description'>{description}</p>
    </div>
  )
}
Card.propTypes = {
  titulo: PropTypes.string.isRequired,
  description : PropTypes.any
}