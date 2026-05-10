"use client"
import * as React from 'react';
import { useState, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { fetchLanguages } from '@/app/action';
import { SelectChangeEvent } from "@mui/material";

type LanguageProps = {
    name: string,
    code: string
    selectCode: (code: string) => void
}

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    slotProps: {
        paper: {
            style: {
                maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                width: 250,
            },
        },
    },
};


export default function SelectLanguage({ code, selectCode }: LanguageProps) {
    const [languages, setlanguages] = useState<LanguageProps[]>([])

    useEffect(() => {
        const loadLanguage = async () => {
            const data = await fetchLanguages();
            if (data) {
                setlanguages(data)
            }
        }
        loadLanguage()
    }, []);

    const handleChange = (event: SelectChangeEvent) => {
        selectCode(event.target.value);
    };


    return (
        <div>
            <FormControl sx={{ width: { xs: 150 } }}>
                <Select
                    displayEmpty
                    value={code}
                    onChange={handleChange}
                    input={<OutlinedInput />}
                    renderValue={(selected) => {
                        if (selected.length === 0) {
                            return <em>English</em>;
                        }

                        const foundLanguage = languages.find((language) => language.code === selected)
                        return foundLanguage?.name || " ";
                    }}
                    MenuProps={MenuProps}
                    inputProps={{ 'aria-label': 'Without label' }}
                >
                    <MenuItem disabled value="">
                        <em>Language</em>
                    </MenuItem>
                    {languages.map((language) => (
                        <MenuItem
                            key={language.code}
                            value={language.code}
                        >
                            {language.name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}