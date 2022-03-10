import React from 'react'

class NameShow extends React.Component {

    state = {
        // rootNames: ['poop', 'poopy', 'turd', 'stinky', 'fuzz', 'Muffin', 'baby', 'butt', 'Little', 'nugget', 'Fuzzy',
        // 'bumbus', 'plumbus', 'plumbusman', 'Pee-pee', 'snuggly', 'snoogly', 'man', 'slut', 'slutty', 'scoopy',
        // 'scoop', 'smoochy', 'fart', 'farty', 'beebee', 'monkey', 'shmoopy', 'sweet', 'plum', 'snoogly', 'McSlut', 'butthole',
        // 'fuzzyman', 'tiny', 'num-num', 'buddy', 'chunks', 'chunky', 'toasty', 'ass', 'scrumptious'],
        // rootNames: [this.props.rootNames],
        generatedNames: [],
        currentName: ''
    }

    componentDidMount() {
        this.generateName()
        // console.log(this.props)
    }

    capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    handleClick = () => {
        this.generateName()
    }

    moveBack(name) {
        if (this.state.generatedNames.indexOf(name) > 0) {
            this.setState({
                generatedNames: [...this.state.generatedNames],
                currentName: this.state.generatedNames[this.state.generatedNames.indexOf(name)-1]
            })
        }
    }

    moveForward(name) {
        if (this.state.generatedNames.indexOf(name) < this.state.generatedNames.length-1) {
            this.setState({ 
                generatedNames: [...this.state.generatedNames],
                currentName: this.state.generatedNames[this.state.generatedNames.indexOf(name)+1]
            })
        }
    }

    handleKeyPress = (event) => {
        if (event.key === '[') {
            if (this.state.currentName != '') {this.moveBack(this.state.currentName)}
        } else if (event.key === ']') {
            if (this.state.currentName != '') {this.moveForward(this.state.currentName)}
        }
    }

    updateName = (state, name) => {
        this.setState({
            // rootNames: [...this.props.rootNames],
            generatedNames: [...state.generatedNames, name],
            currentName: name
        })
    }

    generateName() {

        let generatedName = ""

        let mr = Math.floor(Math.random()*10)
        let long = Math.floor(Math.random()*10)
        let the = Math.floor(Math.random()*30)

        let name_1 = this.capitalizeFirstLetter(`${this.props.rootNames[Math.floor(((Math.random()*this.props.rootNames.length)))]}`)
        let name_2 = this.capitalizeFirstLetter(`${this.props.rootNames[Math.floor(((Math.random()*this.props.rootNames.length)))]}`)
        let name_3 = this.capitalizeFirstLetter(`${this.props.rootNames[Math.floor(((Math.random()*this.props.rootNames.length)))]}`)


        if (the == 0) {
            generatedName = `${name_1} ${name_2} the ${name_3}`
        } else if (mr == 0 && long != 0) {
            generatedName = `Mr. ${name_1} ${name_2}`
        } else if (mr != 0 && long == 0) {
            generatedName = `${name_1} ${name_2} the ${name_3}`
        } else {generatedName = `${name_1} ${name_2}`}

        this.updateName(this.state, generatedName)
    }

    render() {
        return(
            <div onKeyPress={this.handleKeyPress}><br></br>
                
                <h1 className='mt-2'>Plum's new name is:</h1>
                <h2 className='font-weight-bold'>{this.state.currentName}</h2><br></br>
                <button className='btn btn-primary mt-4 mb-2'  onClick={this.handleClick}>New Name</button>
                
            </div>
        )
    }
}

export default NameShow