import { PropTypes } from "prop-types"
import css from "./notification.module.css"


export const Notification = ({ message }) => {
return(
  <div>
    <h2 className={css.message}>{message}</h2>
  </div>)
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
}