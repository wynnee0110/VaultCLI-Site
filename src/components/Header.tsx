import React from 'react'

export const Header: React.FC = () => {
  return (
    <header className="flex justify-between mx-auto p-6 max-w-3xl">

        <nav className="flex justify-between">
            <ul className='flex justify-between gap-10'>
                <li>Home</li>
                <li>About</li>

            </ul>
        </nav>


    </header>
  )
}