import React, { useState, useEffect } from 'react';

import './styles.css';

function DevFormEdit({ onSubmit }) {
	const [name, setName] = useState('');
	const [techs, setTechs] = useState('');
	const [avatar_url, setAvatarUrl] = useState('');
	const [bio, setBio] = useState('');
  const [latitude, setLatitude] = useState('');
	const [longitude, setLongitude] = useState('');
	
	useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        setLatitude(latitude);
        setLongitude(longitude);
      },
      (err) => {
        console.log(err);
      },
      {
        timeout: 30000,
      }
    );
	}, []);
	
	async function handleSubmit(e) {
		e.preventDefault();
		
		await onSubmit({
			name,
			avatar_url,
			bio,
      techs,
      latitude,
      longitude,
		});

		setName('');
		setAvatarUrl('');
		setBio('');
		setTechs('');
	}

	return (
			<form onSubmit={handleSubmit}>
			<div className="input-block">
				<label htmlFor="name">Nome</label>
				<input 
					name="name"
					id="name" 
					required
					value={name}
					onChange={e => setName(e.target.value)}
				/>
			</div>

			<div className="input-block">
				<label htmlFor="avatar_url">Avatar URL</label>
				<input 
					name="avatar_url"
					id="avatar_url" 
					required
					value={avatar_url}
					onChange={e => setAvatarUrl(e.target.value)}
				/>
			</div>

			<div className="input-block">
				<label htmlFor="bio">Biografia</label>
				<input 
					name="bio"
					id="bio" 
					required
					value={bio}
					onChange={e => setBio(e.target.value)}
				/>
			</div>

			<div className="input-block">
				<label htmlFor="techs">Tecnologias</label>
				<input 
					name="techs" 
					required
					value={techs}
					onChange={e => setTechs(e.target.value)}
				/>
			</div>

			<div className="input-group">
				<div className="input-block">
					<label htmlFor="latitude">Latitude</label>
					<input 
						type="number" 
						name="latitude" 
						required 
						value={latitude}
						onChange={e => setLatitude(e.target.value)}
					/>
				</div>

				<div className="input-block">
					<label htmlFor="longitude">Longitude</label>
					<input 
						type="number" 
						name="longitude" 
						required 
						value={longitude}
						onChange={e => setLongitude(e.target.value)}
					/>
				</div>
			</div>

			<button type="submit">Salvar</button>

		</form>
	)
}

export default DevFormEdit;