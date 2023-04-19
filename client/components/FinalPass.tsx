import { useNavigate } from 'react-router-dom'

function FinalPass() {
  const navigate = useNavigate()

  return (
    <div className="h-screen">
      <div className="container flex justify-center pt-10">
        <div className="window w-2/3">
          <div className="title-bar">
            <div className="title-bar-text text-base">Game Complete!</div>
            <div className="title-bar-controls scale-150 pr-3">
              <button aria-label="Minimize"></button>
              <button aria-label="Maximize"></button>
              <button aria-label="Close"></button>
            </div>
          </div>
          <div className="window-body font-semibold text-base p-2">
            <div className="flex flex-row justify-center py-8">
              <button
                className="scale-150"
                onClick={() => navigate('/display')}
              >
                View the Masterpeice
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    // <>
    //   <p>This is the end of the game</p>
    //
    // </>
  )
}

export default FinalPass
