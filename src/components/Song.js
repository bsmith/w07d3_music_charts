const Song = ({song, onClickGenre}) => {
    // return <span>
    //     { Object.keys(song).map((k) => (<div key={k}>{k}: <code>{JSON.stringify(song[k])}</code></div>)) }
    // </span>
    /* NB. genre_href doesn't seem to work, but that's okay! */
    return <div className="Song">
        <span>#{song.chartpos}</span>
        <a href={song.album_href}>{song.name}</a>
        <a href={song.artist_href}>{song.artist}</a>
        { onClickGenre
            ? <button onClick={(e)=>onClickGenre(song.genre)}>{song.genre}</button>
            : <span>{song.genre}</span> }
    </div>
};

export default Song;