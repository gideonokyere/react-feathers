
export default function Resolvers(){
  let app = this;


 return {

 RootQuery: {
   allTacos(root,args,context){
     return models.taco.find({});
   }
 },

 RootMutation: {
   createTaco(root,data,context){
     return models.taco.create({data,context});
   }
 }

 }

}
