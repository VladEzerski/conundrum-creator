import { Realm } from '@realm/react'

class GenerationInfoModel extends Realm.Object {
  type!: string
  request!: string
  response!: string

  public static schema: Realm.ObjectSchema = {
    name: 'GenerationInfo',
    properties: {
      type: 'string',
      request: 'string',
      response: 'string',
    },
  }
}

const realmGenerationInfo = new Realm({ schema: [GenerationInfoModel] })

export { realmGenerationInfo, GenerationInfoModel }
