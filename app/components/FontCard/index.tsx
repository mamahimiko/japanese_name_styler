import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { convertToHiragana } from '@/app/data/data';
import { red } from '@mui/material/colors';

type cardProps = {
    name: string,
    fontName: string,
    fontClass: string,
    fontDescription: string,
    url: string,
    type: string,
    backgroundColor: string,
    textColor: string
}




export default function FontCard({ name, fontName, fontClass, fontDescription, url, type, backgroundColor, textColor }: cardProps) {


    return (
        <Box sx={{ minWidth: 275 }}>
            <Card variant="outlined">
                <Box sx={{
                    backgroundColor,
                    color: textColor,
                    minWidth: 275,
                    minHeight: 150,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    p: 2,
                }}
                >
                    <Typography variant="h3" className={fontClass} component="div"
                        sx={{
                            fontSize: {
                                xs: '3rem',
                                sm: '2.5rem',
                                md: '3rem',
                            },
                            textAlign: 'center',
                            wordBreak: 'break-word',
                            lineHeight: 1.2,
                        }}
                    >
                        {type === "Katakana" ? (
                            <span className={fontClass}>{name}</span>
                        ) : (
                            <span className={fontClass}>
                                {convertToHiragana(name)}
                            </span>
                        )}

                    </Typography>
                </Box>
                <CardContent sx={{ height: 130 }}>

                    <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>{fontName}</Typography>
                    <Typography variant="body2">
                        {fontDescription}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Link href={url}>
                        <Button size="small">Get Font</Button>
                    </Link>
                </CardActions>
            </Card >
        </Box >
    );
}