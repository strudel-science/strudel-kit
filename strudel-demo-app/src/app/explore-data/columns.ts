import { GridColDef } from "@mui/x-data-grid";

export const columns: GridColDef[] = [
  { 
    field: 'Organism', 
    headerName: 'Organism', 
    width: 200 
  },
  {
    field: 'Common Name',
    headerName: 'Common Name',
    width: 150,
  },
  {
    field: 'Assembly',
    headerName: 'Assembly',
    width: 150,
  },
  {
    field: 'Data Usage Policy',
    headerName: 'Data Usage Policy',
    width: 150,
  },
  {
    field: 'Euk. BUSCO %',
    headerName: 'Euk. BUSCO %',
    type: 'number',
    width: 110,
  },
  {
    field: 'Emb. BUSCO %',
    headerName: 'Emb. BUSCO %',
    type: 'number',
    width: 110,
  }
];