import React from "react";
import { Grid, Box, Stack } from "@mui/material";
import Card from "@mui/material/Card";
// import CardActions from '@mui/material/CardActions';
import CardContent from "@mui/material/CardContent";
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
import Typography from "@mui/material/Typography";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


function Home() {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Stack direction="row" spacing={2}>
            <Card sx={{ minWidth: 345, height:140}}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{ minWidth: 345, height:140  }}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </Card>
          </Stack>
        </Grid>
        <Grid item xs={4}>
          <Stack spacing={2}>
            <Card sx={{ maxWidth: 345 }}>
            <Stack direction="row" spacing={2}>
              <AccountCircleIcon />
            <div>
                <span>100</span>
                <span>Total</span>
              </div>
            </Stack>
             

              {/* <CardContent> */}
                {/* <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography> */}
              {/* </CardContent> */}
            </Card>
            <Card sx={{ maxWidth: 345 }}>
            <Stack direction="row" spacing={2}>
              <AccountCircleIcon />
            <div>
                <span>200</span>
                <span>Invites</span>
              </div>
            </Stack>
            </Card>
          </Stack>
        </Grid>
      </Grid>
      <Box sx={{ maxWidth:20 }}></Box>
      <Grid container spacing={2}>
        <Grid item xs={8}>
        <Card sx={{ height: 70 }}>
              <CardContent>
                
              </CardContent>
            </Card>
        </Grid>
        <Grid item xs={4}>
        <Card sx={{ height: 70 }}>
              <CardContent>
               
              </CardContent>
            </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
