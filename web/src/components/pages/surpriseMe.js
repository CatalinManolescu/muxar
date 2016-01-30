'use strict';

var React = require ('react');
var SongsApi = require('../api/songsApi');

var Surprise = React.createClass({
	click: function(name){
		console.log(name);
		
	},

	render: function(){
		return (
	        <div className="surpriseBox">

				<img className="continent" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Flag-map_of_Albania.svg/2000px-Flag-map_of_Albania.svg.png" onClick={this.click.bind(this,"Albania")}/>
<img className="continent" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Flag_map_of_Andorra.svg/580px-Flag_map_of_Andorra.svg.png" onClick={this.click.bind(this,"Andorra")}/>
<img className="continent" src="http://mapsof.net/uploads/static-maps/armenia_flag_map.png" onClick={this.click.bind(this,"Armenia")}/>
<img className="continent" src="http://4.bp.blogspot.com/-S-VufcywHIk/UQIDtU7n58I/AAAAAAAAAjc/F3yxkwkmuoI/s1600/austria-flag-map-640x360.png" onClick={this.click.bind(this,"Austria")}/>
<img className="continent" src="http://3.bp.blogspot.com/-w8BLcvPFVjk/UJwZmf5Fd6I/AAAAAAAABUM/CPLt5tuUVoc/s1600/Azerbaijan+%5B3DMap+Flag%5D%5B1.5%5D.png" onClick={this.click.bind(this,"Azerbaijan")}/>
<img className="continent" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Flag-map_of_Belarus_(1995-2012).svg/2000px-Flag-map_of_Belarus_(1995-2012).svg.png" onClick={this.click.bind(this,"Belarus")}/>
<img className="continent" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Belgium_stub.svg/2000px-Belgium_stub.svg.png" onClick={this.click.bind(this,"Belgium")}/>
<img className="continent" src="http://atvtoursbulgaria.com/Resources/FCK/image/Bulgaria/Flag_Map_Of_Bulgaria.png" onClick={this.click.bind(this,"Bulgaria")}/>
<img className="continent" src="http://www.hrvatski.pokersemdeposito.com/images/hrvatski_poker_I.png" onClick={this.click.bind(this,"Croatia")}/>
<img className="continent" src="https://eurovisionobsession.files.wordpress.com/2010/02/cypriot-flag-map.png" onClick={this.click.bind(this,"Cyprus")}/>
<img className="continent" src="http://www.polyvore.com/cgi/img-thing?.out=jpg&size=l&tid=23467895" onClick={this.click.bind(this,"Czech Republic")}/>
<img className="continent" src="http://www.vectors.co.nz/wp-content/uploads/Flag_Map_Of_Denmark.png" onClick={this.click.bind(this,"Denmark")}/>
<img className="continent" src="https://upload.wikimedia.org/wikipedia/en/c/cb/Estonia-stub-map.png" onClick={this.click.bind(this,"Estonia")}/>
<img className="continent" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Flag-map_of_Finland.svg/303px-Flag-map_of_Finland.svg.png" onClick={this.click.bind(this,"Finland")}/>
<img className="continent" src="http://testdenationalite.fr/blog/wp-content/uploads/2015/03/france.png" onClick={this.click.bind(this,"France")}/>
<img className="continent" src="https://upload.wikimedia.org/wikipedia/commons/6/6b/Flag_map_of_the_Republic_of_Georgia.png" onClick={this.click.bind(this,"Georgia (country)")}/>
<img className="continent" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Flag_map_of_Germany.svg/2000px-Flag_map_of_Germany.svg.png" onClick={this.click.bind(this,"Germany")}/>
<img className="continent" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Flag-map_of_Greece_(1822-1978).svg/471px-Flag-map_of_Greece_(1822-1978).svg.png" onClick={this.click.bind(this,"Greece")}/>
<img className="continent" src="http://mapsof.net/uploads/static-maps/hungary_flag_map.png" onClick={this.click.bind(this,"Hungary")}/>
<img className="continent" src="http://thenewspaperworld.com/wp-content/uploads/2015/09/Icelandic-Map-Flag.jpg" onClick={this.click.bind(this,"Iceland")}/>
<img className="continent" src="http://mapsof.net/uploads/static-maps/italy_flag_map.png" onClick={this.click.bind(this,"Italy")}/>
<img className="continent" src="http://thumbs.dreamstime.com/t/map-flag-latvian-republic-17437338.jpg" onClick={this.click.bind(this,"Latvia")}/>
<img className="continent" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Flag-map_of_Liechtenstein.svg/305px-Flag-map_of_Liechtenstein.svg.png" onClick={this.click.bind(this,"Liechtenstein")}/>
<img className="continent" src="https://vzemlys.files.wordpress.com/2012/01/ltfull.png" onClick={this.click.bind(this,"Lithuania")}/>
<img className="continent" src="http://mapsof.net/uploads/static-maps/luxembourg_flag_map.png" onClick={this.click.bind(this,"Luxembourg")}/>
<img className="continent" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Moldova_map_coat.svg/496px-Moldova_map_coat.svg.png" onClick={this.click.bind(this,"Moldova")}/>
<img className="continent" src="https://upload.wikimedia.org/wikipedia/commons/8/82/Flag-map_of_Monaco.png" onClick={this.click.bind(this,"Monaco")}/>
<img className="continent" src="http://travel.thetrainline-europe.com/wp-content/uploads/2014/08/Montenegro_Flag_Map1-300x300.png" onClick={this.click.bind(this,"Montenegro")}/>
<img className="continent" src="http://mapsof.net/uploads/static-maps/netherlands_flag_map.png" onClick={this.click.bind(this,"Netherlands")}/>
<img className="continent" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Flag_map_of_Northern_Cyprus.svg/1024px-Flag_map_of_Northern_Cyprus.svg.png" onClick={this.click.bind(this,"Northern Cyprus")}/>
<img className="continent" src="http://2.bp.blogspot.com/-fk50207s6e4/Tv9ASP8joLI/AAAAAAAAABs/_d_f_tpeS_U/s1600/poland.png" onClick={this.click.bind(this,"Poland")}/>
<img className="continent" src="http://www.atomoquimica.com/Mapa%20de%20Potugal%20em%20Bandeira.png" onClick={this.click.bind(this,"Portugal")}/>
<img className="continent" src="https://openclipart.org/image/2400px/svg_to_png/237466/Republic-Of-Ireland-Map-Flag.png" onClick={this.click.bind(this,"Republic of Ireland")}/>
<img className="continent" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Flag_map_of_the_Republic_of_Macedonia.svg/2000px-Flag_map_of_the_Republic_of_Macedonia.svg.png" onClick={this.click.bind(this,"Republic of Macedonia")}/>
<img className="continent" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Flag_map_of_Romania.svg/2000px-Flag_map_of_Romania.svg.png" onClick={this.click.bind(this,"Romania")}/>
<img className="continent" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Flag-map_of_the_Russian_Empire.svg/1280px-Flag-map_of_the_Russian_Empire.svg.png" onClick={this.click.bind(this,"Russia")}/>
<img className="continent" src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Flag-map_of_San_Marino.png" onClick={this.click.bind(this,"San Marino")}/>
<img className="continent" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Flag_map_of_Serbia_(with_Kosovo).svg/2000px-Flag_map_of_Serbia_(with_Kosovo).svg.png" onClick={this.click.bind(this,"Serbia")}/>
<img className="continent" src="https://upload.wikimedia.org/wikipedia/en/3/31/Slovakia-stub-map.PNG" onClick={this.click.bind(this,"Slovakia")}/>
<img className="continent" src="http://www.vectors.co.nz/wp-content/uploads/Flag_Map_Of_Slovenia-250x250.png" onClick={this.click.bind(this,"Slovenia")}/>
<img className="continent" src="https://upload.wikimedia.org/wikipedia/commons/7/76/Flag_map_of_Greater_Spain.png" onClick={this.click.bind(this,"Spain")}/>
<img className="continent" src="http://www.vectors.co.nz/wp-content/uploads/Flag_Map_Of_Sweden.png" onClick={this.click.bind(this,"Sweden")}/>
<img className="continent" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Flag-map_of_Switzerland.svg/2000px-Flag-map_of_Switzerland.svg.png" onClick={this.click.bind(this,"Switzerland")}/>
<img className="continent" src="http://vignette4.wikia.nocookie.net/gtawiki/images/8/8e/Ukraine-Stub-Map.PNG/revision/latest?cb=20140904103258" onClick={this.click.bind(this,"Ukraine")}/>
<img className="continent" src="http://www.vectors.co.nz/wp-content/uploads/Flag_Map_Of_The_United_Kingdom.png" onClick={this.click.bind(this,"United Kingdom")}/>
<img className="continent" src="https://soulhealingangelicguidance.files.wordpress.com/2012/06/the_vatican_city_flag10.png" onClick={this.click.bind(this,"Vatican City")}/>
	        </div>
		);
	}
});

module.exports = Surprise;