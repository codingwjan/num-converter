import * as React from 'react';
import Button from '@mui/material/Button';
import './WelcomePage.css';
import { blue } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';


const theme = createTheme({
  palette: {
    primary: {
      main: blue[400],
    },
  },
});



function ContinueButton() {
    return (
    <React.StrictMode>
        <ThemeProvider theme={theme}>
        <div className='cont_button'>
            <Button variant='contained' size="large">Continue</Button>;
        </div>
    </ThemeProvider>
    </React.StrictMode>
    )
}
export default ContinueButton