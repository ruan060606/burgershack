import React, { Component } from 'react';

class Location extends Component {

   mapsSelector = (e) => {
   	e.preventDefault();
      if /* if we're on iOS, open in Apple Maps */
    ((navigator.platform.indexOf("iPhone") !== -1) || 
     (navigator.platform.indexOf("iPad") !== -1) || 
     (navigator.platform.indexOf("iPod") !== -1))
    window.open("maps://maps.google.com/maps?daddr=Burger Shack, 1911, 2237 Powell St, San Francisco, CA 94133");
		else /* else use Google */
    window.open("https://www.google.com/maps/place/Burger+Shack/@37.806552,-122.4118016,18z/data=!4m5!3m4!1s0x808580fb28ee016d:0x4bc1151d3b734095!8m2!3d37.8055009!4d-122.4120484");
	}
	render() {
		return (
			<div className='location'>
			<div className='row'>
				<div className='col-md-6 col-12'>
					<img src='https://maps.googleapis.com/maps/api/staticmap?scale=1&size=520x410&style=feature:poi.business|visibility:off&style=feature:water|visibility:simplified&style=feature:road|element:labels.icon|visiblity:off&style=feature:road.highway|element:labels|saturation:-90|lightness:25&format=jpg&language=en&region=US&markers=color:0xddaa44|37.8055009,-122.4120484&zoom=16&client=google-presto&signature=zx7YM_UM9u00e0PLorAmLJQjwEw' alt="map"/>
				</div>
				<div className='col-md-6 col-12'>
					<h2 className='d-flex justify-content-center title'>INFO</h2>

					<div className='container'>
					<div className='row'>

							<div className='col-md-6 col-12'>
								<h3 className='subTitle'>Address</h3>
									<p className='address'>
									2237 Powell Street, San Francisco, 
										<br/>
									CA, 94133
									<br />
												<button  className='btn btn-primary direction' onClick={this.mapsSelector}><a target='_blank'>Get Direction</a></button>
									</p>

								<h3 className='subTitle'>Contact</h3>
								<p className='number'><a  className='telePhone' href='tel:+1-415-523-6818'>(415)523-6818</a></p>
							</div>

							<div className='col-md-6 col-12'>
								<h3 className='subTitle'>Business Hours</h3>
								<p className='hours'>
									Mon. 11:00 AM – 9:00 PM
									<br/>
									Tue. 11:00 AM – 9:00 PM
									<br/>
									Wed. 11:00 AM – 9:00 PM
									<br/>
									Thu. 11:00 AM – 9:00 PM
									<br/>
									Fri. 11:00 AM – 10:00 PM
									<br/>
									Sat. 11:00 AM – 10:00 PM
									<br/>
									Sun. 11:00 AM – 9:00 PM
								</p>
							</div>
					</div>
					</div>
				</div>	
			</div>
			</div>
		);
	}
}
export default Location;