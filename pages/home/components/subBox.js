import Text from './text'
import Input from './input'
import Button from './button'
import BoxImg from './boxImg'

function SubBox() {
  return (
  <>
  <div className="div">
  <div className="boxTextInput">
  <Text typeFont="bold" color="#fff">Seja bem-vindo de volta!</Text>
  <Text typeFont="normal" color="#8C8C8C">Aluracord-Matrix(pes)</Text>
  <Input />
  <Button />
  </div>
  <div className="boxFoto">
  <BoxImg />
  </div>
  </div>
  <style jsx>{`
  .div {
    display: flex;
    flex-flow: wrap;
    width: 100%;
    height: auto;
    padding: 10px;
  }
  .boxTextInput {
      width: 100%;
      height: 50%;
      margin: 10px;
    }
  .boxFoto {
      width: 100%;
      margin: 10px;
    }
   @media only screen and (min-width: 415px) {
      .div {
        flex-flow: nowrap;
        padding: 30px;
      }
      }
  `}</style>
  </>
  )
}

export default SubBox