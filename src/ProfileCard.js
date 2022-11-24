function ProfileCard({title, handle, image, description}) {
    //1)
    // const title = props.title;
    // const handle = props.handle;

    //2)
    // const { title, handle } = props; ->destructuring 
    // for case 1&2 props object is passed as function argument
    
    //3) passing arguments directly to function instead of props object

    return (
			<div className="card">
				<div className="card-image">
					<figure className="image is-1by1">
						<img src={image} alt="pda logo" />
					</figure>
				</div>

				<div className="card-content">
					<div className="media-content">
						<p className="title is-4">{title}</p>
						<p className="subtitle is-6">{handle}</p>
					</div>
                    <div className="content">{description}</div>
				</div>
			</div>
		);
}

export default ProfileCard;