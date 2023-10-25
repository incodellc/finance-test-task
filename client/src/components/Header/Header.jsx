import { Box, AppBar, Toolbar, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import { useSelector } from 'react-redux';

export const Header = () => {
  const chosenShares = useSelector((state) => state.chosenShares);

  const numberOfChosenShares = chosenShares.length;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <Link to='/home'>
              <Button
                sx={{
                  color: 'white',
                  '&:hover': {
                    color: 'yellow',
                  },
                }}
              >
                Home
              </Button>
            </Link>

            <Link to='/chosen'>
              <Badge color='primary' badgeContent={numberOfChosenShares}>
                <Button
                  sx={{
                    color: 'white',
                    '&:hover': {
                      color: 'yellow',
                    },
                  }}
                >
                  Chosen
                </Button>
              </Badge>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
