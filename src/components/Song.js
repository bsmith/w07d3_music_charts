import "./Song.css";

const Song = ({song, onClickGenre}) => {
    /* NB. genre_href doesn't seem to work, but that's okay! */
    return <article className="Song">
        <span className="Song--chartpos">#{song.chartpos}</span>
        <h3 className="Song--name" href={song.href}>{song.name}</h3>
        <a className="Song--artist" href={song.artist_href}>by {song.artist}</a>
        <a className="Song--album" href={song.album_href}>from {song.album}</a>
        { onClickGenre
            ? <button className="Song--genre" onClick={(e)=>onClickGenre(song.genre_id)}>{song.genre}</button>
            : <span className="Song--genre">{song.genre}</span> }
        {/* { Object.keys(song._orig).map((k) => 
            <div key={k}><b>{k}:</b> {JSON.stringify(song._orig[k])}</div>
        ) } */}
    </article>
};

export default Song;