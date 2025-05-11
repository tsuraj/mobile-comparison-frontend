import { Card, CardMedia, CardContent, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const MobileCard = ({ mobile }) => {
  return (
    <Card sx={{ 
      maxWidth: 345,  // Flexible width up to 345px
      height: 500,   // Fixed height for all cards
      m: 2,
      display: 'flex',
      flexDirection: 'column'
    }}>
      <CardMedia
        component="img"
        sx={{
          height: 200,       // Fixed image height
          width: '100%',    // Takes full card width
          objectFit: 'contain', // Maintains aspect ratio
          backgroundColor: '#f5f5f5' // Neutral background
        }}
        image={mobile.image_url || 'https://via.placeholder.com/300x200'}
        alt={mobile.model}
      />
      <CardContent sx={{ flexGrow: 1 }}>  {/* Takes remaining space */}
        <Typography gutterBottom variant="h5" component="div"
          sx={{ fontSize: '1.2rem' }}>
          {mobile.model}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {mobile.display_size}" Display • {mobile.ram}GB RAM • {mobile.storage}GB Storage
        </Typography>
        <Typography variant="h6" sx={{ mt: 1 }}>
          {mobile.price}
        </Typography>
      </CardContent>
      <Box sx={{ p: 2 }}>  {/* Button container */}
        <Button
          variant="contained"
          size="small"
          component={Link}
          to={`/mobile/${mobile.id}`}
          sx={{ mr: 1 }}
        >
          Details
        </Button>
        <Button variant="outlined" size="small" component={Link} to="/compare">
          Add to Compare
        </Button>
      </Box>
    </Card>
  );
};

export default MobileCard;