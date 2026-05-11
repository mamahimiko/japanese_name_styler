import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import FontCard from '../FontCard';
import { fontsData } from '@/app/data/fontData';

type cardSectionProps = {
    translatedName: string
}

const CardSection = ({ translatedName }: cardSectionProps) => {

    const sections = [
        {
            name: "Katakana",
            description: "Katakana is the primary script used for foreign names and loanwords. It features sharp, angular lines and gives your name its standard, 'official' look in Japanese."
        },
        {
            name: "Hiragana",
            description: "Hiragana is used for native Japanese words and has a soft, curvy appearance. While Katakana is more common for foreign names, Hiragana gives your name a friendly, 'kawaii' (cute), and traditional feel."
        }
    ]


    return (
        <Box>
            {sections && sections.map((section, index) => (
                <Box sx={{ py: 3 }} key={index}>
                    <Typography variant="h4" gutterBottom>
                        {section.name} Fonts
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                        {section.description}
                    </Typography>
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2} columns={{ xs: 2, md: 6, lg: 12 }}>

                            {fontsData &&
                                fontsData.filter((font) => font.japanese === section.name)
                                    .map((font, index) => (
                                        <Grid size={3}>
                                            <FontCard
                                                key={index}
                                                name={translatedName}
                                                fontName={font.name}
                                                fontClass={font.class}
                                                fontDescription={font.description}
                                                url={font.url}
                                                type={font.japanese}
                                                backgroundColor={font.backgroundColor}
                                                textColor={font.textColor}
                                            />
                                        </Grid>
                                    ))
                            }

                        </Grid>
                    </Box>
                </Box>
            ))}
        </Box>
    )
}

export default CardSection