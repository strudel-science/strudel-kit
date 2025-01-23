import { SciDataGrid, SciDataGridColDef } from "../../../lib/components/SciDataGrid";

export const SciDataGridEx = () => {
  return (
    <SciDataGrid 
      rows={planets} 
      columns={columns} 
      getRowId={(row) => row['Name']}
    />
  )
}

const columns: SciDataGridColDef[] = [
  {
    field: 'Name',
    headerName: 'Name',
    width: 150,
  },
  {
    field: 'Description',
    headerName: 'Description',
    width: 200,
    hasPopover: true
  },
  {
    field: 'Diameter',
    headerName: 'Diameter',
    type: 'number',
    units: 'km',
  },
  {
    field: 'Mass',
    headerName: 'Mass',
    type: 'number',
    units: 'kg',
    width: 150,
  },
  {
    field: 'Inclination',
    headerName: 'Inclination',
    type: 'number',
    units: 'degrees',
    decimals: 4
  },
  {
    field: 'Eccentricity',
    headerName: 'Eccentricity',
    type: 'number',
    units: '',
    sigFigs: 5,
  },
  {
    field: 'Semi_majorAxis',
    headerName: 'Semi_majorAxis',
    type: 'number',
    units: 'AU',
  },
  {
    field: 'SurfaceGravity',
    headerName: 'SurfaceGravity',
    type: 'number',
    units: 'm/s^2',
  },
  {
    field: 'OrbitalPeriod',
    headerName: 'OrbitalPeriod',
    type: 'number',
    units: 'days',
  },
  {
    field: 'SiderealRotation',
    headerName: 'SiderealRotation',
    type: 'number',
    units: 'days',
  },
  {
    field: 'Satellites',
    headerName: 'Satellites Total',
    type: 'number',
    units: '',
  },
  {
    field: 'Satellite_Names',
    headerName: 'Satellites Names',
    width: 200
  },
];

const planets = [
  {
    "Name": "Mercury",
    "Description": 'Aliqua dolore aliquip tempor fugiat consectetur ea pariatur sit adipisicing sint. Incididunt est proident anim officia mollit tempor dolor eu aute nisi mollit pariatur excepteur laborum. Non aute exercitation laborum nulla do.',
    "Diameter": 4879.4,
    "Mass": "3.302×10^23",
    "Inclination": 7.004,
    "Eccentricity": 0.20563593,
    "Semi_majorAxis": 0.38709927,
    "SurfaceGravity": 3.7,
    "OrbitalPeriod": 0.241,
    "SiderealRotation": 58.65,
    "Satellites": 0,
    "Satellite_Names": ['One', 'Two', 'Three']
  },
  {
    "Name": "Venus",
    "Diameter": 12103.6,
    "Mass": "4.869×10^24",
    "Inclination": 3.39471,
    "Eccentricity": 0.00677672,
    "Semi_majorAxis": 0.72333566,
    "SurfaceGravity": 8.87,
    "OrbitalPeriod": 0.615,
    "SiderealRotation": 243.0187,
    "Satellites": 0,
    "Satellite_Names": ['One', 'Two', 'Three', 'Four', 'Five', 'Six']
  },
  {
    "Name": "Earth",
    "Description": 'Labore est anim est id pariatur laborum enim aliqua ex nisi quis do cupidatat commodo. Dolore non dolor do id velit eu id anim officia. Dolore occaecat labore non proident anim irure est sit commodo ea. Eiusmod aliquip aliquip occaecat elit anim nisi. Laborum non et sit voluptate in. Laborum sit nostrud consequat commodo cillum consectetur sit in non fugiat consectetur excepteur eu. Sit incididunt cillum ea est aliqua.',
    "Diameter": 12756.3,
    "Mass": "5.974×10^24",
    "Inclination": 0.00005,
    "Eccentricity": 0.01671123,
    "Semi_majorAxis": 1.00000261,
    "SurfaceGravity": 9.78,
    "OrbitalPeriod": 1,
    "SiderealRotation": 0.997271,
    "Satellites": 1,
    "Satellite_Names": ['One', 'Two']
  },
  {
    "Name": "Mars",
    "Diameter": 6794.4,
    "Mass": "6.419×10^23",
    "Inclination": 1.85061,
    "Eccentricity": 0.0933941,
    "Semi_majorAxis": 1.52371034,
    "SurfaceGravity": 3.71,
    "OrbitalPeriod": 1.881,
    "SiderealRotation": 1.02595,
    "Satellites": 2
  },
  {
    "Name": "Jupiter",
    "Diameter": 142984,
    "Mass": "1.899×10^27",
    "Inclination": 1.3053,
    "Eccentricity": 0.04838624,
    "Semi_majorAxis": 5.202887,
    "SurfaceGravity": 24.79,
    "OrbitalPeriod": 11.86,
    "SiderealRotation": 0.4135,
    "Satellites": 63
  },
  {
    "Name": "Saturn",
    "Diameter": 120536,
    "Mass": "5.688×10^26",
    "Inclination": 2.48446,
    "Eccentricity": 0.05386179,
    "Semi_majorAxis": 9.53667594,
    "SurfaceGravity": 8.96,
    "OrbitalPeriod": 29.46,
    "SiderealRotation": 0.4264,
    "Satellites": 64,
    "Satellite_Names": ['One', 'Two', 'Three']
  },
  {
    "Name": "Uranus",
    "Diameter": 51118,
    "Mass": "8.683×10^25",
    "Inclination": 0.774,
    "Eccentricity": 0.04725744,
    "Semi_majorAxis": 19.18916464,
    "SurfaceGravity": 7.77,
    "OrbitalPeriod": 84.01,
    "SiderealRotation": 0.7181,
    "Satellites": 27
  },
  {
    "Name": "Neptune",
    "Diameter": 49572,
    "Mass": "1.024×10^26",
    "Inclination": 1.76917,
    "Eccentricity": 0.00859048,
    "Semi_majorAxis": 30.06992276,
    "SurfaceGravity": 11,
    "OrbitalPeriod": 164.79,
    "SiderealRotation": 0.6712,
    "Satellites": 14
  },
  {
    "Name": "Pluto",
    "Diameter": 2370,
    "Mass": "1.3×10^22",
    "Inclination": 17.08900092,
    "Eccentricity": 0.250248713,
    "Semi_majorAxis": 39.44506973,
    "SurfaceGravity": 0.62,
    "OrbitalPeriod": 247.7406624,
    "SiderealRotation": 6.38723,
    "Satellites": 5
  }
]