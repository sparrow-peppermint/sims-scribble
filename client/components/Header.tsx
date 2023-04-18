import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
      <div className="container w-1/2 p-5 scale-150">
        {/* <h1 className="font-windows tracking-tighter text-4xl m-1/4">Sims</h1> */}
        <div className="container flex flex-row items-center justify-center p-4">
          <Link to="/" className="hover:text-black focus:text-black">
            <img
              src="/images/windows-logo.png"
              alt="logo"
              className="w-20 pb-4 pr-2"
            />
          </Link>

          <p className="font-windows tracking-tighter text-3xl pr-3 pt-1.5 text-end align-bottom">
            Sims
          </p>
          <h1 className="font-windows font-extrabold tracking-tighter text-5xl">
            Scribble
          </h1>
          <p className="font-windows tracking-tighter text-6xl">98</p>
        </div>
      </div>
    </>
  )
}

export default Header
