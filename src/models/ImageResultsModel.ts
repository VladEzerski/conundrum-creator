import { Realm } from '@realm/react'

class ImageResultsModel extends Realm.Object {
  task!: string
  imageUrl!: string

  public static schema: Realm.ObjectSchema = {
    name: 'ImageResults',
    properties: {
      task: 'string',
      imageUrl: 'string',
    },
  }
}

const realmImageResults = new Realm({ schema: [ImageResultsModel] })

export { realmImageResults, ImageResultsModel }
