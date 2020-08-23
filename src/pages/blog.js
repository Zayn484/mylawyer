import React from 'react';

export default function blog() {
	return (
		<div>
			<div className="pageTitle">
				<div className="container">
					<div className="row">
						<div className="col-md-6 col-sm-6">
							<h1 className="page-heading">Blog</h1>
						</div>
						<div className="col-md-6 col-sm-6">
							<div className="breadCrumb">
								<a href="#.">Home</a> / <span>Blog</span>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="listpgWraper">
				<div className="container">
					<div className="row">
						<div className="col-md-8">
							<div className="blogWraper">
								<ul className="blogList">
									<li>
										<div className="row">
											<div className="col-md-5">
												<div className="postimg">
													<img
														src={require('../assets/images/blog/1.jpg')}
														alt="Blog Title"
													/>
													<div className="date"> 17 SEP</div>
												</div>
											</div>
											<div className="col-md-7">
												<div className="post-header">
													<h4>
														<a href="#.">Duis ultricies aliquet mauris</a>
													</h4>
													<div className="postmeta">
														By : <span>Luck Walker </span> Category :{' '}
														<a href="#.">Movers, Shifting, Packers </a>
													</div>
												</div>
												<p>
													Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu
													nulla eget nisl dapibus finibus. Maecenas quis sem vel neque rhoncus
													dignissim. Ut et eros rhoncus...
												</p>
												<a href="#." className="readmore">
													Read More
												</a>{' '}
											</div>
										</div>
									</li>
								</ul>
							</div>

							<div className="pagiWrap">
								<div className="row">
									<div className="col-md-4 col-sm-6">
										<div className="showreslt">Showing 1-10</div>
									</div>
									<div className="col-md-8 col-sm-6 text-right">
										<ul className="pagination">
											<li className="active">
												<a href="#.">1</a>
											</li>
											<li>
												<a href="#.">2</a>
											</li>
											<li>
												<a href="#.">3</a>
											</li>
											<li>
												<a href="#.">4</a>
											</li>
											<li>
												<a href="#.">5</a>
											</li>
											<li>
												<a href="#.">6</a>
											</li>
											<li>
												<a href="#.">7</a>
											</li>
											<li>
												<a href="#.">8</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-4">
							<div className="sidebar">
								<div className="widget">
									<h5 className="widget-title">Search</h5>
									<div className="search">
										<form>
											<input type="text" className="form-control" placeholder="Search" />
											<button type="submit" className="btn">
												<i className="fa fa-search" />
											</button>
										</form>
									</div>
								</div>
								<div className="widget">
									<h5 className="widget-title">Categories</h5>
									<ul className="categories">
										<li>
											<a href="#.">Popular posts</a>
										</li>
										<li>
											<a href="#.">Productivity</a>
										</li>
										<li>
											<a href="#.">Resumes</a>
										</li>
										<li>
											<a href="#.">Women</a>
										</li>
										<li>
											<a href="#.">Top Companies</a>
										</li>
										<li>
											<a href="#.">Popular posts</a>
										</li>
										<li>
											<a href="#.">Productivity</a>
										</li>
										<li>
											<a href="#.">Resumes</a>
										</li>
									</ul>
								</div>

								<div className="widget">
									<h5 className="widget-title">Recent Posts</h5>
									<ul className="papu-post">
										<li>
											<div className="media-left">
												{' '}
												<a href="#.">
													<img
														src={require('../assets/images/blog/1.jpg')}
														alt="Blog Title"
													/>
												</a>{' '}
											</div>
											<div className="media-body">
												{' '}
												<a className="media-heading" href="#">
													Integer vel magna urna. Vestibulum id nisi
												</a>{' '}
												<span>Dec 18, 2016</span>{' '}
											</div>
										</li>
									</ul>
								</div>

								<div className="widget">
									<h5 className="widget-title">Archives</h5>
									<ul className="archive">
										<li>
											<a href="#.">
												June 2015<span>10</span>
											</a>
										</li>
										<li>
											<a href="#.">
												May 2015<span>21</span>
											</a>
										</li>
										<li>
											<a href="#.">
												April2015 <span>58</span>
											</a>
										</li>
										<li>
											<a href="#.">
												March 2015 <span>25</span>
											</a>
										</li>
									</ul>
								</div>
								<div className="widget">
									<h5 className="widget-title">Photos Streem</h5>
									<ul className="photo-steam">
										<li>
											<a href="#.">
												<img src={require('../assets/images/blog/1.jpg')} alt="" />
											</a>
										</li>
									</ul>
								</div>
								<div className="widget">
									<h5 className="widget-title">Tags</h5>
									<ul className="tags">
										<li>
											<a href="#.">Amazing </a>
										</li>
										<li>
											<a href="#.">Envato </a>
										</li>
										<li>
											<a href="#.">Themes </a>
										</li>
										<li>
											<a href="#.">Responsiveness </a>
										</li>
										<li>
											<a href="#.">Developer </a>
										</li>
										<li>
											<a href="#.">Mobile </a>
										</li>
										<li>
											<a href="#.">IOS </a>
										</li>
										<li>
											<a href="#.">Design </a>
										</li>
										<li>
											<a href="#.">Jobs </a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
