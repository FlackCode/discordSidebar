import {BsPlus, BsGearFill} from 'react-icons/bs'
import {FaFire, FaUserCircle, FaCompass} from 'react-icons/fa'

export default function Sidebar() {
    return (
        <div className="fixed top-0 left-0 h-screen w-16
                        flex flex-col
                        bg-gray-900 text-white shadow-lg">
            <SidebarIcon icon={<FaUserCircle size='28' />} text='Direct Messages' />
            <SidebarIcon icon={<FaFire size="28" />} text='Server' />
            <SidebarIcon icon={<BsPlus size="28" />} text='Add a Server' />
            <SidebarIcon icon={<FaCompass size="24" />} text='Explore Discoverable Servers' />
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