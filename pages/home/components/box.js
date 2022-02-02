import SubBox from './subBox'
function Box() {
  return (
    <>
    <div>
  <SubBox />
    </div>
    <style jsx>
      {`
      div {
      min-width: 70vw;
      width: 70vw;
      height: auto;
      background: #000;
      border-radius: 10px;
      align-self: flex-start;
      margin: 50px auto;
      }
      @media only screen and (min-width: 415px) {
      div {
        height: auto;
        width: 70vw;
      }
      }
      `}
    </style> < />
  )
}

export default Box