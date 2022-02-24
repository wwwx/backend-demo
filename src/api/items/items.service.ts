import { Service } from 'typedi'
import { ItemsInputDto } from './items.interface'
import Items from './items.model'

@Service()
export default class ItemsService {
  getByName(name: string) {
    return Items.find({ name })
  }

  getAll() {
    return Items.find({})
  }

  create(item: ItemsInputDto) {
    const newItems = new Items(item)
    return newItems.save()
  }

  update(name: string, body: Partial<ItemsInputDto>) {
    return Items.updateMany({ name }, body)
  }

  remove(name: string) {
    return Items.remove({ name })
  }
}
