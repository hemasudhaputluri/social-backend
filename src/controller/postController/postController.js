const { 
    createPost, 
    updatePost, 
    deletePost
}  
= require('../../sequelizeControllers/postSequelizer/postSequelizer.js');

const createPostController = async (req, res) => {
    try {
        const newPost = await createPost(req.body);
        res.status(201).json({
            code: 201,
            message: "Post created successfully",
            data: newPost
        })
    } catch (error) {
        console.error("Error creating post:", error);
        res.status(500).json({
            code: 500,
            message: "Internal server error",
            data: null
        });
    }
};

const updatePostController = async (req, res) => {
    try {
        const updatedPost = await updatePost(req.params.id, req.body);
        if (updatedPost) {
            res.status(200).json({
                code: 200,
                message: "Post updated successfully",
                data: updatedPost
            });
        } else {
            res.status(404).json({
                code: 404,
                message: "Post not found",
                data: null
            });
        }
    } catch (error) {
        console.error("Error updating post:", error);
        res.status(500).json({
            code: 500,
            message: "Internal server error",
            data: null
        });
    }
};

const deletePostController = async (req, res) => {
    try {
        const deletedPost = await deletePost(req.params.id);
        if (deletedPost) {
            res.status(200).json({
                code: 200,
                message: "Post deleted successfully",
                data: deletedPost
            });
        } else {
            res.status(404).json({
                code: 404,
                message: "Post not found",
                data: null
            });
        }
    } catch (error) {
        console.error("Error deleting post:", error);
        res.status(500).json({
            code: 500,
            message: "Internal server error",
            data: null
        });
    }
};

module.exports = {
    createPostController,
    updatePostController,
    deletePostController
};
