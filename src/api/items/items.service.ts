import { Service } from 'typedi'

@Service()
export default class ItemsService {
  getItemById() {
    return new Items(100001, 'hello', 'world')
  }
}

export class Items {
  constructor(public id: number, public label: string, public desc: string) {}
}
