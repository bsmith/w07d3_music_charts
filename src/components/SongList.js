import Song from "./Song";

const SongList = ({songs}) => {
    const songItems = songs.map(song =>
        <li key={song._index}><Song song={song} /></li>);
    return <ol>{songItems}</ol>
};

export default SongList;