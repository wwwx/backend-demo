import { Document } from 'mongodb'
import mongoose from 'mongoose'
import { ItemsInputDto } from './items.interface'

const ItemsSchema = new mongoose.Schema({
  name: String,
  description: String
})

export default mongoose.model<ItemsInputDto & Document>('Items', ItemsSchema)
