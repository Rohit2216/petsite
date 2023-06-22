import {
	HiOutlineViewGrid,
	HiOutlineUsers,
	HiOutlineDocumentText,
	HiOutlineAnnotation,
	HiOutlineQuestionMarkCircle,
	HiOutlineCog
} from 'react-icons/hi'

export const DASHBOARD_SIDEBAR_LINKS = [
	{
		key: 'dashboard',
		label: 'Dashboard',
		path: '/admin',
		icon: <HiOutlineViewGrid />
	},
	{
		key: 'orders',
		label: 'Stafs',
		path: '/admin/Stafs',
		icon: <HiOutlineUsers />
	},
	{
		key: 'customers',
		label: 'Clients',
		path: '/admin/Clients',
		icon: <HiOutlineUsers />
	},
	{
		key: 'transactions',
		label: 'Transactions',
		path: '/admin/transactions',
		icon: <HiOutlineDocumentText />
	},
	{
		key: 'messages',
		label: 'Messages',
		path: '/admin/messages',
		icon: <HiOutlineAnnotation />
	}
]

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
	{
		key: 'settings',
		label: 'Settings',
		path: '/admin/settings',
		icon: <HiOutlineCog />
	},
	{
		key: 'support',
		label: 'Help & Support',
		path: '/admin/support',
		icon: <HiOutlineQuestionMarkCircle />
	}
]
