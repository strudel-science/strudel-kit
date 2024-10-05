import fetch from 'node-fetch';
import { Parser } from 'json2csv';
import fs from 'fs';

const fetchGBIFData = async () => {
  const url = 'https://api.gbif.org/v1/occurrence/search?';

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();

    // Define the fields for CSV
    const fields = [
      { label: 'Name', value: 'scientificName' },
      { label: 'Latitude', value: 'decimalLatitude' },
      { label: 'Longitude', value: 'decimalLongitude' },
      { label: 'Year', value: 'year' },
      { label: 'Basis of Record', value: 'basisOfRecord' }
    ];

    // Transform data to match the required format
    const transformedData = data.results.map((item) => ({
      key: item.key,
      scientificName: item.scientificName,
      decimalLatitude: item.decimalLatitude,
      decimalLongitude: item.decimalLongitude,
      year: item.year,
      basisOfRecord: item.basisOfRecord
    }));

    // Convert JSON to CSV
    const json2csvParser = new Parser({ fields });
    const csv = json2csvParser.parse(transformedData);

    // Write CSV to file
    fs.writeFileSync('data.csv', csv);
    console.log('CSV file saved successfully');
  } catch (error) {
    console.error('Error fetching GBIF data:', error);
  }
};

fetchGBIFData();
