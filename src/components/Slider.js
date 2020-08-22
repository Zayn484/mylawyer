import React from 'react';

export default function Slider() {
	return (
		<div class="tp-banner-container" id="slider">
			<div class="tp-banner">
				<ul>
					<li data-slotamount="7" data-transition="fade" data-masterspeed="1000" data-saveperformance="on">
						{' '}
						<img alt="" src={require('../assets/images/slider/dummy.png')} data-lazyload={require('../assets/images/slider/banner.jpg')} />
						<div
							class="caption lfb large-title tp-resizeme slidertext2"
							data-x="right"
							data-y="200"
							data-speed="600"
							data-start="1000"
						>
							Welcome to Lawyer & Attorney Template
						</div>
						<div
							class="caption lfb large-title tp-resizeme slidertext1"
							data-x="right"
							data-y="240"
							data-speed="600"
							data-start="1600"
						>
							We Care About you
						</div>
						<div
							class="caption lfb large-title tp-resizeme slidertext1"
							data-x="right"
							data-y="300"
							data-speed="600"
							data-start="2200"
						>
							{' '}
							Best Lawyers In New York
						</div>
						<div
							class="caption lfb large-title tp-resizeme sliderbtn"
							data-x="right"
							data-y="370"
							data-speed="600"
							data-start="2800"
						>
							<a href="#." class="section-btn">
								Get Started
							</a>
						</div>
					</li>
					<li data-slotamount="7" data-transition="fade" data-masterspeed="1000" data-saveperformance="on">
						{' '}
						<img alt="" src={require('../assets/images/slider/dummy.png')} data-lazyload={require('../assets/images/slider/banner2.jpg')} />
						<div
							class="caption lfb large-title tp-resizeme slidertext2"
							data-x="center"
							data-y="280"
							data-speed="600"
							data-start="1000"
						>
							Welcome to Lawyer & Attorney Template
						</div>
						<div
							class="caption lfb large-title tp-resizeme slidertext1"
							data-x="center"
							data-y="310"
							data-speed="600"
							data-start="1600"
						>
							Attorney Lawyers Template
						</div>
						<div
							class="caption lfb large-title tp-resizeme sliderbtn"
							data-x="center"
							data-y="400"
							data-speed="600"
							data-start="2200"
						>
							<a href="#." class="section-btn">
								Get Started
							</a>
						</div>
					</li>
				</ul>
			</div>
		</div>
	);
}
