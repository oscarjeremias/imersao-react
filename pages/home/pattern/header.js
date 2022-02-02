import Title from '../components/title'
function Header() {
  return (
  <>
 <header>
 <Title>OJPROJECT</Title>
 </header>
 <style jsx>{`
 header {
   background: #000;
   padding: 20px;
   font-size: 1rem;
   min-height: 10vh;
   color: #fff;
   grid-row: 1/2;
   display: flex;
   justify-content: flex-start;
   align-items: center;
 }
 `}</style>
  </>
  )
}
export default Header