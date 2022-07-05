import express from "express";
import { graphqlHTTP } from "express-graphql";
import { get } from "express/lib/response";
import schema from "./schema";
import { conectada } from "./database";
const app=express();
const port=process.env.PORT||3000
conectada();
app.get('/',function(req,res){
    res.json({

        message:'Hello word'
    })
});
app.use('/graphql',graphqlHTTP({
    graphiql:true,
    schema:schema,
    context: {
        messageId: 'test'
    }

}));
app.listen(port)