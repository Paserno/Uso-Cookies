import NextLink from 'next/link';

import { AppBar, Toolbar, IconButton, Link, Typography } from '@mui/material';
import { MenuOutlined } from '@mui/icons-material'

export const Navbar = () => {
  return (
    <AppBar position='sticky' elevation={0}>
      <Toolbar>
        <IconButton
          size='large'
          edge='start'
        >
          <MenuOutlined />
        </IconButton>

        <NextLink href="/" passHref legacyBehavior>
          <Link underline='none' color="white">
            <Typography variant='h6'>CookieMaster</Typography>
          </Link>
        </NextLink>

        <div style={{ flex: 1 }}/>

        <NextLink href="/theme-changer" passHref legacyBehavior>
          <Link underline='none' color="white">
            <Typography variant='h6'>Cambiar Tema</Typography>
          </Link>
        </NextLink>

      </Toolbar>
    </AppBar>
  )
}
