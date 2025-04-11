import { Box, Container, Grid, Typography, Link } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: (theme) => theme.palette.primary.main,
        color: 'white',
        py: 4,
        mt: 'auto'
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              MobileCompare
            </Typography>
            <Typography variant="body2">
              Your one-stop destination for comparing mobile phones and making informed purchase decisions.
            </Typography>
          </Grid>
          
          <Grid item xs={6} md={2}>
            <Typography variant="subtitle1" gutterBottom>
              Quick Links
            </Typography>
            <Box component="ul" sx={{ listStyle: 'none', p: 0 }}>
              <li>
                <Link href="/" color="inherit" underline="hover">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/compare" color="inherit" underline="hover">
                  Compare
                </Link>
              </li>
              <li>
                <Link href="#" color="inherit" underline="hover">
                  Latest Mobiles
                </Link>
              </li>
              <li>
                <Link href="#" color="inherit" underline="hover">
                  Top Rated
                </Link>
              </li>
            </Box>
          </Grid>
          
          <Grid item xs={6} md={2}>
            <Typography variant="subtitle1" gutterBottom>
              Brands
            </Typography>
            <Box component="ul" sx={{ listStyle: 'none', p: 0 }}>
              <li>
                <Link href="#" color="inherit" underline="hover">
                  Apple
                </Link>
              </li>
              <li>
                <Link href="#" color="inherit" underline="hover">
                  Samsung
                </Link>
              </li>
              <li>
                <Link href="#" color="inherit" underline="hover">
                  OnePlus
                </Link>
              </li>
              <li>
                <Link href="#" color="inherit" underline="hover">
                  Xiaomi
                </Link>
              </li>
            </Box>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Typography variant="subtitle1" gutterBottom>
              Connect With Us
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
              <Link href="#" color="inherit">
                <Facebook />
              </Link>
              <Link href="#" color="inherit">
                <Twitter />
              </Link>
              <Link href="#" color="inherit">
                <Instagram />
              </Link>
              <Link href="#" color="inherit">
                <LinkedIn />
              </Link>
            </Box>
            <Typography variant="body2">
              Subscribe to our newsletter for the latest mobile updates.
            </Typography>
          </Grid>
        </Grid>
        
        <Box sx={{ borderTop: '1px solid rgba(255, 255, 255, 0.12)', mt: 4, pt: 2 }}>
          <Typography variant="body2" align="center">
            © {new Date().getFullYear()} MobileCompare. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;