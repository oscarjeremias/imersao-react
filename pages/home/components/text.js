function Text({typeFont, children,color}) {
  return (
  <>
  <p>{children}</p>
  <style jsx>{`
  p {
    font-weight: ${typeFont};
    color: ${color};
    margin: 5px;
  }
  `}</style>

</>
  )
}

export default Text