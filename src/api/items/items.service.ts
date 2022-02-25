import { Inject, Service } from 'typedi'
import { ItemsInputDto } from './items.interface'

@Service()
export default class ItemsService {
  constructor(@Inject('itemsModel') private itemsModel: Models.ItemsModel) {}

  getByName(name: string) {
    return this.itemsModel.find({ name })
  }

  getAll() {
    return this.itemsModel.find()
  }

  create(item: ItemsInputDto) {
    const newItems = new this.itemsModel(item)
    return newItems.save()
  }

  update(name: string, body: Partial<ItemsInputDto>) {
    return this.itemsModel.updateMany({ name }, body)
  }

  remove(name: string) {
    return this.itemsModel.remove({ name })
  }
}
