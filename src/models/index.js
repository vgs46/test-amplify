// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { EmailCollection } = initSchema(schema);

export {
  EmailCollection
};