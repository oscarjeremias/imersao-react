function Title({children}) {
  return (
    <>
    <h1>{children}</h1>
    <style jsx>
      {`
      h1 {
      font-size: 1.5rem;
      text-align: center;
      }
      @media only screen and (min-width: 650px) {
      h1 {
      font-size: 4rem;
      }
      }
      `}
    </style> 
    </>
  )
}

export default Title