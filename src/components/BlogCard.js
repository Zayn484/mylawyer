import React from 'react';

export default function BlogCard({ count }) {
	return (
		<div id="blog">
			<div className="container">
				<div className="section-title">
					<h3>
						Latest From <span>Blog</span>
					</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				</div>
				<ul className="blogGrid">
					{Array.from(new Array(count)).map((el, index) => (
						<li className="item col-md-4" key={index}>
							<div className="int">
								<div className="postimg">
									{' '}
									<img src={require('../assets/images/blog/1.jpg')} alt="Blog Title" />
								</div>
								<div className="post-header">
									<h4>
										<a href="#.">Duis ultricies aliquet mauris</a>
									</h4>
									<div className="date">
										<i className="fa fa-calendar" aria-hidden="true" /> Sep 25, 2017
									</div>
									<div className="postmeta">
										By : <span>Jhon Doe </span> Category : <a href="#.">Job Search </a>
									</div>
								</div>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu nulla eget nisl
									dapibus finibus maecenas quis sem ...
								</p>
								<a href="#." className="readmore">
									Read More
								</a>{' '}
							</div>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
