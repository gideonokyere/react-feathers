const typeDefinitions = `

type Taco {
  id: Int
  meat: String
  cheese: String
  salsa: String
}


type RootQuery {
  allTacos:[Taco]
}

type RootMutation {
  createTaco(meat:String,cheese:String,salsa:String):Taco
}


schema {
  query: RootQuery
  mutation: RootMutation
}
`;

export default typeDefinitions;
