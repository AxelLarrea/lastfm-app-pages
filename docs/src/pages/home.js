import getData from "../utils/getData";


const home = async () => {
    const albums = await getData();
    const albumsShort = albums.albums.album;


    const view = `
        <div class="albums">
            ${albumsShort.map(album => 
                `
                <article>
                    <a href="#/${album['@attr'].rank}">
                        <img src="${album.image[2]['#text']}" alt="${album.name}"/>
                        <h3>${album.name}</h3>
                    </a>
                </article>
            `).join('')}
        </div>
    `;
    return view;
}

export default home;