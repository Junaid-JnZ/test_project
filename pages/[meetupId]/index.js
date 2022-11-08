import { MongoClient, ObjectId } from 'mongodb'
import MeetupDetail from "../../components/meetups/MeetupDetail";
function MeetupDetails(props) {
  return (
    <MeetupDetail
      image={props.MeetupData.image}
      title={props.MeetupData.title}
      address={props.MeetupData.address}
      description={props.MeetupData.description}
    />
  )
}
export async function getStaticPaths() {
  const client = await MongoClient.connect('mongodb+srv://Junaid:junaid12@cluster0.sb5nt.mongodb.net/?retryWrites=true&w=majority')
  const db = client.db();

  const meetupsCollection = db.collection('meetups');
  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();

  client.close
  return {
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() }
    })),
    fallback: false,
  }
}

export async function getStaticProps(context) {

  const meetupId = context.params.meetupId;

  const client = await MongoClient.connect('mongodb+srv://Junaid:junaid12@cluster0.sb5nt.mongodb.net/?retryWrites=true&w=majority')
  const db = client.db();

  const meetupsCollection = db.collection('meetups');
  const selectedMeetup = await meetupsCollection.findOne({ _id: ObjectId(meetupId) });

  client.close
  return {
    props: {
      MeetupData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        address: selectedMeetup.address,
        image: selectedMeetup.image,
        description: selectedMeetup.description,
        
      }
    }
  }
}

export default MeetupDetails;