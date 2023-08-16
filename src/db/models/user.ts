import Realm from 'realm';

export class User extends Realm.Object<User> {
  _id!: Realm.BSON.ObjectId;
  first_name!: string;
  middle_name?: string;
  last_name!: string;
  dob!: string;
  phone!: string;
  email!: string;
  keep_updated: boolean = false;
  logged_in: boolean = false;
  timestamp: number = Math.round(new Date().getTime() / 1000);

  static schema = {
    name: 'User',
    properties: {
      _id: 'objectId',
      first_name: 'string',
      middle_name: 'string?',
      last_name: 'string',
      dob: 'string',
      phone: 'int?',
      email: 'string',
      keep_updated: {type: 'bool', default: false},
      logged_in: {type: 'bool', default: false},
      timestamp: {
        type: 'int',
        default: () => Math.round(new Date().getTime() / 1000),
      },
    },
    primaryKey: '_id',
  };
}
