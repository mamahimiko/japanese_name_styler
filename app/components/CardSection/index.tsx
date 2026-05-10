import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
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
                    <Stack direction={{ xs: "column", md: "row" }} spacing={2} >
                        {fontsData && fontsData.filter((font) => font.japanese === section.name).map((font, index) => (
                            <FontCard key={index} name={translatedName} fontName={font.name} fontClass={font.class} fontDescription={font.description} url={font.url} type={font.japanese} />
                        ))
                        }
                    </Stack>
                </Box>
            ))}
        </Box>
    )
}

export default CardSection