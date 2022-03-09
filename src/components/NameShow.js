import React from 'react'

class NameShow extends React.Component {

    state = {
        rootNames: ['poop', 'poopy', 'turd', 'stinky', 'fuzz', 'Muffin', 'baby', 'butt', 'Little', 'nugget', 'Fuzzy',
        'bumbus', 'plumbus', 'plumbusman', 'Pee-pee', 'snuggly', 'snoogly', 'man', 'slut', 'slutty', 'scoopy',
        'scoop', 'smoochy', 'fart', 'farty', 'beebee', 'monkey', 'shmoopy', 'sweet', 'plum', 'snoogly', 'McSlut', 'butthole',
        'fuzzyman', 'tiny', 'num-num', 'buddy', 'chunks', 'chunky', 'toasty', 'ass', 'scrumptious'],
        generatedNames: [],
        currentName: ''
    }

    componentDidMount() {
        this.generateName()
        // this.setState({
        //     generatedNames: [...this.state.generatedNames],
        //     currentName: this.state.generatedNames[0]
        // })
        // console.log(this.state.currentName)
    }

    capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    handleClick = () => {
        this.generateName()
    }

    moveBack(name) {
        console.log(`BACK: ${name}`)
        console.log(this.state.generatedNames.indexOf(name))
        if (this.state.generatedNames.indexOf(name) > 0) {
            this.setState({
                generatedNames: [...this.state.generatedNames],
                currentName: this.state.generatedNames[this.state.generatedNames.indexOf(name)-1]
            })
            // this.updateState({ currentName: currentName})
        }
    }

    moveForward(name) {
        console.log(`FORWARD: ${name}`)
        console.log(this.state.generatedNames.indexOf(name))
        if (this.state.generatedNames.indexOf(name) < this.state.generatedNames.length-1) {
            this.setState({ 
                generatedNames: [...this.state.generatedNames],
                currentName: this.state.generatedNames[this.state.generatedNames.indexOf(name)+1]
            })
            // this.updateState({ currentName: currentName})
        }
    }

    handleKeyPress = (event) => {
        
        // console.log(`AFTER KEY PRESS Current: ${this.state.currentName}`)
        console.log(event.key)
        if (event.key === 'Spacebar') {
            console.log('Space')
            this.generateName()
        } else if (event.key === '[') {
            if (this.state.currentName != '') {this.moveBack(this.state.currentName)}
            // console.log('Back')
            // this.setState({
            //     generatedNames: [...this.state.generatedNames], 
            //     currentName: this.state.generatedNames[this.state.generatedNames.indexOf(this.state.currentName)-1]
            // })
        } else if (event.key === ']') {
            if (this.state.currentName != '') {this.moveForward(this.state.currentName)}
            // console.log('Forward')
            // this.setState({
            //     generatedNames: [...this.state.generatedNames], 
            //     currentName: this.state.generatedNames[this.state.generatedNames.indexOf(this.state.currentName)+1]
            // })
        }
        // console.log(event.key)
      }

    updateName = (state, name) => {
        this.setState({
            rootNames: [...state.rootNames],
            generatedNames: [...state.generatedNames, name],
            currentName: name
        })
    }

    generateName() {

        let generatedName = ""

        let mr = Math.floor(Math.random()*10)
        let long = Math.floor(Math.random()*10)
        let the = Math.floor(Math.random()*30)

        let name_1 = this.capitalizeFirstLetter(`${this.state.rootNames[Math.floor(((Math.random()*this.state.rootNames.length)))]}`)
        let name_2 = this.capitalizeFirstLetter(`${this.state.rootNames[Math.floor(((Math.random()*this.state.rootNames.length)))]}`)
        let name_3 = this.capitalizeFirstLetter(`${this.state.rootNames[Math.floor(((Math.random()*this.state.rootNames.length)))]}`)



        if (the == 0) {
            generatedName = `${name_1} ${name_2} the ${name_3}`
        } else if (mr == 0 && long != 0) {
            generatedName = `Mr. ${name_1} ${name_2}`
        } else if (mr != 0 && long == 0) {
            generatedName = `${name_1} ${name_2} the ${name_3}`
        } else {generatedName = `${name_1} ${name_2}`}

        // console.log(`BEFORE Generated: ${generatedName}`)
        // console.log(`BEFORE Current: ${this.state.currentName}`)

        // this.setState({
        //     generatedNames: [...this.state.generatedNames, generatedName],
        //     currentName: generatedName
        // })


        this.updateName(this.state, generatedName)

        // this.setState((state) => ({
        //     // rootNames: [...state.rootNames],
        //     generatedNames: [...state.generatedNames, generatedName],
        //     currentName: generatedName
        // }));

        console.log(`Generated: ${generatedName}`)
        console.log(`Current: ${this.state.currentName}`)
        console.log(`List: ${this.state.generatedNames}`)

    }

    render() {
        return(
            <div onKeyPress={this.handleKeyPress}>

                <div >
                    <button className='btn btn-primary mt-4 mb-2'  onClick={this.handleClick}>New Name</button>
                    <h1 className='mt-2'>Plum's new name is:</h1>
                    <h2 className='font-weight-bold'>{this.state.currentName}</h2>
                </div>

            </div>
        )
    }
}

export default NameShow