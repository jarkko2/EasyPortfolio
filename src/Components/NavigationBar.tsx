import * as React from 'react';

// Material UI
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import PageType from './Types/PageType';

import localizationsJson from '../JsonCVData/localizations.json'
import { LocalizationType } from './Types/LocalizationType';

const pages: PageType[] = [
  {
    id: "showcase"
  },
  {
    id: "jobhistory"
  },
  {
    id: "studies"
  },
  {
    id: "projects"
  }
];

const localizations: LocalizationType[] = Object.entries(localizationsJson).map(([id, text]) => ({ id, text }));

function FindTranslation(id: string): string {
  const localization = localizations.find((item) => item.id === id);

  if (localization) {
    return localization.text;
  } else {
    return "Translation not found";
  }
}

function NavigationBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<HTMLElement | null>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (page: string) => {
    window.location.hash = `#${page}`;
    setAnchorElNav(null);
  };

  const PageList: React.FC<{ isMobile: boolean }> = ({ isMobile }) => {
    return (
      <>
        {pages.map((page) => (
          isMobile ? (
            <MenuItem key={page.id} onClick={() => handleCloseNavMenu(page.id)}>
              <Typography textAlign="center">{FindTranslation(page.id)}</Typography>
            </MenuItem>
          ) : (
            <Button
              key={page.id}
              onClick={() => handleCloseNavMenu(page.id)}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              {FindTranslation(page.id)}
            </Button>
          )
        ))}
      </>
    );
  };


  return (
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              <PageList isMobile={true} />
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <PageList isMobile={false} />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavigationBar;