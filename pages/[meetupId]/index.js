// import { Fragment } from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";
function MeetupDetails() {
  return (
    <MeetupDetail
      image='https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg'
      title='Meetup location'
      address='Street Number-5 E-Block,lahore'
      description='Description' />
  )
}
export function getStaticPaths() {
  return {
    paths: [
      { params: { meetupId: 'm1' } }, { params: { meetupId: 'm2' } },{ params: { meetupId: 'm3' } }, { params: { meetupId: 'm4' } }
    ],
    fallback: false,
  }
}

export function getStaticProps(context) {

  const meetupId = context.params.meetupId;
  return {
    props: {
      MeetupData: {
        image: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg',
        id: meetupId,
        title: 'Meetup location',
        address: 'Street Number-5 E-Block,lahore',
        description: 'Description'
      }
    }
  }
}

export default MeetupDetails;