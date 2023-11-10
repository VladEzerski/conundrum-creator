import Realm from 'realm'

export type TextResult = {
  request: string
  response: string
}

class TextResultsModel extends Realm.Object<TextResult> {
  public static schema: Realm.ObjectSchema = {
    //todo mb create enum
    name: 'TextResults',
    properties: {
      request: 'string',
      response: 'string',
    },
  }
}

const realmTextResults = new Realm({ schema: [TextResultsModel] })

export { realmTextResults }
