import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Grid, Typography, Card, CardMedia, CardContent, List, ListItem, ListItemText } from '@mui/material';
import { getMobileById } from '../services/api';

const MobileDetails = () => {
  const { id } = useParams();
  const [mobile, setMobile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMobile = async () => {
      try {
        const data = await getMobileById(id);
        setMobile(data);
      } catch (error) {
        console.error('Error fetching mobile:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMobile();
  }, [id]);

  if (loading) {
    return <Typography>Loading...</Typography>;
  }

  if (!mobile) {
    return <Typography>Mobile not found</Typography>;
  }

  return (
    <Container maxWidth="lg">
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardMedia
              component="img"
              height="500"
              image={mobile.image_url || 'https://via.placeholder.com/500'}
              alt={mobile.model}
            />
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h3" gutterBottom>
            {mobile.brand} {mobile.model}
          </Typography>
          <Typography variant="h5" color="primary" gutterBottom>
            ${mobile.price}
          </Typography>
          
          <Card variant="outlined" sx={{ mt: 4 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Specifications
              </Typography>
              <List>
                <ListItem>
                  <ListItemText primary="Display" secondary={`${mobile.display_size}" ${mobile.resolution}`} />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Processor" secondary={mobile.processor} />
                </ListItem>
                <ListItem>
                  <ListItemText primary="RAM" secondary={`${mobile.ram}GB`} />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Storage" secondary={`${mobile.storage}GB`} />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Main Camera" secondary={`${mobile.camera_main}MP`} />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Front Camera" secondary={`${mobile.camera_front}MP`} />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Battery" secondary={`${mobile.battery}mAh`} />
                </ListItem>
                <ListItem>
                  <ListItemText primary="OS Version" secondary={mobile.os_version} />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Release Date" secondary={new Date(mobile.release_date).toLocaleDateString()} />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default MobileDetails;