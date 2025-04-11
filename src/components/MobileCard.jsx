import { Card, CardMedia, CardContent, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const MobileCard = ({ mobile }) => {
  return (
    <Card sx={{ maxWidth: 345, m: 2 }}>
      <CardMedia
        component="img"
        height="200"
        image={mobile.image_url || 'https://via.placeholder.com/200'}
        alt={mobile.model}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {mobile.brand} {mobile.model}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {mobile.display_size}" Display • {mobile.ram}GB RAM • {mobile.storage}GB Storage
        </Typography>
        <Typography variant="h6" sx={{ mt: 1 }}>
          ${mobile.price}
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Button
            variant="contained"
            size="small"
            component={Link}
            to={`/mobile/${mobile.id}`}
            sx={{ mr: 1 }}
          >
            Details
          </Button>
          <Button variant="outlined" size="small">
            Add to Compare
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default MobileCard;