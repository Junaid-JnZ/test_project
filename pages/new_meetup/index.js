import {useRouter} from 'next/router'
import NewMeetupForm from "../../components/meetups/NewMeetupForm"

function NewMeetupPage(){
  const router = useRouter() 
  async function AddMeetup(meetupData){
    const response = await fetch('/api/new_meetup', {
      method: 'POST',
      body: JSON.stringify(meetupData),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    console.log(data);

    router.push('/')
  }
  return ( 
    <NewMeetupForm onAddMeetup = {AddMeetup}/>
  )
}

export default NewMeetupPage;