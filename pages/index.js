// out.domain.com
import { MongoClient } from 'mongodb'
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    titlte: '1st Meetup',
    image: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg',
    address: 'Address of meetup',
    description: 'First meetup location '
  },
  {
    id: 'm2',
    titlte: '2nd Meetup',
    image: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg',
    address: 'Address of meetup',
    description: 'Second meetup location '
  },
  {
    id: 'm3',
    titlte: '3rd Meetup',
    image: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg',
    address: 'Address of meetup',
    description: 'Third meetup location '
  },
  {
    id: 'm4',
    titlte: '4th Meetup',
    image: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg',
    address: 'Address of meetup',
    description: 'Forth meetup location '
  }
]
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
export default Home;