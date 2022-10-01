import * as classes from '../css/styles.module.css'

export default function Title(props) {
    return <h1 className={classes.heading}>{props.text}</h1>
}
