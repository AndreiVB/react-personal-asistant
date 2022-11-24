import 'bulma/css/bulma.css';
import ProfileCard from "./ProfileCard";
import AlexaImage from './images/alexa.png';
import CortanaImage from './images/cortana.png';
import SiriImage from './images/siri.png';


function App() {
    return (
			<div>
				<section className="hero is-primary">
					<div className="hero-body">
						<p className="title">Personal Digital Assistans</p>
					</div>
				</section>

				<div className="container">
					<div className="section">
						<div className="columns">
							<div className="column is-4">
								<ProfileCard
									title="Alexa"
									handle="@alexa99"
									image={AlexaImage}
									description="Alexa was created by Amazon and tells you the weather"
								/>
							</div>
							<div className="column is-4">
								<ProfileCard
									title="Cortana"
									handle="@cortana32"
									image={CortanaImage}
									description="Cortana was made by Microsoft. No one use it"
								/>
							</div>
							<div className="column is-4">
								<ProfileCard
									title="Siri"
									handle="@siri07"
									image={SiriImage}
									description="Siri was made by Apple and it was kind of fun at start"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
}

export default App;