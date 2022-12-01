import Song from "./Song";
import './SongList.css';

const SongList = ({songs, ...props}) => {
    const songItems = songs.map(song =>
        <li key={song._index}><Song song={song} {...props}/></li>);
    return <ol className="SongList">{songItems}</ol>
};

export default SongList;