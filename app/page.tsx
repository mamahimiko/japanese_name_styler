"use client"
import { useState } from "react";
import InputBar from "./components/InputBar";
import CardSection from "./components/CardSection";
import SelectLanguage from "./components/SelectLanguage";
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Fade from '@mui/material/Fade';
import { translation } from "./action";
import { convertToHiragana } from "./data/data";


export default function Home() {
  const [name, setName] = useState<string>("")
  const [languageName, setLanguageName] = useState<string>("English")
  const [languageCode, setLanguageCode] = useState<string>("en")
  const [translatedName, setTranslatedName] = useState<string>("")
  const [isresult, setIsresult] = useState<boolean>(false)

  const handleChangeName = (name: string) => {
    setName(name);
  }

  const handleChangeLanguage = (code: string) => {
    setLanguageCode(code)
  }


  const handleClick = async () => {

    const result = await translation(name, languageCode)
    if (result) {
      setTranslatedName(result.text)
    }

    setIsresult(true);
  }

  return (
    <div>
      <Paper>
        <Container
          maxWidth="md"
          sx={{
            minHeight: '60vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            textAlign: "center",
            gap: 4,
          }}>

          {!isresult ? (
            <Fade in={!isresult} timeout={500}>
              <Box>
                <Typography variant="h3" gutterBottom>
                  Hello, what is your name?
                </Typography>
                <Stack
                  spacing={{ xs: 1, sm: 2 }}
                  direction={{ xs: "column", md: "row" }}
                  sx={{
                    justifyContent: "center",
                    alignSelf: 'center'
                  }}
                >
                  <InputBar name={name} inputName={handleChangeName} />
                  <SelectLanguage name={languageName} code={languageCode} selectCode={handleChangeLanguage} />
                </Stack>
                <Box sx={{ p: 3 }}>
                  <Button size="large" variant="contained" onClick={handleClick}
                    sx={{
                      width: 'fit-content',
                      alignSelf: 'center'
                    }}>
                    Enter
                  </Button>
                </Box>
              </Box>
            </Fade>
          ) : (
            <>
              <Fade in={isresult} timeout={800}>
                <Box>
                  <Box>

                    <Typography variant="h4" gutterBottom>
                      Your Japanese signature is ready!
                    </Typography>
                  </Box>

                  <Fade in={isresult} timeout={1200}>
                    <Box>
                      <Box>
                        <Typography variant="body1" color="textSecondary">
                          Standard (Katakana):
                        </Typography>
                        <Typography sx={{
                          fontSize: {
                            xs: '2.8rem',
                            md: '3.5rem',
                          },
                          fontWeight: 'bold',
                        }}>
                          {translatedName}
                        </Typography>
                        <Typography variant="h4" gutterBottom>
                          or
                        </Typography>

                        <Typography variant="body1" color="textSecondary" sx={{ mt: 2 }}>
                          Cute & Soft (Hiragana):
                        </Typography>
                        <Typography sx={{
                          fontSize: {
                            xs: '2.8rem',
                            md: '3.5rem',
                          },
                          fontWeight: 'bold'
                        }}>
                          {convertToHiragana(translatedName)}
                        </Typography>
                      </Box>
                      <Box sx={{ p: 3 }}>
                        <Button onClick={() => setIsresult(false)}>Try another name</Button>
                      </Box>
                    </Box>
                  </Fade>
                </Box>
              </Fade>
            </>
          )}

        </Container>
      </Paper>
      {
        !isresult ? (
          <></>
        ) : (
          <Container>
            <Box>
              <CardSection translatedName={translatedName} />
            </Box>
          </Container>)
      }

    </div >


  );
}
