/* eslint-disable */

import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Grid,
  Zoom,
  Grow
} from "@material-ui/core/";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { likeEmoji, deleteEmoji } from "../../../actions/emojis";
import useStyles from "./emoji_style";

const Emoji = ({ emoji, setCurrentId }) => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem("profile"));

  // const Likes = () => {
  //   if (emoji.likes.length > 0) {
  //     return emoji.likes.find((like) => like === (user?.result?._id))
  //       ? (
  //         <><ThumbUpAltIcon fontSize="small" />&nbsp;{emoji.likes.length > 2 ? `You and ${emoji.likes.length - 1} others` : `${emoji.likes.length} like${emoji.likes.length > 1 ? 's' : ''}` }</>
  //       ) : (
  //         <><ThumbUpAltOutlined fontSize="small" />&nbsp;{emoji.likes.length} {emoji.likes.length === 1 ? 'Like' : 'Likes'}</>
  //       );
  //   }

  //   return <><ThumbUpAltOutlined fontSize="small" />&nbsp;Like</>;
  // };

  const openEmoji = (e) => history(`/emojis/${emoji._id}`);

  return (
    <Zoom in style={{ transitionDelay: "200ms" }}>
      <Card className={classes.card} elevation={6}>
        <Grid
          container
          spacing={3}
          direction="column"
          alignItems="center"
          justifyContent="center"
          style={{ minHeight: "35vh" }}
        >
          <Typography gutterBottom variant="h2" component="div">
            {emoji.emoji}
          </Typography>

          <Typography gutterBottom variant="h6" component="div">
            {emoji.name}
          </Typography>
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              Votes: {emoji.likes}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              color="secondary"
              variant="contained"
              onClick={() => dispatch(likeEmoji(emoji._id))}
            >
              Vote
            </Button>
            <Button
              size="small"
              color="primary"
              variant="contained"
              onClick={openEmoji}
            >
              Show
            </Button>
          </CardActions>
        </Grid>
      </Card>
    </Zoom>
  );
};

export default Emoji;
