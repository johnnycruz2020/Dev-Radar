import React from 'react';

import './styles.css';

function DevItem({ dev, removeDev, editDev }) {

	function handleRemoveDev() {
		removeDev(dev.github_username);
	}

	function handleEditDev() {
		editDev(dev.github_username);
	}

	return (
			<li className="dev-item">
				<div className="user-remove">
					<button onClick={handleRemoveDev}>X</button>
				</div>
			<header>
				<img src={dev.avatar_url} alt={dev.name}/>
				<div className="user-info">
					<strong>{dev.name}</strong>
					<span>{dev.techs.join(', ')}</span>
				</div>
			</header>
			<p>{dev.bio}</p>
			<a href={`https://github.com/${dev.github_username}`}>Acessar perfil no Github</a>
			<div className="user-edit">
				<button onClick={handleEditDev}>Editar</button>
			</div>
		</li>   
	)
}

export default DevItem;