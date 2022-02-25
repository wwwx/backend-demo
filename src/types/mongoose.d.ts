import { ItemsInputDto } from '@/api/items/items.interface'
import { Document } from 'mongodb'
import { Model } from 'mongoose'

declare global {
  namespace Models {
    export type ItemsModel = Model<ItemsInputDto & Document>
  }
}
