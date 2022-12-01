import Song from "./Song";
import './SongList.css';

const SongList = ({songs, ...props}) => {
    let songItems = songs.map(song =>
        <li key={song._index}><Song song={song} {...props}/></li>);
    if (!songItems.length)
        songItems = [<li key="pleasewait">Please wait...</li>]
    return <ol className="SongList">{songItems}</ol>
};

export default SongList;