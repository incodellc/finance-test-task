import {
  Box, Container, Link, Typography
} from "@mui/material";
import { FC } from "react";

export const Footer: FC = () => {
  return (
    <Box data-testid="footer-component" sx={{ pb: 2 }} component="footer">
      <Container maxWidth="sm">
        <Typography variant="body2" color="text.secondary" align="center">
          {"Copyright © "}
          <Link
            target="_blank"
            color="inherit"
            href="https://www.incode-group.com/"
          >
            Incode-group
          </Link>{" "}
          {new Date().getFullYear()}
        </Typography>
      </Container>
    </Box>
  );
};
