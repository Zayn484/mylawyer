import React from 'react';

export default function Faqs() {
	return (
		<div id="faqs" className="parallax-section">
			<div className="container">
				<div className="row">
					<div className="col-md-6">
						<div className="videowraper">
							<div className="videobg">
								<div
									className="video-image"
									style={{ backgroundImage: `url(${require('../assets/images/videobg.jpg')})` }}
								/>
								<div className="playbtn">
									<a href="#." className="popup">
										<span />
									</a>
								</div>
							</div>
						</div>
					</div>

					<div className="col-md-6">
						<div className="faqs">
							<div className="panel-group" id="accordion">
								<div className="panel panel-default">
									<div className="panel-heading">
										<h4 className="panel-title">
											{' '}
											<a
												data-toggle="collapse"
												data-parent="#accordion"
												className=""
												href="#collapse1"
											>
												Nunc ut erat at massa elementum tempus.?
											</a>{' '}
										</h4>
									</div>
									<div id="collapse1" className="panel-collapse collapse in">
										<div className="panel-body">
											Integer aliquam sed ante non volutpat. Aenean vitae nulla varius, dictum
											nisi non, rhoncus sem. Vivamus vel velit semper, sagittis ante vel, tempor
											augue. Proin quis justo auctor, auctor risus vitae, tempor enim. Aliquam
											erat volutpat. Phasellus facilisis aliquam eleifend. Donec eget nisl
											elementum, luctus velit ut, viverra tellus.{' '}
										</div>
									</div>
								</div>

								<div className="panel panel-default">
									<div className="panel-heading">
										<h4 className="panel-title">
											{' '}
											<a
												data-toggle="collapse"
												data-parent="#accordion"
												className=""
												href="#collapse2"
											>
												Nunc ut erat at massa elementum tempus.?
											</a>{' '}
										</h4>
									</div>
									<div id="collapse2" className="panel-collapse collapse in">
										<div className="panel-body">
											Integer aliquam sed ante non volutpat. Aenean vitae nulla varius, dictum
											nisi non, rhoncus sem. Vivamus vel velit semper, sagittis ante vel, tempor
											augue. Proin quis justo auctor, auctor risus vitae, tempor enim. Aliquam
											erat volutpat. Phasellus facilisis aliquam eleifend. Donec eget nisl
											elementum, luctus velit ut, viverra tellus.{' '}
										</div>
									</div>
								</div>

								<div className="panel panel-default">
									<div className="panel-heading">
										<h4 className="panel-title">
											{' '}
											<a
												data-toggle="collapse"
												data-parent="#accordion"
												className=""
												href="#collapse3"
											>
												Nunc ut erat at massa elementum tempus.?
											</a>{' '}
										</h4>
									</div>
									<div id="collapse3" className="panel-collapse collapse in">
										<div className="panel-body">
											Integer aliquam sed ante non volutpat. Aenean vitae nulla varius, dictum
											nisi non, rhoncus sem. Vivamus vel velit semper, sagittis ante vel, tempor
											augue. Proin quis justo auctor, auctor risus vitae, tempor enim. Aliquam
											erat volutpat. Phasellus facilisis aliquam eleifend. Donec eget nisl
											elementum, luctus velit ut, viverra tellus.{' '}
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
