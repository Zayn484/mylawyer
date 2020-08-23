import React from 'react';

export default function blogDetail() {
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
								<div className="blogList blogdetailbox">
									<div className="postimg">
										<img src={require('../assets/images/blog/large-1.jpg')} alt="Blog Title" />
										<div className="date"> 17 SEP</div>
									</div>
									<div className="post-header margin-top30">
										<h4>
											<a href="#.">Duis ultricies aliquet mauris</a>
										</h4>
										<div className="postmeta">
											By : <span>Luck Walker </span> Category :
											<a href="#.">Movers, Shifting, Packers </a>
										</div>
									</div>
									<p>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu nulla eget
										nisl dapibus finibus. Maecenas quis sem vel neque rhoncus dignissim. Ut et eros
										rhoncus, gravida tellus auctor, lobortis diam. In eu porta purus, sit amet
										pulvinar eros. Cras accumsan dignissim convallis. Curabitur aliquam efficitur
										diam ac pellentesque. Fusce ac leo est. <br />
										<br />
										Duis ultricies aliquet mauris vestibulum lacinia. Nulla a nibh ipsum. In diam
										nisl, mattis ac magna eget, pulvinar viverra ipsum. Ut vitae diam ultrices,
										semper risus vitae, accumsan nunc. Suspendisse ut dolor non sem pellentesque
										vulputate eu ut eros. Proin mollis tortor in est semper porta. Etiam rutrum, est
										non pellentesque sollicitudin, ligula turpis mattis nisl, at egestas justo
										libero id libero. In ac pretium magna. Praesent lobortis sapien bibendum,
										scelerisque neque in, egestas lorem. Sed pharetra lectus a odio euismod mattis.
										Donec egestas ante ac magna blandit aliquet. In fringilla venenatis lacus in
										dictum. Donec vel lacus ut tellus feugiat ullamcorper in sit amet mauris. Sed
										aliquet accumsan risus in tristique. Nullam semper, massa in cursus hendrerit,
										turpis nibh eleifend leo, sed semper est massa vel odio.
									</p>
									<blockquote className="text-left-align">
										<p>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu nulla
											eget nisl dapibus finibus. Maecenas quis sem vel neque rhoncus dignissim. Ut
											et eros rhoncus, gravida tellus auctor, lobortis diam. In eu porta purus,
											sit amet pulvinar eros. Cras accumsan dignissim convallis. Curabitur aliquam
											efficitur diam ac pellentesque. Fusce ac leo est.
										</p>
										<span className="author-name">
											<a href="#.">Jhon Deneairo</a>
										</span>
									</blockquote>
									<p>
										Integer vel magna urna. Vestibulum id nisi arcu. Ut a euismod sem. Pellentesque
										aliquet gravida lacus ac aliquet. Mauris sed ante a turpis suscipit sagittis
										sagittis eu dolor. Phasellus eget lectus dignissim, dictum ex vel, laoreet dui.
										In facilisis risus a posuere tincidunt. Vivamus sit amet sem sodales, semper
										lorem id, laoreet mi. <br />
										<br />
										Ut a metus aliquet, ornare enim at, suscipit ante. Nullam sit amet ligula
										mollis, lacinia ligula mollis, blandit erat. Nam in diam ut mauris mattis
										malesuada vel nec nunc. Mauris bibendum, ipsum sed mollis suscipit, nisl elit
										mattis eros, nec semper nunc leo in arcu. Fusce non leo enim. Nam massa felis,
										tristique sit amet varius facilisis, tristique a tortor. Pellentesque sed
										pretium sem. Mauris euismod sem semper, commodo tortor id, vestibulum est.
										<br />
										<br />
										Donec molestie sagittis consequat. Vestibulum tempus tortor tortor, ac tincidunt
										dolor sodales nec. Nam faucibus odio et aliquet lacinia. Vivamus suscipit metus
										vel dictum finibus. In vitae blandit mi. Sed eros felis, commodo a finibus
										vitae, sodales eget enim. Quisque iaculis nulla quis est lacinia sodales.
										Praesent non dignissim neque. Vestibulum at placerat risus. Aliquam tincidunt
										posuere diam nec vehicula. Pellentesque cursus tincidunt arcu nec auctor. Nam
										quis nibh ipsum.
									</p>
								</div>
								<div className="comments margin-top30">
									<h4>Comments</h4>
									<ul className="media-list">
										<li className="media">
											<div className="media-left">
												<a href="#.">
													<img
														className="media-object img-responsive"
														src={require('../assets/images/coment-avatar-1.jpg')}
														alt=""
													/>
													<br />
												</a>
											</div>
											<div className="media-body">
												<h6 className="media-heading">
													Larsen Mortin<span> Dec 10, 2016 - 12.00 AM</span>
												</h6>
												<p>
													You would see the biggest gift would be from me and the card
													attached would say thank you for being a friend! Doin' it our way.
													Nothin's gonna turn us back now. Straight ahead.
												</p>
												<a href="#." className="btn btn-yellow raply">
													<i className="fa fa-reply" aria-hidden="true" />
												</a>
											</div>
										</li>

										<li className="media margin-left80">
											<div className="media-left">
												<a href="#.">
													<img
														className="media-object img-responsive"
														src={require('../assets/images/coment-avatar-2.jpg')}
														alt="..."
													/>
												</a>
											</div>
											<div className="media-body">
												<h6 className="media-heading">
													Jhon Kennadi <span> Dec 10, 2016 - 12.00 AM</span>
												</h6>
												<p>
													Taque ipsa quae abe illo inventore veritatis et quasi architecto
													beatae vitae dicta sunt explicabo nemosala enim ipsam volupitatem
													quia voluptas sit aspernatur aut odit.
												</p>
												<a href="#." className="btn btn-yellow raply">
													<i className="fa fa-reply" aria-hidden="true" />
												</a>
											</div>
										</li>
										<li className="media margin-left80">
											<div className="media-left">
												<a href="#.">
													<img
														className="media-object img-responsive"
														src={require('../assets/images/coment-avatar-4.jpg')}
														alt="..."
													/>
												</a>
											</div>
											<div className="media-body">
												<h6 className="media-heading">
													Jhon Kennadi <span> Dec 10, 2016 - 12.00 AM</span>
												</h6>
												<p>
													Taque ipsa quae abe illo inventore veritatis et quasi architecto
													beatae vitae dicta sunt explicabo nemosala enim ipsam volupitatem
													quia voluptas sit aspernatur aut odit.
												</p>
												<a href="#." className="btn btn-yellow raply">
													<i className="fa fa-reply" aria-hidden="true" />
												</a>
											</div>
										</li>

										<li className="media">
											<div className="media-left">
												<a href="#.">
													<img
														className="media-object img-responsive"
														src={require('../assets/images/coment-avatar-3.jpg')}
														alt="..."
													/>
												</a>
											</div>
											<div className="media-body">
												<h6 className="media-heading">
													Rock Lancer <span>Dec 10, 2016 - 12.00 AM</span>
												</h6>
												<p>
													Taque ipsa quae abe illo inventore veritatis et quasi architecto
													beatae vitae dicta sunt explicabo nemosala enim ipsam volupitatem
													quia voluptas sit aspernatur aut odit aut fugite.
												</p>
												<a href="#." className="btn btn-yellow raply">
													<i className="fa fa-reply" aria-hidden="true" />
												</a>
											</div>
										</li>
									</ul>

									<div className="commnetsfrm">
										<h4>Leave Your Comments</h4>
										<form>
											<ul className="row">
												<li className="col-sm-6">
													<label>
														<input
															type="text"
															className="form-control"
															name="name"
															placeholder="Name"
														/>
													</label>
												</li>
												<li className="col-sm-6">
													<label>
														<input
															type="text"
															className="form-control"
															name="name"
															placeholder="Email"
														/>
													</label>
												</li>
												<li className="col-sm-12">
													<label>
														<textarea className="form-control" placeholder="MESSAGE" />
													</label>
												</li>
												<li className="col-sm-12">
													<button type="submit" className="btn margin-top-20">
														SEND
													</button>
												</li>
											</ul>
										</form>
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
												<a href="#.">
													<img
														src={require('../assets/images/blog/1.jpg')}
														alt="Blog Title"
													/>
												</a>
											</div>
											<div className="media-body">
												<a className="media-heading" href="#">
													Integer vel magna urna. Vestibulum id nisi
												</a>
												<span>Dec 18, 2016</span>
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
