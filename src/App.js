import logo from './logo.svg';
import './App.css';
import {
  Button,
  Box,
  FormControl,
  RadioGroup,
  Radio,
  FormLabel,
  FormControlLabel,
  Typography
} from '@mui/material';
import { useState, useEffect } from 'react';

const men = [
  "Alexander",
  "Anton",
  "August",
  "Bernhard",
  "Bertil",
  "Bror",
  "Edvin",
  "Efraim",
  "Elias",
  "Emil",
  "Erik",
  "Frithiof",
  "Gösta",
  "Gustaf",
  "Gusten",
  "Harald",
  "Herman",
  "Johan",
  "Johannes",
  "Karl",
  "Klas",
  "Knut",
  "Konrad",
  "Lars",
  "Leif",
  "Leonard",
  "Måns",
  "Mattias",
  "Oskar",
  "Ove",
  "Per",
  "Stefan",
  "Sven",
  "Tryggve",
  "Vilhelm",
  "Walter"
]
  const women = [
  "Agatha",
  "Alva",
  "Annette",
  "Astrid",
  "Christina",
  "Ebba",
  "Eivor",
  "Emma",
  "Ενα",
  "Hulda",
  "Ida",
  "Josefina",
  "Karin",
  "Kerstin",
  "Lena",
  "Linnea",
  "Lisbeth",
  "Lotten",
  "Magdalena",
  "Malin",
  "Margareta",
  "Marianne",
  "Milda",
  "Monica",
  "Olga",
  "Olivia",
  "Paulina",
  "Rebecka",
  "Sara",
  "Sigrid",
  "Sofia",
  "Solveig",
  "Stina",
  "Theresia",
  "Vera",
  "Wilhelmina"
]

const lastName = [
  "Almgren",
  "Andersdotter",
  "Backlund",
  "Bäckmark",
  "Berggren",
  "Biur",
  "Blomberg",
  "Bokvist",
  "Brylla",
  "Carlstedt",
  "Corell",
  "Eriksson",
  "Falkengård",
  "Frisk",
  "Gravers",
  "Gustafsson",
  "Hammarfors",
  "Hellström",
  "Jernberg",
  "Johansson",
  "Larsson",
  "Lindberg",
  "Lundström",
  "Mässing",
  "Mellander",
  "Orre",
  "Oskarsson",
  "Persson",
  "Rääf",
  "Stark",
  "Sundén",
  "Tafström",
  "Thulin",
  "Vikander",
  "Wallen",
  "Widmark",
]

function App() {
  const [gender, setGender] = useState('male')
  const [character, setCharacter] = useState('')
  
  const handleGender = (e) => {
    setGender(e.target.defaultValue)
  }

  const generate = () => {
    const randomFirstNameMan = men[Math.floor(Math.random() * men.length)];
    const randomFirstNameWoman = women[Math.floor(Math.random() * women.length)];
    const randomLastName = lastName[Math.floor(Math.random() * lastName.length)];
    const generatedFirstName = gender === 'male' ? randomFirstNameMan : randomFirstNameWoman;
    setCharacter(`${generatedFirstName} ${randomLastName}`)
    
  };

  return (
    <div className="App">
      <Box mb={8} />
      <FormControl>
        <FormLabel id="demo-row-radio-buttons-group-label">Kön</FormLabel>
          <RadioGroup
            row
            value={gender}
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel onChange={(e)=>handleGender(e)} value="female" control={<Radio />} label="Kvinna" />
            <FormControlLabel onChange={(e)=>handleGender(e)} value="male" control={<Radio />} label="Man" />
          </RadioGroup>
      </FormControl>
      <Box mb={8} />
      <Button onClick={() => generate()} variant="contained">Generera</Button>
      <Box mb={8} />
      <Typography variant="subheading" gutterBottom>
        {character}
      </Typography>
    </div>
  );
}

export default App;
