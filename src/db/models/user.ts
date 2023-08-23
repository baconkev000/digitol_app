import Realm from 'realm';

export class User extends Realm.Object<User> {
  _id!: Realm.BSON.ObjectId;
  first_name!: string;
  middle_name?: string;
  last_name!: string;
  dob!: string;
  phone_number!: string;
  email!: string;
  password!: string;
  keep_updated: boolean = false;
  logged_in: boolean = false;
  can_access: boolean = true;
  timestamp: number = Math.round(new Date().getTime() / 1000);

  static schema = {
    name: 'User',
    properties: {
      _id: {type: 'objectId', default: () => new Realm.BSON.ObjectId()},
      first_name: 'string',
      middle_name: 'string?',
      last_name: 'string',
      dob: 'string',
      phone_number: 'string',
      email: 'string',
      password: 'string',
      keep_updated: {type: 'bool', default: false},
      logged_in: {type: 'bool', default: false},
      can_access: {type: 'bool', default: true},
      timestamp: {
        type: 'int',
        default: () => Math.round(new Date().getTime() / 1000),
      },
    },
    primaryKey: '_id',
  };
}
