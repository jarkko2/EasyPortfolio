import MainView from './Components/MainView';
import NavigationBar from './Components/NavigationBar';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
import introduction from './JsonCVData/introduction.json';

const theme = createTheme({
  palette: {
    primary: {
      main: '#7b1fa2',
    },
    secondary: {
      main: '#283593',
    },
  }
});

function App() {
  // Set title to be same as name
  document.title = introduction.title;

  return (
    <div className="App">
      <header className="App-header">
        <ThemeProvider theme={theme}>
          <NavigationBar />
          <MainView />
        </ThemeProvider>
      </header>

    </div>
  );
}

export default App;
