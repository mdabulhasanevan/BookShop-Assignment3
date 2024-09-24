export default function Navbar() {
  return (
    <div className="navbar bg-base-100">
  <div className="navbar-start">
  <img  alt="Tailwind CSS Navbar component" className='w-11' src="data:image/jpeg;base64,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" />
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
             
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li><a>Home</a></li>
        <li><a>Blog</a></li>
        <li><a>About</a></li>
        <li><a>FAQ</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">BookShop</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <li><a>Home</a></li>
        <li><a>Blog</a></li>
        <li><a>About</a></li>
        <li><a>FAQ</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn m-2">Buy Book</a>
    <a className="btn">Signin</a>
  </div>
</div>
  )
}
