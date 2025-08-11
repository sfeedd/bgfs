import React, { useEffect, useState } from 'react';

function Players() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/players/')
      .then(res => res.json())
      .then(data => setPlayers(data));
  }, []);

  return (
    <div>
      {players.map(player => (
        <div key={player.id}>
          {player.photo_base64 && (
            <img
              src={`data:image/jpeg;base64,${player.photo_base64}`}
              alt={player.name}
              width="150"
            />
          )}
          <h3>{player.name}</h3>
          <p>출생일: {player.birth_date}</p>
          <p>성별: {player.gender === 'M' ? '남성' : '여성'}</p>
          <p>등번호: {player.number}</p>
        </div>
      ))}
    </div>
  );
}

export default Players;
