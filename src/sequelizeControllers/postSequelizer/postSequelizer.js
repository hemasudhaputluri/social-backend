const Post = require('../../models/Post.js');

const createPost = async(postData) => {
    try{
        const newPost = await Post.create(postData);
        return newPost;
    } catch (error) {
        console.error("Error creating post:", error);
    }
}

const updatePost = async (id, postData) => {
    try {
      //console.log("ID passed to findByPk:", id);
      const post = await Post.findByPk(Number(id));
  
      await post.update(postData);
      return post;
    } catch (error) {
      console.error("Error updating post:", error);
    }
  };

  const deletePost = async (id) => {
    try {
      const post = await Post.findByPk(Number(id)); // Find post by ID
  
      if (!post) {
        return { message: "Post not found" };
      }
  
      await post.destroy(); // Delete the post
      return { message: "Post deleted successfully" };
      
    } catch (error) {
      console.error("Error deleting post:", error);
      return { message: "Something went wrong while deleting" };
    }
  };
  
module.exports = {
    createPost,
    updatePost,
    deletePost
};
