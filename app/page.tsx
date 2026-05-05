import Image from "next/image";
import styles from "./page.module.css";
import InputBar from "./components/InputBar";
import CardSection from "./components/CardSection";
import SelectCountry from "./components/SelectCountry";
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';


export default function Home() {
  return (
    <div>
      <Container maxWidth="md" sx={{
        minHeight: '60vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 4,
      }}>
        <Typography variant="h3" gutterBottom>
          Hello, what is your name?
        </Typography>
        <Stack
          spacing={{ xs: 1, sm: 2 }}
          direction="row"
        >
          <InputBar />
          <SelectCountry />
        </Stack>
      </Container>
      <Container>
        <CardSection />
        <CardSection />
      </Container>
    </div>


  );
}
