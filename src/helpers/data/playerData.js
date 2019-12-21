import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getPlayerByUid = (uid) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/players.json?orderBy="uid"&equalTo="${uid}"`)
    .then((result) => {
      const allPlayersObj = result.data;
      const players = [];
      if (allPlayersObj != null) {
        Object.keys(allPlayersObj).forEach((playerId) => {
          const newPlayer = allPlayersObj[playerId];
          newPlayer.id = playerId;
          players.push(newPlayer);
        });
      }
      resolve(players);
    })
    .catch((error) => {
      reject(error);
    });
});

const savePlayer = (playerInfo) => axios.post(`${baseUrl}/players.json`, playerInfo)

const updatePlayer = (playerId, newPlayerInfo) => axios.put(`${baseUrl}/players/${playerId}.json`, newPlayerInfo)

export default { getPlayerByUid, savePlayer, updatePlayer };
