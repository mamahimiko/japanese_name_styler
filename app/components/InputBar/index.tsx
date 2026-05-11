"use client"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

type inputProps = {
    name: string
    inputName: (name: string) => void
}

export default function InputBar({ name, inputName }: inputProps) {

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        inputName(event.target.value);
    };

    return (
        <Box sx={{ width: { xs: 300, md: 500 }, maxWidth: '100%' }}>
            <TextField
                fullWidth
                label="Name"
                id="fullWidth"
                value={name}
                onChange={handleChange}
            />
        </Box>
    );
}