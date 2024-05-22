import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPosts } from "state";
import APostWidget from "./APostWidget";
import { CircularProgress, Box, Typography, Snackbar, Alert } from "@mui/material";

const PostsWidget = ({ userId, isProfile = false }) => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts) || [];
  const token = useSelector((state) => state.token);
  const [loading, setLoading] = React.useState(true);
  const [message, setMessage] = React.useState('');
  const [openSnackbar, setOpenSnackbar] = React.useState(false);

  const getPosts = async () => {
    try {
      const response = await fetch("http://localhost:3001/posts", {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await response.json();
      dispatch(setPosts({ posts: data }));
    } catch (error) {
      console.error("Failed to fetch posts:", error);
    } finally {
      setLoading(false);
    }
  };

  const getUserPosts = async () => {
    try {
      const response = await fetch(`http://localhost:3001/posts/${userId}/posts`, {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await response.json();
      dispatch(setPosts({ posts: data }));
    } catch (error) {
      console.error("Failed to fetch user posts:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isProfile) {
      getUserPosts();
    } else {
      getPosts();
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleDelete = (postId) => {
    dispatch(setPosts({ posts: posts.filter(post => post._id !== postId) }));
    setMessage('Post deleted successfully');
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  if (loading) {
    return <CircularProgress />;
  }

  if (!Array.isArray(posts) || posts.length === 0) {
    return <Typography>No posts available.</Typography>;
  }

  return (
    <Box>
      {posts.map(
        ({
          _id,
          userId,
          firstName,
          lastName,
          description,
          picturePath,
          userPicturePath,
          likes,
          comments,
        }) => (
          <APostWidget
            key={_id}
            postId={_id}
            postUserId={userId}
            name={`${firstName} ${lastName}`}
            description={description}
            picturePath={picturePath}
            userPicturePath={userPicturePath}
            likes={likes}
            comments={comments}
            onDelete={handleDelete}
          />
        )
      )}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default PostsWidget;
