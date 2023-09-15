import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {useDispatch} from "react-redux"
import {changePrice} from "../../../redux/reducers/orders";

const CatalogSelect = () => {
    const [price, setPrice] = React.useState('');
    console.log(price)
    const dispatch = useDispatch();
    dispatch(changePrice(price));

    const handleChange = (event) => {
        setPrice(event.target.value);
    };

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl style={{width: '200px'}}>
                <InputLabel id="demo-simple-select-label">Sort</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={price}
                    label="Age"
                    onChange={handleChange}
                    className="catalog__left-select"
                >
                    <MenuItem value={''}>по умолчанию</MenuItem>

                    <MenuItem
                        value={'price=asc'}

                    >по возрастанию</MenuItem>

                    <MenuItem value={'price=desc'}>по убыванию</MenuItem>
                    <MenuItem value={'views=desc'}>популярные</MenuItem>
                    <MenuItem value={'createdAt=2023-09-10'}>новые</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
};

export default CatalogSelect;