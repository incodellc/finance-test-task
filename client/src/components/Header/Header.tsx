import {
  AppBar,
  Avatar,
  Box,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { FC } from "react";

import { useStyles } from "./Header.styles";
import { useHeader } from "./useHeader";

const settings = ["Profile", "Account", "Dashboard", "Logout"];

export const Header: FC = () => {
  const { classes } = useStyles();

  const { handleOpenUserMenu, handleCloseUserMenu, anchorElUser } = useHeader();

  return (
    <AppBar data-testid="header-component" position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img
            className={classes.logo}
            src="/client/src/images/logo.png"
            alt="Incode Group"
          />
          <Typography noWrap className={classes.title}>
            Finance
          </Typography>
          <Box className={classes.avatarContainer}>
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar
                alt="Ruslan Miroshnychenko"
                src="/client/src/images/avatar.png"
              />
            </IconButton>
            <Menu
              sx={{ mt: "45px" }}
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
