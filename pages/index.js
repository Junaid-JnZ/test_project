// out.domain.com
import { MongoClient } from 'mongodb'
import MeetupList from "../components/meetups/MeetupList";

function Home(props) {
  return (
    <>
      <MeetupList meetups={props.meetups} />
    </>
  );
}

export async function getStaticProps() {

  const client = await MongoClient.connect('mongodb+srv://Junaid:junaid12@cluster0.sb5nt.mongodb.net/?retryWrites=true&w=majority')
  const db = client.db();

  const meetupsCollection = db.collection('meetups');

  const meetups = await meetupsCollection.find().toArray();

  console.log(meetups);

  client.close();

  return {
    props: {
      meetups: meetups.map(meetup =>({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      }))
    }
  }
}
export default Home;