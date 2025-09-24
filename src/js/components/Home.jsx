import Navbar from "./Navbar";
import Footer from "./Footer";
import Hero from "./Hero";
import Cardrow from "./Cardrow";
//create your first component
const Home = () => {
	return (
		<>
		
		<Navbar/>

		<div className="row">
			<div className="col-1"></div>
			<div className="col-10">
				<Hero/>
			</div>
			<div className="col-1"></div>
		</div>

		<div className="row">
			<div className="col-1"></div>
			<div className="col-10">
				<Cardrow/>
			</div>
			<div className="col-1"></div>
		</div>
		
		
			<Footer/>

			

		
		</>
	);
};

export default Home;