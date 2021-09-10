import getData from "./getData";


const API = "b568fde1c4b43d114514fa9e8c968456";
const URLart = "https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=";
const HomeURL = "https://ws.audioscrobbler.com/2.0/?method=tag.gettopalbums&tag=disco&api_key=b568fde1c4b43d114514fa9e8c968456&format=json";

const getDataSinger = async (id) => {
    const data = await getData();
    const album = data.albums.album[id-1].artist.name
    const apiURL = album ? `${URLart}${album}&api_key=${API}&format=json`: `${HomeURL}`;
    try{
        const response = await fetch(apiURL);
        const data = await response.json();
        return data;
    } catch(error){
        console.error('Fetch error', error);
    }
};

export default getDataSinger;