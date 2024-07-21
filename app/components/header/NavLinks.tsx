import { GlobeAltIcon, MenuIcon, UserCircleIcon } from "@heroicons/react/solid"


const NavLinks = () => {
    return (
        <div className=" flex items-center justify-end space-x-2 text-gray-500 ">
            <p>Become a host</p>
            <GlobeAltIcon className="h-6 cursor-pointer" />
            <div className="flex space-x-2 border-2 p-2 rounded-full">
                <UserCircleIcon className="h-6 cursor-pointer" />
                <MenuIcon className="h-6 cursor-pointer" />
            </div>
        </div>
    )
}

export default NavLinks