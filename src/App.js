import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Quiz from './pages/Quiz/Quiz';
import Result from './pages/Result/Result';
import React, { useState } from 'react';
import axios from 'axios';
import {createTheme, ThemeProvider} from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#388697'
    },
    secondary: {
      main: '#FA8334'
    },
    neutral: {
      main: '#e7e7e7'
    }
  }
})
function App() {

  const [name, setName] = useState('');
  const [questions, setQuestions] = useState();
  const [score, setScore] = useState(0);
  const [sound, setSound] = useState(true);
  
  const fetchQuestions = async(category='', difficulty='') => {
    const {data} = await axios.get(
      `https://opentdb.com/api.php?amount=10${
        category && `&category=${category}`
      }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
    );
    
    setQuestions(data.results);
  };

  return (
    <ThemeProvider theme={theme}>
    <BrowserRouter>
      <div className="App">
        <Header sound={sound} setSound={setSound}/>
        <Switch>
          <Route path='/' exact>
            <Home name={name} setName={setName} fetchQuestions={fetchQuestions}/>
          </Route>
          <Route path='/quiz' exact>
            <Quiz name={name} questions={questions} setQuestions={setQuestions} score={score} setScore={setScore} sound={sound}/>
          </Route>
          <Route path='/result' exact>
            <Result name={name} score={score} sound={sound}/>
          </Route>
        </Switch>
      </div>
      
    </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
