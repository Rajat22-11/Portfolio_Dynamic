import React, { useEffect, useState } from 'react';
import { FaLinkedin, FaGithub, FaTwitterSquare, FaInstagram } from 'react-icons/fa';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import DescriptionIcon from '@mui/icons-material/Description';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

export default function Navbar() {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [resumeLink, setResumeLink] = useState('');

    useEffect(() => {
        async function fetchResumeLink() {
            try {
                const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/resume`);
                const data = await response.json();
                setResumeLink(data.resumeLink);
            } catch (error) {
                console.error("Error fetching resume link:", error);
            }
        }
        fetchResumeLink();
    }, []);

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setDrawerOpen(open);
    };

    const list = () => (
        <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List>
                <ListItem disablePadding>
                    <ListItemButton>
                        <span><ArrowBackIosIcon style={{ fontSize: '20px' }} /></span>
                        <ListItemText primary="Back" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component="a" href={resumeLink} target="_blank" rel="noopener noreferrer">
                        <ListItemIcon><DescriptionIcon /></ListItemIcon>
                        <ListItemText primary="Resume" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component="a" href="https://www.linkedin.com/in/rajatpatel22/" target="_blank" rel="noopener noreferrer">
                        <ListItemIcon><FaLinkedin /></ListItemIcon>
                        <ListItemText primary="LinkedIn" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component="a" href="https://github.com/Rajat22-11" target="_blank" rel="noopener noreferrer">
                        <ListItemIcon><FaGithub /></ListItemIcon>
                        <ListItemText primary="GitHub" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component="a" href="https://www.instagram.com/rajat__18___22?igsh=enN3N210YW5zYWJ1" target="_blank" rel="noopener noreferrer">
                        <ListItemIcon><FaInstagram /></ListItemIcon>
                        <ListItemText primary="Instagram" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component="a" href="https://x.com/RAJATPA81681876?t=Bzi8trgcwkJ90xMgiBqaVg&s=09" target="_blank" rel="noopener noreferrer">
                        <ListItemIcon><FaTwitterSquare /></ListItemIcon>
                        <ListItemText primary="Twitter" />
                    </ListItemButton>
                </ListItem>
            </List>
            <Divider />
        </Box>
    );

    return (
        <nav className="mb-20 flex items-center justify-between py-4 border-b border-neutral-800 sticky top-0 bg-transparent z-50">
            <div className="flex flex-shrink-0 items-center">
                <img className="mx-2 w-12 h-" src="https://res.cloudinary.com/dqpsudhpf/image/upload/v1718776799/portfolio/assets/rplogo_ivbtcs.png" alt="logo" />
            </div>
            <div className="hidden md:flex m-8 flex items-center justify-center gap-4 text-2xl">
                <a
                    href={resumeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 bg-transparent border text-white text-xs rounded-full hover:bg-gradient-to-r from-blue-900 to-blue-500 transition duration-300"
                >
                    Resume
                </a>
                <a href="https://www.linkedin.com/in/rajatpatel22/" target="_blank" rel="noopener noreferrer"><FaLinkedin className="hover:text-cyan-500 cursor-pointer" /></a>
                <a href="https://github.com/Rajat22-11" target="_blank" rel="noopener noreferrer"><FaGithub className="hover:text-black hover:bg-white border border-black-900 rounded-full cursor-pointer" /></a>
                <a href="https://www.instagram.com/rajat__18___22?igsh=enN3N210YW5zYWJ1" target="_blank" rel="noopener noreferrer"><FaInstagram className="hover:text-pink-700 cursor-pointer" /></a>
                <a href="https://x.com/RAJATPA81681876?t=Bzi8trgcwkJ90xMgiBqaVg&s=09" target="_blank" rel="noopener noreferrer"><FaTwitterSquare className="hover:text-cyan-500 cursor-pointer" /></a>
            </div>
            <div className="flex md:hidden">
                <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
                    <MenuIcon />
                </IconButton>
            </div>
            <Drawer anchor='right' open={drawerOpen} onClose={toggleDrawer(false)}>
                {list()}
            </Drawer>
        </nav>
    );
}
