const router = require("express").Router();
const { response } = require("express");
const Blog = require("../../models/blog");

router.get("/", async (req, res) => {
    let post = await Blog.findAll()

    res.json(post);
    

}
)

router.get("/user", async (req, res) => {
    let user_id = req.session.user_id
    let post = await Blog.findAll({
        where: {
            user_id: user_id
        }
    }
        
    )

    res.json(post);    

}
)


router.post("/", async (req, res) => {
    Blog.create(req.body)
    res.json({message: "Blog Post Created"})


}
)

router.delete("/:id", async (req, res)=>{

    let id = req.params.id;

    Blog.destroy({
        where:{
            id:id
        }
    });

    res.json({message:"Blog post deleted"});

});


module.exports = router;
