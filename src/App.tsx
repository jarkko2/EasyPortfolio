import MainView from './Components/MainView';
import NavigationBar from './Components/NavigationBar';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
import introduction from './JsonCVData/introduction.json';

import { useCallback } from "react";
import Particles from "react-tsparticles";
import type { Container, Engine } from "tsparticles-engine";
//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "tsparticles-slim"; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.

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


  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    await console.log(container);
  }, []);

  
  return (
    <div className="App">
      <div style={{ zIndex: -1, position: "fixed"}}>
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            background: {
              color: {
                value: "#FFFFFF",
              },
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                onHover: {
                  enable: true,
                  mode: ["attract", "grab"],
                },
                resize: true,
              },
              modes: {
                attract: {
                  distance: 150,
                },
                grab: {
                  distance: 150,
                }
              },
            },
            particles: {
              color: {
                value: "#D272D3 ",
              },
              links: {
                color: "#995699",
                distance: 150,
                enable: true,
                opacity: 0.25,
                width: 1,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 2,
                straight: false
              },
              number: {
                density: {
                  enable: true,
                  area: 1000,
                },
                value: 100,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 5 },
              },
            },
            detectRetina: true,
          }}
        />
      </div>
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
