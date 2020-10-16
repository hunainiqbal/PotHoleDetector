import React from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';

export default class AudiA6 extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            counter:0,
        }
    }
     add = () => {
        let mycounter = this.state.counter +1;
        this.setState({
            counter:mycounter
        })
    }
    sub = () => {
        let mycounter = this.state.counter -1;
        this.setState({
            counter:mycounter
        })
    }
mul =() => {
    let mycounter = this.state.counter +2*2;
        this.setState({
            counter:mycounter
})
    }
    

    render() {
        
        return (

            <View >
                
                
                <Text style={{ fontSize: 50, color: 'reddimgray', textAlign: "center" }}>
                    {this.state.counter}
                </Text>
                <TouchableOpacity>
                    <Button title='Increment'  onPress={this.add} />
                    <Button title='Decrement'onPress={this.sub} />
                    <Button title='addsubtract' onPress={this.mul} />
                </TouchableOpacity>
            </View>
            

        )
    }
}