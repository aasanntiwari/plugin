import React from 'react'
import { useSnackbar } from './lib/components/SnackBar'
import Button from '@mui/material/Button';
export default function App() {
  const snac = useSnackbar();
  return (
    <div>
      <Button variant="contained" color="primary"
        onClick={() => snac.showMessage('An error occured, please try after some time.')}>
        Show Snackbar
      </Button>

    </div>
  )
}