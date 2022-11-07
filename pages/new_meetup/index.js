import NewMeetupForm from "../../components/meetups/NewMeetupForm"

function NewMeetupPage(){
  function AddMeetup(meetupData){
    console.log(meetupData)
  }
  return ( 
    <NewMeetupForm onAddMeetup = {AddMeetup}/>
  )
}

export default NewMeetupPage;