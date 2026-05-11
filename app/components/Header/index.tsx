import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
const Header = () => {
    return (
        <Box component="section" sx={{ p: 2, textAlign: "center" }}>
            <Typography
                variant="h1"
                gutterBottom
                sx={{
                    fontSize: { xs: '1.5rem', md: '2.5rem' },
                    fontWeight: 800,
                    letterSpacing: '-0.02em',
                }}
            >
                oNAMaE Styler
            </Typography>
        </Box>
    )
}

export default Header