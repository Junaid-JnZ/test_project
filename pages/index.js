// out.domain.com
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    titlte: '1st Meetup',
    image:'https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg',
    address:'Address of meetup',
    description:'First meetup location '
  },
  {
    id: 'm2',
    titlte: '2nd Meetup',
    image:'https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg',
    address:'Address of meetup',
    description:'Second meetup location '
  },
  {
    id: 'm3',
    titlte: '3rd Meetup',
    image:'https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg',
    address:'Address of meetup',
    description:'Third meetup location '
  },
  {
    id: 'm4',
    titlte: '4th Meetup',
    image:'https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg',
    address:'Address of meetup',
    description:'Forth meetup location '
  }
]
function Home () {
  return (
    <>
    <MeetupList meetups = {DUMMY_MEETUPS}/>
    </>
  );
}
 
export default Home;