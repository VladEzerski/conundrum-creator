import Realm from 'realm'

class TextResultsModel extends Realm.Object {
  request!: string
  response!: string

  public static schema: Realm.ObjectSchema = {
    name: 'TextResults',
    properties: {
      request: 'string',
      response: 'string',
    },
  }
}

const realmTextResults = new Realm({ schema: [TextResultsModel] })

export { realmTextResults, TextResultsModel }
