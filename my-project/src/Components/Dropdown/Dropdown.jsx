import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function DropdownMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const handleMouseEnter = () => setIsOpen(true);
    const handleMouseLeave = () => setIsOpen(false);

    return (
        <div className="relative inline-block">
            <button
                className="transition"
                onMouseOver={handleMouseEnter}
                onClick={() => setIsOpen(!isOpen)}
            >
                Services
            </button>
            {isOpen && (
                <ul
                    className="absolute text-black z-10 bg-white rounded shadow w-48 mt-2 py-2 "
                    onMouseLeave={handleMouseLeave}
                >
                    <li className="hover:bg-gray-100 px-4 py-2">
                        <Link to='/services'>
                            Option 1
                        </Link>
                    </li>
                    <li className="hover:bg-gray-100 px-4 py-2">
                        <Link to='/services'>
                            Option 2
                        </Link>
                    </li>
                    <li className="hover:bg-gray-100 px-4 py-2">
                        <Link to='/services'>
                            Option 3
                        </Link>
                    </li>
                </ul>
            )}
        </div>
    );
}

export default DropdownMenu;
