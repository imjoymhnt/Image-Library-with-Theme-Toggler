import React from "react";
import Images from "../collection";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Header from "../Components/Header";

const Content = () => (
  <React.Fragment>
    <Header />
    {Images.map((Image) => {
      return (
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Grid item xs={6}>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt={Image.title}
                  title={Image.title}
                  image={Image.link}
                />
                <CardContent style={{ textAlign: "center" }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {Image.title}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      );
    })}
  </React.Fragment>
);

export default Content;
