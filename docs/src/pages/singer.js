import getHash from '../utils/getHash';
import getDataSinger from '../utils/getDataSinger';
import getData from '../utils/getData';


const singer = async() => {

    const id = getHash();
    const singer = await getDataSinger(id);
    const artist = singer.artist;

    const data = await getData();
    const album = data.albums.album;


    const view = `
        <div class="singer-inner">
            <article class="singer-card">
                <img src="${album[id-1].image[2]['#text']}" alt="${album[id-1].artist.name}">
            </article>

            <article class="singer-card">
                <h3>Artista: <span>${album[id-1].artist.name}</span></h3>
                <h3>Album: <span>${album[id-1].name}</span></h3>
                <h3>Reproducciones: <span>${artist.stats.playcount}</span></h3>
            </article>
        </div>
    `;
    return view;
};

export default singer;