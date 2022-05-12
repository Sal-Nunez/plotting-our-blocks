import Header from './components/Header'
import Navigation from './components/Navigation'
import Main from './components/Main'
import SubContents from './components/SubContents'
import Advertisement from './components/Advertisement'
import styles from './styles/styles.module.css'

function App() {
  return (
    <div className={styles.container}>
        <Header />
        <div className={styles.contentContainer} >
        <Navigation />
        <Main >
          <div className={styles.contentContainer}>
            <SubContents />
            <SubContents />
            <SubContents />
          </div>
            <Advertisement />
        </Main>
        </div>
    </div>
  );
}

export default App;
