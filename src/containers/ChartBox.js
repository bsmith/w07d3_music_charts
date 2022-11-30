import { useEffect, useState } from 'react';

import './ChartBox.css';

const apiEndpoint = "https://itunes.apple.com/gb/rss/topsongs/limit=20/json";

const makeSong = (entry, index) => {
    return {
        _index: index,
        id: entry["id"],
        name: entry["im:name"],
        title: entry["title"],
        artist: entry["im:artist"],
        category: entry["category"]
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

    const songItems = songs.map(song => {
        return <li key={song._index}>
            {/* { Object.keys(song).map((k) => (<div>k: <code>{JSON.stringify(song[k]})</code></div>)) } */}
            { Object.keys(song).map((k) => (<div>{k}: <code>{JSON.stringify(song[k])}</code></div>)) }
        </li>
    });

    return <>
        <h2>ChartBox</h2>
        <ul>
            { songItems }
        </ul>
    </>;
};

export default ChartBox;