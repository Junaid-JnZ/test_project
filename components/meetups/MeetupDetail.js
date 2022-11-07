import classes from './MeetupDetails.module.css'

import { Fragment } from "react";

function MeetupDetail(props) {
  return (
    <section className={classes.details}>
      <img
        scr={props.image}
        alt={props.title}
      />
      <h1>{props.title}</h1>
      <address>{props.address}</address>
      <p>{props.description}</p>
    </section>
  )
}

export default MeetupDetail;