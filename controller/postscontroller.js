import posts from "../data.js";

function index(req, res) {
    const filterTag = req.query.tags;
    let postDaMostrare = posts;
    if (filterTag !== undefined) {
        postDaMostrare = posts.filter((curElem, i) => (posts[i].tags.includes(filterTag)));
    }
    const bacheca = {
        posts: postDaMostrare,
        tot: postDaMostrare.length
    };
    res.json(bacheca);
}


function show(req, res) {
    const postId = parseInt(req.params.id);
    let answer = 0;
    for (let i = 0; i < posts.length; i++) {
        if (posts[i].id === postId) {
            answer = posts[i];
        }
    }


    if (!isNaN(answer)) {
        res.sendStatus(404);
    }
    res.json(answer);
};


function store(req, res) {
    let newPost = req.body;
    newPost = {
        id: posts[posts.length - 1].id + 1,
        ...newPost
    };
    posts.push(newPost)

};


function update(req, res) {
    let postUpdated = req.body;
    const postId = parseInt(req.params.id);
    postUpdated = {
        id: postId,
        ...postUpdated
    };
    let flag = false;
    for (let i = 0; i < posts.length; i++) {
   
        if (posts[i].id === postId) {
            posts[i]=postUpdated;
  
            flag = true
        }
    }

    if (flag === false) {
        res.sendStatus(404);
    } else {
        res.json(postUpdated);
    }
};


function modify(req, res) {
    res.json("Hai modificato parzialmente un elemento")
};


function destroy(req, res) {
    const postId = parseInt(req.params.id);
    let indexDaEliminare = "Default";
    for (let i = 0; i < posts.length; i++) {
        if (posts[i].id === postId) {
            indexDaEliminare = i;
        }
    }


    if (isNaN(indexDaEliminare)) {
        res.sendStatus(404);

    } else {
        posts.splice(indexDaEliminare, 1);
        
    }
};
export default { index, show, store, update, modify, destroy };