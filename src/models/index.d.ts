import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type EmailCollectionMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class EmailCollection {
  readonly id: string;
  readonly email_id?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<EmailCollection, EmailCollectionMetaData>);
  static copyOf(source: EmailCollection, mutator: (draft: MutableModel<EmailCollection, EmailCollectionMetaData>) => MutableModel<EmailCollection, EmailCollectionMetaData> | void): EmailCollection;
}