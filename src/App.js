import ReactFullpage from '@fullpage/react-fullpage';
import {Container, Box, Paper} from '@mui/material';
import navBar from './navBar.jsx';
import Intro from './Intro.jsx'
import About from './About.jsx'

function App() {
  return (
    <ReactFullpage
    // pluginWrapper = {pluginWrapper}

    //fullpage options
    licenseKey = {'YOUR_KEY_HERE'}
    scrollingSpeed = {1000} /* Options here */
    scrollHorizontally = {true}  /* Because we are using the extension */
    scrollHorizontallyKey = {'YOUR KEY HERE'}

    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper >
          <div className="heroImage">
            <div className="section">
              <Container>
              <Paper sx={{padding:"10px", height:"200px"}}>
                <Intro></Intro>
              </Paper>
              </Container>
            </div>
            <div className="section">
              <About></About>
            </div>
            <div className="section">
            <h1>My work</h1>
            </div>
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
  );
}

export default App;
