
import React, { Component } from 'react';
import { Text, Image, View, StyleSheet, ScrollView } from 'react-native';
import inmobilearia from '../data/inmobilearia.json';



class ScrollViewExample extends Component {
    render() {
        return (
            <View>
                <ScrollView>
                    {
                        inmobilearia.map((item) => (
                            <View key={item.id} style={styles.item} >

                                <Image source={{ uri: item.img }} style={styles.styleimage} />
                                <View style={styles.itemVieText}>
                                    <Text style={styles.styleTitle}>{item.name}</Text>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Image source={require('../img/icons/ubicacion.png')} style={{ width: 20, height: 20 }} />
                                        <Text style={styles.styleUbi}>{item.ubi}</Text>
                                    </View>

                                    {/* valores de la card room,metros cuiadrados y bathrooms */}
                                    <View style={{ flexDirection: 'row', marginTop: 10, marginLeft: 10}}>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Image source={require('../img/icons/cama-alternativa.png')} style={styles.StyleIcons} />
                                            <Text style={styles.styleUnitys}>{item.room}</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', marginLeft: 5}}>
                                            <Image source={require('../img/icons/bathtub.png')} style={styles.StyleIcons} />
                                            <Text style={styles.styleUnitys}>{item.bathrooms}</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', marginLeft: 5}}>
                                            <Image source={require('../img/icons/zona.png')} style={styles.StyleIcons} />
                                            <Text style={styles.styleUnitys}>{item.tf} tf ²</Text>
                                        </View>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginTop: 10, marginLeft: 5}}>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Text style={styles.styleUnitys}>${item.price}</Text>
                                        </View>

                                        {/* Icono de corazon color */}
                                        <View style={{ flexDirection: 'row', marginLeft: 100, width:40, height: 40, backgroundColor: 'green', alignItems:'center', borderRadius: 100}}>
                                            <Image source={require('../img/icons/corazonNe.png')} style={styles.StyleIconsCorazon} />
                                        </View>
                                    </View>
                                </View>
                            </View>
                        ))
                    }
                </ScrollView>
            </View >
        )
    }
}

export default ScrollViewExample

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        width: 350,
        height: 150,
        justifyContent: 'space-between',
        padding: 10,
        margin: 2,
        marginTop: 10,
        borderColor: 'white',
        borderWidth: 1,
        backgroundColor: '#F2F7F9',
        borderRadius: 10,
        alignContent: 'center',
        marginLeft: 20,
    },
    itemVieText: {
        flexDirection: 'column',
        alignItems: 'center',
        marginRight: 60,
    },
    styleimage: {
        width: 120,
        height: 120,
        justifyContent: 'center',
        marginTop: 10,
        borderRadius: 10,
    },
    styleTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000000',
        textAlign: 'center',
        marginTop: 10,
    },
    styleUbi: {
        fontSize: 15,
        textAlign: 'center',
        marginLeft: 5,
    },
    styleUnitys: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000000',
        textAlign: 'center',
        marginLeft: 5,
    },
    StyleIcons: {
        width: 25,
        height: 25
    },
    StyleIconsCorazon: {
        width: 25,
        height: 25,
        backgroundColor: 'green',
        alignContent: 'center',
        marginLeft: 7,

    }
})