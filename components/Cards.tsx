
import React, { Component } from 'react';
import { Text, Image, View, StyleSheet, ScrollView } from 'react-native';



class ScrollViewExample extends Component {
    state = {
        names: [
            { 'name': 'Pizza confrijoles', 'id': 1 },
            { 'name': 'Hamburgueza', 'id': 2 },
            { 'name': 'Espaguetti', 'id': 3 },
            { 'name': 'lazaña', 'id': 4 },
            { 'name': 'Pollo frito', 'id': 5 },
            { 'name': 'Pollo Asado', 'id': 6 }
        ]
    }
    render() {
        return (

            <View>
                <ScrollView style={{}} horizontal={false}>
                    {
                        this.state.names.map((item) => (
                            <View key={item.id} style={styles.item} >
                                <Image source={{ uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' }} style={styles.styleimage} />
                                <View style={styles.itemVieText}>
                                    <Text style={styles.styleTitle}>The willows</Text>
                                    <Text>{item.name}</Text>
                                </View>
                            </View>
                        ))
                    }
                </ScrollView>
            </View>
        )
    }
}

export default ScrollViewExample

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        width: 300,
        height: 150,
        justifyContent: 'space-between',
        padding: 10,
        margin: 2,
        marginTop: 10,
        borderColor: '#ffffff',
        borderWidth: 1,
        backgroundColor: 'white',
        borderRadius: 10,
        alignContent: 'center',
        marginLeft: 70,
    },
    itemVieText: {
        flexDirection: 'column',
        alignItems: 'center',
        marginRight: 60,
    },
    styleimage: {
        width: 100,
        height: 100,
        justifyContent: 'center',
        marginTop: 10,
        borderRadius: 10,
    },
    styleTitle: {
        fontSize: 20,
        fontWeight: 'em',
        color: '#000000',
        textAlign: 'center',
        marginTop: 10,
    }
})