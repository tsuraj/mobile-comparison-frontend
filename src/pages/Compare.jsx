import { useState, useEffect } from 'react';
import { Container, Grid, Typography, Button, Box, Card, CardMedia } from '@mui/material';
import SearchBar from '../components/SearchBar';
import ComparisonTable from '../components/ComparisonTable';
import { compareMobiles } from '../services/api';

const Compare = () => {
  const [mobile1, setMobile1] = useState(null);
  const [mobile2, setMobile2] = useState(null);
  const [comparison, setComparison] = useState(null);

  const handleSelectMobile1 = (mobile) => {
    setMobile1(mobile);
  };

  const handleSelectMobile2 = (mobile) => {
    setMobile2(mobile);
  };

  useEffect(() => {
    if (mobile1 && mobile2) {
      const fetchComparison = async () => {
        try {
          const data = await compareMobiles(mobile1.id, mobile2.id);
          setComparison(data);
        } catch (error) {
          console.error('Error comparing mobiles:', error);
        }
      };

      fetchComparison();
    }
  }, [mobile1, mobile2]);

  return (
    <Container maxWidth="xl">
      <Typography variant="h4" component="h1" gutterBottom>
        Compare Mobiles
      </Typography>
      
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" gutterBottom>
            Select First Mobile
          </Typography>
          <SearchBar onSelect={handleSelectMobile1} />
          {mobile1 && (
            <Box sx={{ mt: 2 }}>
              <Typography variant="h6">
                {mobile1.brand} {mobile1.model}
              </Typography>
            
              <Button onClick={() => setMobile1(null)}>Change</Button>
            </Box>
          )}
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Typography variant="h6" gutterBottom>
            Select Second Mobile
          </Typography>
          <SearchBar onSelect={handleSelectMobile2} />
          {mobile2 && (
            <Box sx={{ mt: 2 }}>
              <Typography variant="h6">
                {mobile2.brand} {mobile2.model}
              </Typography>
              <Button onClick={() => setMobile2(null)}>Change</Button>
            </Box>
          )}
        </Grid>
      </Grid>

      {comparison && (
        <ComparisonTable mobile1={comparison.mobile1} mobile2={comparison.mobile2} />
      )}
    </Container>
  );
};

export default Compare;