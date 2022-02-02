import Header from './pattern/header'
import Main from './pattern/main'
function Home() {
  return (
  <>
  <div>
  <Header />
  <Main />
  </div>
  <style jsx>{`
  div {
  width: 100%;
  min-height: 100vh;
  height: 100%;
  background: #fff;
  displat: grid;
  grid-template-rows: 10vh 90vh;
  }
  `}</style>
  </>
  )
}

export default Home