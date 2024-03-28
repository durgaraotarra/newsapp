import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Chip, Grid, Link, Stack } from "@mui/material";
import { trimTitle,trimcontent } from "../../utils";
import PlaceHolderImg from "./PlaceHolderImg";

const NewsCard = ({urlToImage,title,description,publishedAt,source,url}) => {
  return (
    <Grid item xs={4}>
      <Card>
        {urlToImage ? <CardMedia
          sx={{ height: 180 }}
          image={urlToImage}
          title={title}
        /> : <PlaceHolderImg /> }

        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {trimTitle(title)}
          </Typography>
            <Typography variant="body2" gutterBottom color="text.secondary" align="justify">{description ? trimcontent(description) : description}</Typography>
            <Link href={url} target="_blank"><Typography variant="body2">Read more</Typography></Link>
        </CardContent>
        <CardActions>
          <Stack direction="row" justifyContent="space-between" width={'100%'}>
            <Chip color="secondary" label={source.name} size="small" />
            <Chip label={publishedAt} size="small" />
          </Stack>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default NewsCard;
