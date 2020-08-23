import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';

const Home = lazy(() => import('../pages/home'));
const About = lazy(() => import('../pages/about'));
const Services = lazy(() => import('../pages/services'));
const Blog = lazy(() => import('../pages/blog'));
const BlogDetail = lazy(() => import('../pages/blogDetail'));
const Contact = lazy(() => import('../pages/contact'));

export default function UserLayout() {
	return (
		<React.Fragment>
			<Navbar />
			<Suspense fallback={<div style={{ width: '100%', height: '100vh' }} />}>
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/about-us" exact component={About} />
					<Route path="/services" exact component={Services} />
					<Route path="/blog" exact component={Blog} />
					<Route path="/blog/1" exact component={BlogDetail} />
					<Route path="/contact-us" exact component={Contact} />
				</Switch>
			</Suspense>
			<Footer />
		</React.Fragment>
	);
}
