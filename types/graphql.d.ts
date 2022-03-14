
declare module '*/login.gql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const Login: DocumentNode;

  export default defaultDocument;
}
    

declare module '*/refresh.gql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const RefreshAuthToken: DocumentNode;

  export default defaultDocument;
}
    