import {BsPlus, BsGearFill} from 'react-icons/bs'
import {FaFire, FaUserCircle} from 'react-icons/fa'

export default function Sidebar() {
    return (
        <div className="fixed top-0 left-0 h-screen w-16
                        flex flex-col
                        bg-gray-900 text-white shadow-lg">
            <SidebarIcon icon={<FaUserCircle size='28' />} />
            <SidebarIcon icon={<BsPlus size="32" />} />
            <SidebarIcon icon={<FaFire size="20" />} />
            <SidebarIcon icon={<BsGearFill size="20" />} />
        </div>
    );
}
const SidebarIcon = ({icon, text = 'tooltip !'}) => (
    <div className="sidebar-icon group">
        {icon}
        <span className="sidebar-tooltip group-hover:scale-100">
            {text}
        </span>
    </div>
)