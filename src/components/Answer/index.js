import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(3),
  },
  button: {
    margin: theme.spacing(1, 1, 0, 0),
  },
}));

export default function ErrorRadios() {
  const classes = useStyles();
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(false);
  const [helperText, setHelperText] = React.useState('Le cercle de feu !');

  const handleRadioChange = (event) => {
    setValue(event.target.value);
    setHelperText(' ');
    setError(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (value === 'Sacha !') {
      setHelperText('Bonne réponse !');
      setError(false);
    } else if (value !== 'Sacha !') {
      setHelperText('Perdu !');
      setError(true);
    } else {
      setHelperText('Faut cliqué sur le bouton !');
      setError(true);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl component="fieldset" error={error} className={classes.formControl}>
        <RadioGroup aria-label="quiz" name="quiz" value={value} onChange={handleRadioChange}>
          <FormControlLabel value="George !" control={<Radio />} label="George !" />
          <FormControlLabel value="Sacha !" control={<Radio />} label="Sacha !" />
          <FormControlLabel value="Bob !" control={<Radio />} label="Bob !" />
          <FormControlLabel value="Ted !" control={<Radio />} label="Ted !" />
        </RadioGroup>
        <FormHelperText>{helperText}</FormHelperText>
        <Button type="submit" variant="outlined" color="white" className={classes.button}>
          Vérifier !
        </Button>
      </FormControl>
    </form>
  );
}
