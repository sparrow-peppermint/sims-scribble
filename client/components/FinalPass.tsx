import { useNavigate } from 'react-router-dom'

function FinalPass() {
  const navigate = useNavigate()

  return (
    <>
      <p>This is the end of the game</p>
      <button onClick={() => navigate('/display')}>View the Masterpeice</button>
    </>
  )
}

export default FinalPass
