import { Realm } from '@realm/react'

export type GenerationInfoModelPropertiesType = {
  type: string
  request: string
  response: string
  timestamp: number
}

class GenerationInfoModel extends Realm.Object {
  type!: string
  request!: string
  response!: string
  timestamp!: number

  public static schema: Realm.ObjectSchema = {
    name: 'GenerationInfo',
    properties: {
      type: 'string',
      request: 'string',
      response: 'string',
      timestamp: { type: 'int', default: Date.now() },
    },
  }
}

const realmGenerationInfo = new Realm({ schema: [GenerationInfoModel] })

export { realmGenerationInfo, GenerationInfoModel }
