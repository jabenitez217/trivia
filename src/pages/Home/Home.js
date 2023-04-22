import { Button, MenuItem, TextField } from '@mui/material';
import React, { useState } from 'react';
import './Home.css';
import Categories from '../../Data/Categories';
import { useHistory } from 'react-router-dom';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';

const Home = ({name, setName, fetchQuestions} ) => {

  const [category, setCategory] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [error, setError] = useState(false);
  const history = useHistory();

  const handleSubmit = () => {
    if (!category || !difficulty || !name) {
      setError(true);
      return;
    } else {
      setError(false);
      fetchQuestions(category, difficulty);
      history.push('/quiz');
    }
  };

  
  return (
    <div className='content'>
      <div className='settings'>
        <br/>

        <div className='settings-select'>

          {error && <ErrorMessage>Please fill all the fields</ErrorMessage>}

          <TextField style={{marginBottom: 25}} label='Enter Your Name' variant='outlined' 
          onChange={(e)=>setName(e.target.value)}/>

          <TextField style={{marginBottom: 25}} select label='Select Category' variant='outlined'
          onChange={(e)=>setCategory(e.target.value)} value={category}>
            {
              Categories.map((cat) => (
                <MenuItem key={cat.category} value={cat.value}>
                   {cat.category}
                </MenuItem>
              ))
            }
          </TextField> 

          <TextField style={{marginBottom: 30}} select label='Select Dificulty' variant='outlined'
          onChange={(e) => setDifficulty(e.target.value)} value={difficulty}>
            <MenuItem key='Easy' value='easy'>
              Easy
            </MenuItem>
            <MenuItem key='Medium' value='medium'>
              Medium
            </MenuItem>
            <MenuItem key='Hard' value='hard'>
              Hard
            </MenuItem>
          </TextField>

          <Button variant='contained' color='primary' size='large'
          onClick={handleSubmit}>
            Start Quiz
          </Button>
        </div>
      </div>

      <img src='trivia.svg' className='banner' alt='quiz img'/>
    </div>
  )
}

export default Home