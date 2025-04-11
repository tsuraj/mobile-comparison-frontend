import { useState } from 'react';
import { TextField, Autocomplete, Box } from '@mui/material';
import { searchMobiles } from '../services/api';

const SearchBar = ({ onSelect }) => {
  const [options, setOptions] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (query) => {
    if (query.length < 2) return;
    
    setLoading(true);
    try {
      const results = await searchMobiles(query);
      setOptions(results);
    } catch (error) {
      console.error('Search error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ width: '100%', maxWidth: 600, mx: 'auto', my: 4 }}>
      <Autocomplete
        freeSolo
        options={options}
        getOptionLabel={(option) => `${option.brand} ${option.model}`}
        onInputChange={(_, value) => handleSearch(value)}
        onChange={(_, value) => onSelect(value)}
        loading={loading}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search for mobiles"
            variant="outlined"
            fullWidth
          />
        )}
      />
    </Box>
  );
};

export default SearchBar;