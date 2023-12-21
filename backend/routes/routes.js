import express from 'express';

const routes = express.Router();

routes.post('/todos', (request,response)=>{
    console.log(request.body);
})

export default routes;