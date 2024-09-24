import React from 'react'

export default function Bannar() {
  return (
    <div className="hero bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src="https://cdn.dribbble.com/users/12182457/screenshots/19408570/media/5d83889c16cf2d62b5183fcf7ddd1fc9.jpg?resize=640x480&vertical=center"
      className="max-w-sm rounded-lg shadow-1xl" />
    <div>
    <p className="py-6"> Unlock a World of Stories – Find Your Next Favorite Book at
      </p>
      <h3 className="text-5xl font-bold">BookShop</h3> <br></br>
      <button className="btn btn-primary">Buy Book</button>
    </div>
  </div>
</div>
  )
}
