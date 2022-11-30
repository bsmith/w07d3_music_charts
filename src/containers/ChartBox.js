import { useEffect, useState } from 'react';

import SongList from '../components/SongList';
import './ChartBox.css';

const apiEndpoint = "https://itunes.apple.com/gb/rss/topsongs/limit=20/json";

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

const getSongs = async () => {
    const res = await fetch(apiEndpoint);

    if (res.status !== 200)
        throw new Error('Did not get 200 response');

    const data = await res.json();

    console.log("data", Object.keys(data));
    /* only key is 'feed' */
    console.log("data.feed", Object.keys(data.feed));
    /* keys are 'author', 'entry', 'updated', 'rights', 'title', 'icon', 'link', 'id' */
    console.log("data.feed.entry[0]", Object.keys(data.feed.entry[0]));
    /* keys are 'im:name', 'im:image', 'im:collection', 'im:price', 'im:contentType', 'rights', 'title', 'link', 'id', 'im:artist', 'category', 'im:releaseDate' */

    const songs = data.feed.entry.map(makeSong);

    return songs;
};

const ChartBox = () => {
    const [songs, setSongs] = useState([]);

    useEffect(() => {
        getSongs().then(setSongs)
    }, []);

    return <>
        <h2>ChartBox</h2>
        <SongList songs={songs} />
    </>;
};

export default ChartBox;