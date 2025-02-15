import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';

export default function ContinuousSlider(props) {

    const [value, setValue] = React.useState(30);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: 200 }}>
            <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">

                <Slider aria-label="Volume" value={value} onChange={handleChange} />

            </Stack>
            <Slider disabled defaultValue={30} aria-label="Disabled slider" />
        </Box>
    );
}