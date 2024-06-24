import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';

export default function Checkboxes(props) {
    const { label, id, options } = props;
    return (
        <div>
            <Checkbox {...label} defaultChecked />
            <Checkbox {...label} />
            <Checkbox {...label} disabled />
            <Checkbox {...label} disabled checked />
        </div>
    );
}