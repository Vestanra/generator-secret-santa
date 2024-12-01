import { List } from './List';
import { createTheme, CssBaseline, } from "@mui/material";
import { ThemeProvider } from "@mui/system";

const theme = createTheme({
  palette: {
    primary: {
      main: "#004d40",
    }
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        ul: {
          listStyle: 'none',
          padding: 0,
          margin: 0,
        }
      }
    }
  }
});


function App() {  
  return (
    <ThemeProvider theme={theme}>
      <List />
      <CssBaseline/>
    </ThemeProvider>
  );
}

export default App;
