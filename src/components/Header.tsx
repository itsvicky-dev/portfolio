import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText, Box, Typography } from '@mui/material';

const navItems = ['Home', 'About', 'Skills', 'Highlights', 'Contact'];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <AppBar
      position="fixed"
      sx={{
        background: 'transparent',
        backdropFilter: 'blur(8px)',
        zIndex: 1201,
        boxShadow: 'none',
      }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: 'bold',
              color: '#fff',
              cursor: 'pointer',
            }}
          >
            {/* Vigneswari */}
          </Typography>
        </motion.div>

        <Box
          sx={{
            display: { xs: 'none', md: 'flex' },
            gap: '2rem',
          }}
        >
          {navItems.map((item, index) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              style={{
                textDecoration: 'none',
                color: '#fff',
                fontSize: '1rem',
                transition: 'color 0.3s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#34d399')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#fff')}
            >
              {item}
            </motion.a>
          ))}
        </Box>

        <IconButton
          edge="end"
          color="inherit"
          aria-label="menu"
          onClick={() => setIsOpen(!isOpen)}
          sx={{ display: { md: 'none' } }}
        >
          {isOpen ? <X style={{ color: '#fff' }} /> : <Menu style={{ color: '#fff' }} />}
        </IconButton>
      </Toolbar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={isOpen}
        onClose={() => setIsOpen(false)}
        PaperProps={{
          sx: { background: 'rgba(0, 0, 0, 0.9)', color: 'white' },
        }}
      >
        <List>
          {navItems.map((item) => (
            <ListItem key={item} disablePadding>
              <ListItemButton
                component="a"
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
              >
                <ListItemText
                  primary={item}
                  primaryTypographyProps={{
                    sx: {
                      color: '#fff',
                      '&:hover': { color: '#34d399' },
                    },
                  }}
                />  </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </AppBar>
  );
}

export default Header;
