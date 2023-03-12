import { PropTypes } from "prop-types"
import css from "./section.module.css"


export const Section = ({ title, children }) => {
    return(
        <div className={css.section}>
        <h2 className={css.title}>{title}
        {children}
        </h2> 
        </div>  
    )
}
Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,

}