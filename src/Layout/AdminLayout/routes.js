import React from 'react';

const Dashboard = React.lazy(() => import('../../components/admin/Dashboard'));
const Category = React.lazy(() => import('../../components/admin/Category'));
const CategoryAdd = React.lazy(() => import('../../components/admin/CategoryAdd'));
const Lawyer = React.lazy(() => import('../../components/admin/Lawyer'));

const routes = [
	{ path: '/admin/dashboard', exact: true, name: 'Dashboard', component: Dashboard },
	{ path: '/admin/categories', exact: true, name: 'Category', component: Category },
	{ path: '/admin/categories/add', exact: true, name: 'Add', component: CategoryAdd },
	{ path: '/admin/lawyers', exact: true, name: 'Lawyer', component: Lawyer }
];

export default routes;
