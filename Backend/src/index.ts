import express from 'express'
import cors from 'cors'
import { ApolloServer } from 'apollo-server-express'
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core"
import { schema } from './grahpql'

const app = express()

app.use(cors())

const server = new ApolloServer({
    schema,
    plugins: [
        ApolloServerPluginLandingPageGraphQLPlayground(),
    ],
    introspection:true
})


//server.applyMiddleware({app}) Funcion antigua
server.start()

app.listen(5000,()=>{
    console.log('http://localhost:5000')
})