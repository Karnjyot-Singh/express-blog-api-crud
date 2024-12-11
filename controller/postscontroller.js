import posts from "../data.js";

function index(req, res) {
    const filterTag = req.query.tags;
    let postDaMostrare =  posts;
    if (filterTag!==undefined){
        postDaMostrare = posts.filter((curElem, i)=>(posts[i].tags.includes(filterTag)));
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
    res.json("Hai creato un nuovo elemento")
};


function update(req, res) {
    res.json("Hai modificato interamente un elemento")
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