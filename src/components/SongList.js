import Song from "./Song";

const SongList = ({songs, ...props}) => {
    const songItems = songs.map(song =>
        <li key={song._index}><Song song={song} {...props}/></li>);
    return <ol>{songItems}</ol>
};

export default SongList;