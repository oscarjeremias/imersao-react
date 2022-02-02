function Title({tag,children}) {
  const Tag = tag

  return (
    <>
    <Tag>{children}</Tag>
    <style jsx>
      {`
      ${Tag} {
      font-size: 1.5rem;
      text-align: center;
      }
      @media only screen and (min-width: 650px) {
      ${Tag} {
      font-size: 4rem;
      }
      }
      `}
    </style> < />
  )
}

export default Title