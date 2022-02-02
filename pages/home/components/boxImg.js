import Text from './text'

const username = "oscarjeremias"
function BoxImg() {
 return (
<>
<div>
<img src={`https://github.com/${username}.png`} alt="photo-username"/>
<p>{username}</p>
</div>
<style jsx>{`
div {
width: 70%:
height: 100%;
background: #8C8C8C;
border-radius: 10px;
padding: 15px;
}
img {
  border-radius: 50%;
  width: 60%;
  height: 50%;
  margin: 10px auto;
}
p {
  width: 100%;
  background: #000;
  padding: 3px;
  border-radius: 10px;
}
`}</style>
</>
)
}

export default BoxImg