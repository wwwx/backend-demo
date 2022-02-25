import Container from 'typedi'

export default async ({ models }: { models: { name: string; model: any }[] }) => {
  models.map(m => {
    Container.set(m.name, m.model)
  })
}
