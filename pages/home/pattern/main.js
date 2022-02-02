import Title from '../components/title'
import Box from '../components/box'
import img from '../../../public/img/foto.jpg'
function Main() {
  return (
  <>
  <main>
  <Title>Chat dev</Title>
  <Box />
  </main>
  <style jsx>{`
  main {
  background-image: url(${img.src});
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 90vh;
  grid-row: 2/3;
  text-align: center;
  color: #fff;
  padding-top: 20px;
  display: grid;
  grid-template-rows: 10% 1fr;
  justify-content: center;
  align-items: center;
  }
  `}</style>
  </>
  )
}
export  default Main