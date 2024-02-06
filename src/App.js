import { Container } from "./styled";
// import Modal from "./components/Modal";

import "./App.css";
import Header from "./components/Header";
import Nav from './components/Nav';
import ArticleList from './components/ArticleList';
import Footer from './components/Footer';


function App() {
  //spread opporator 
  const weather ={
    maxTemp: 80,
    minTemp: 60,
    sunny: false,
    cloudy: false
  } 
  return (
    <Container>
      <Header user='Max' 
      dept="HR" admin={true} 
      style={{backgroundColor:'purple',color: '#fff'}}
      age={22}
      />
      <Nav {...weather} /> 
      <ArticleList />
      <Footer />
    </Container>
  );
}

export default App;

