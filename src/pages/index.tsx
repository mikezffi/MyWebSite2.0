import { Profile } from '../components/Profile';
import { About } from '../components/About';
import { Portfolio } from '../components/Portfolio';
import { Social } from '../components/Social';
import { Background } from '../components/Background';
import { Footer } from '../components/Footer';

export default function Home() {
  return (
    <>
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <Profile />
        <About />
        <Portfolio />
        <Footer />
      </div>

      <Social />
      <Background />
    </>
  )
}