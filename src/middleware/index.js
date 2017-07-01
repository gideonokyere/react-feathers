import feathers from 'feathers';
import { graphqlExpress,graphiqlExpress } from 'graphql-server-express';
import { makeExecutableSchema,addMockFunctionsToSchema } from 'graphql-tools';
import Resolvers from '../../graphql/resolvers';
import Schema from './schema';
module.exports = function(){
const app = feathers();

  const executableSchema = makeExecutableSchema({
    typeDefs: Schema,
    resolvers: Resolvers.call(app)
  });

  app.use('/graphql',graphqlExpress((req)=>{
    return{
      schema: executableSchema
    }
  }));

 app.use('/graphiql',graphiqlExpress({
   endpointURL: '/graphql'
 }));

};
