import { useEffect, useState } from 'react';

import SongList from '../components/SongList';
import './ChartBox.css';

const apiEndpoint = "https://itunes.apple.com/gb/rss/topsongs/limit=20/json";
const genreEndpoint = genreId => `https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=${genreId}/json`;

const makeSong = (entry, index) => {
    return {
        _index: index,
        _orig: entry,
        chartpos: index + 1,
        name: entry["im:name"]["label"],
        href: entry["link"][0]["attributes"]["href"],
        album: entry["im:collection"]["im:name"]["label"],
        album_href: entry["im:collection"]["link"]["attributes"]["href"],
        artist: entry["im:artist"]["label"],
        artist_href: entry["im:artist"]["attributes"]["href"],
        genre: entry["category"]["attributes"]["label"],
        genre_href: entry["category"]["attributes"]["scheme"],
        genre_id: entry["category"]["attributes"]["im:id"],
    }
}

const getSongs = async (genreId) => {
    console.log("getSongs", genreId);
    const res = await fetch(genreId !== null ? genreEndpoint(genreId) : apiEndpoint);

    if (res.status !== 200)
        throw new Error('Did not get 200 response');

    const data = await res.json();

    console.log("data", Object.keys(data));
    /* only key is 'feed' */
    console.log("data.feed", Object.keys(data.feed));
    /* keys are 'author', 'entry', 'updated', 'rights', 'title', 'icon', 'link', 'id' */
    console.log("data.feed.title", data.feed.title);
    console.log("data.feed.entry[0]", Object.keys(data.feed.entry[0]));
    /* keys are 'im:name', 'im:image', 'im:collection', 'im:price', 'im:contentType', 'rights', 'title', 'link', 'id', 'im:artist', 'category', 'im:releaseDate' */

    console.log(data.feed.entry.map(e => e["im:name"]["label"]));

    const songs = data.feed.entry.map(makeSong);

    return { title: data.feed.title.label, songs };
};

const charsAsSpans = (str) => {
    const chars = str.split("");
    return chars.map(ch => <span>{ch}</span>);
}

const ChartBox = () => {
    const [songs, setSongs] = useState([]);
    const [genreId, setGenreId] = useState(null);
    const [title, setTitle] = useState("Please wait...");

    useEffect(() => {
        getSongs(genreId).then(({title, songs}) => (setSongs(songs), setTitle(title)))
    }, [genreId]);

    const handleClickGenre = (genreId) => {
        console.log("handleClickGenre", genreId);
        setGenreId(genreId);
    }

    const backToAllChart = () => {
        console.log("backToAllChart");
        setGenreId(null);
    }

    return <>
        <h2>{`${title}`}</h2>
        <h3 class="christmas-banner" onClick={()=>setGenreId(1080)}>{charsAsSpans("It's Christmas!")}</h3>
        {/*<GenreNav genreId={genreId} />*/}
        {/* <p>{genreId ?? "<null>"}</p> */}
        { genreId && <button onClick={backToAllChart}>Back to all genres</button> }
        <SongList songs={songs} onClickGenre={handleClickGenre} />
    </>;
};

export default ChartBox;