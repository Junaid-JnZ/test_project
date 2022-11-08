import {MongoClient} from 'mongodb'

async function handler(req,res){
  if(req.method === 'POST'){
    const data = req.body;

    const client = await MongoClient.connect('mongodb+srv://Junaid:junaid12@cluster0.sb5nt.mongodb.net/?retryWrites=true&w=majority')
    const db = client.db();

    const meetupsCollection = db.collection('meetups');

    const reult  = await meetupsCollection.insertOne(data)

    console.log(reult);

    client.close()

    res.status(201).json({message: 'Meetup Inserted Successfully'})
  }
}

export default handler;