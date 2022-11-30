import { useState } from 'react';

import './ChartBox.css';

const apiEndpoint = "https://itunes.apple.com/gb/rss/topsongs/limit=20/json";

const ChartBox = () => {
    // const [releases, setReleases] = useState(ukFilms);
    // let [region, setRegion] = useState("uk");

    // if (!(region in staticData)) {
    //     setRegion("uk");
    //     region = "uk";
    // }

    // const regionObj = staticData[region];
    // const releases = regionObj.films;
    // const regionNames = mapEntries(staticData, ([region, data]) => [region, data.name]);

    // return <aside className="ReleaseBox">
    //     <ReleasesTitle currentRegion={region} regionNames={regionNames} onRegionChange={setRegion} />
    //     <hr />
    //     {/*<button onClick={ (e) => { if (region === "uk") { setRegion("fr") } else { setRegion("uk")}} }>TEST REGION</button>
    //     <hr />*/}

    //     <ReleaseList releases={releases} />

    //     <hr />
    //     <MoreReleases href={viewMoreLink(regionObj.region)}/>
    // </aside>;

    return <p>ChartBox</p>
};

export default ChartBox;