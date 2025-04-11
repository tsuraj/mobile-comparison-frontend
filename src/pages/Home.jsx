import { useState, useEffect } from 'react';
import { Grid, Container, Typography } from '@mui/material';
import MobileCard from '../components/MobileCard';
import SearchBar from '../components/SearchBar';
import { getMobiles } from '../services/api';

const Home = () => {
  const [mobiles, setMobiles] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleMobileSelect = (mobile) => {
    // Handle selection (e.g., navigate to details or add to compare)
    


    console.log('Selected mobile:', mobile);
  };

  useEffect(() => {
    const fetchMobiles = async () => {
      try {
        const data = await getMobiles();
        setMobiles(data);
      } catch (error) {
        console.error('Error fetching mobiles:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMobiles();
  }, []);

  // const handleMobileSelect = (mobile) => {
  //   // Handle selection (e.g., navigate to details or add to compare)
    
    


  //   console.log('Selected mobile:', mobile);
  // };

  if (loading) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <Container maxWidth="xl">
      <SearchBar onSelect={handleMobileSelect} />
      <Typography variant="h4" component="h1" gutterBottom>
        Latest Mobiles
      </Typography>
      <Grid container spacing={2}>
        {mobiles.map((mobile) => (
          <Grid item key={mobile.id} xs={12} sm={6} md={4} lg={3}>
            <MobileCard mobile={mobile} />
          </Grid>
        ))}
      </Grid>

        {/* <SearchBar onSelect={handleSelectMobile2} />
          {mobile2 && (
            <Box sx={{ mt: 2 }}>
              <Typography variant="h6">
                {mobile2.brand} {mobile2.model}
              </Typography>
              <Button onClick={() => setMobile2(null)}>Change</Button>
            </Box>
          )} */}

    </Container>
  );
};

export default Home;