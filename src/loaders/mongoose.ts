import config from '@/config'
import { Db } from 'mongodb'
import mongoose from 'mongoose'

export default async (): Promise<Db> => {
  const connection = await mongoose.connect(config.databaseURL)
  return connection.connection.db
}

// const client = new MongoClient(DB_URL)

// async function run() {
// try {
// await client.connect()
// const database = client.db('helloworld')
// const movies = database.collection('movies')
// const query = { title: 'Back to the Future' }
// const movie = movies.findOne(query)
// console.log('Connected')
//
// const database = client.db('helloworld')
// await database.createCollection('movies')
// console.log('Created movies collection')
// const movies = database.collection('movies')
// const doc = {
//   title: 'Back to the Future',
//   content: 'No bytes, no problem. Just insert a document, in MongoDB'
// }
// const result = await movies.insertOne(doc)
// console.log('A document was inserted with _id: ', result.insertedId)
// } finally {
//   await client.close()
// }
// }

// run().catch(console.dir)
