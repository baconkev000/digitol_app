import Realm from 'realm';
import {User} from './models/user';

export const UserRealmContext: Realm.Configuration = {
  schema: [User],
  schemaVersion: 6,
};
