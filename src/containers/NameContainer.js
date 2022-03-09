import React from "react";

class NameContainer extends React.Component {

    state = {
        rootNames: ['poop', 'poopy', 'turd', 'stinky', 'fuzz', 'Muffin', 'baby', 'butt', 'Little', 'nugget', 'Fuzzy',
        'bumbus', 'plumbus', 'plumbusman', 'Pee-pee', 'snuggly', 'snoogly', 'man', 'slut', 'slutty', 'scoopy',
        'scoop', 'smoochy', 'fart', 'farty', 'beebee', 'monkey', 'shmoopy', 'sweet', 'plum', 'snoogly', 'McSlut', 'butthole',
        'fuzzyman', 'tiny', 'num-num', 'buddy', 'chunks', 'chunky', 'toasty', 'ass', 'scrumptious']
    }

    render() {
        return(
            <div>
                <h1 className="navbar-light bg-light">Plumbus Name Generator</h1>
            </div>
        )
    }


}

export default NameContainer