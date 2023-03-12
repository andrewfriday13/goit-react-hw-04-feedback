import { PropTypes } from "prop-types"
import css from "./buttons.module.css"


export const Buttons = ({ onLeaveFeedback, options }) => {
  return (
    <ul className={css.buttons}>
      {options.map(({id, title}) => (
     <li key={id}>
          <button
            className={css.button}
       type="button"
       name={id}
      onClick={onLeaveFeedback}
     >{title}</button>
      </li>
      ))}
    </ul>
  )
}

Buttons.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
  }))
}