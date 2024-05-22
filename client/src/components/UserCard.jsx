import React from 'react';
import { Box, Avatar, Typography } from "@mui/material";

const UserCard = ({ userId, name, picturePath }) => {
  return (
    <Box display="flex" alignItems="center" mb={2} p={2} border="1px solid #ccc" borderRadius="8px">
      <Avatar src={picturePath} alt={name} />
      <Box ml={2}>
        <Typography variant="h6">{name}</Typography>
      </Box>
    </Box>
  );
};

export default UserCard;
