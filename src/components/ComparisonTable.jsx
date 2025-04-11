import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Card, CardMedia} from '@mui/material';

const ComparisonTable = ({ mobile1, mobile2 }) => {
  const specs = [
    { name: 'Brand', value1: mobile1.brand, value2: mobile2.brand },
    { name: 'Model', value1: mobile1.model, value2: mobile2.model },
    { name: 'Release Date', value1: mobile1.release_date, value2: mobile2.release_date },
    { name: 'Display Size', value1: `${mobile1.display_size}"`, value2: `${mobile2.display_size}"` },
    { name: 'Resolution', value1: mobile1.resolution, value2: mobile2.resolution },
    { name: 'Processor', value1: mobile1.processor, value2: mobile2.processor },
    { name: 'RAM', value1: `${mobile1.ram}GB`, value2: `${mobile2.ram}GB` },
    { name: 'Storage', value1: `${mobile1.storage}GB`, value2: `${mobile2.storage}GB` },
    { name: 'Main Camera', value1: `${mobile1.camera_main}MP`, value2: `${mobile2.camera_main}MP` },
    { name: 'Front Camera', value1: `${mobile1.camera_front}MP`, value2: `${mobile2.camera_front}MP` },
    { name: 'Battery', value1: `${mobile1.battery}mAh`, value2: `${mobile2.battery}mAh` },
    { name: 'OS Version', value1: mobile1.os_version, value2: mobile2.os_version },
    { name: 'Price', value1: `$${mobile1.price}`, value2: `$${mobile2.price}` },
  ];

  return (
    <TableContainer component={Paper} sx={{ mt: 4 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Specification</TableCell>
            <TableCell>{mobile1.brand} {mobile1.model} <Card>
              <CardMedia
                component="img"
                height="200"
                image={mobile1.image_url || 'https://via.placeholder.com/500'}
                alt={mobile1.model}
              />
          </Card></TableCell>
            <TableCell>{mobile2.brand} {mobile2.model}
            <Card>
            <CardMedia
              component="img"
              height="200"
              image={mobile2.image_url || 'https://via.placeholder.com/500'}
              alt={mobile2.model}
            />
          </Card>

            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {specs.map((spec, index) => (
            <TableRow key={index}>
              <TableCell component="th" scope="row">{spec.name}</TableCell>
              <TableCell>{spec.value1}</TableCell>
              <TableCell>{spec.value2}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ComparisonTable;