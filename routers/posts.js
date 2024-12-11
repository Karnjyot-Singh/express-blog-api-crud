import express from 'express';
const routers = express.Router();
import blogPosts from "../data.js";
import postController from "../controllers/postscontroller.js";




routers.get("/", postscontroller.index);


routers.get("/:id", postscontroller.show);


routers.post('/', postscontroller.store);


routers.put('/:id', postscontroller.update);


routers.patch('/:id', postscontroller.modify);


routers.delete('/:id', postscontroller.destroy);

export default routers;