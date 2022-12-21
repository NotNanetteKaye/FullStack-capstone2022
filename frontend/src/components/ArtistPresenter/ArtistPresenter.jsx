
const ArtistPresenter = ({artist}) => {

    


    return (
        <div>
            <img src={artist.images[0]?.url} height={artist.images.height} width={artist.images.width} alt=''/>
            <h1>{artist.name}</h1>
            <p>Genre(s): {artist.genres}</p>
            <p>Popularity: {artist.popularity}</p>
            <p>{artist.external_urls.spotify}</p>
            <button>Save me</button>

        </div>
    )
}

export default ArtistPresenter