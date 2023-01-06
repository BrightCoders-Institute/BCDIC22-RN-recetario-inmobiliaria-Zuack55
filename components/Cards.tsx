
import React, { Component } from 'react';
import { Text, Image, View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import inmobilearia from '../data/inmobilearia.json';
import Propiedad from '../classes/propiedad';

const inmobileariaTs: Propiedad[] = inmobilearia as Propiedad[];


class ScrollViewExample extends Component {
    render() {
        return (
            <View>
                <ScrollView>
                    {
                        inmobileariaTs.map((item) => (
                            <TouchableOpacity key={item.id}>
                                <View style={styles.item} >
                                    <View>
                                        <Image source={{ uri: item.img }} style={styles.styleimage} />
                                        <View style={styles.StyleItemStart}>
                                            <Image source={require('../img/icons/start.png')} style={styles.StyleIconStart} />
                                            <Text style={styles.StyleStartText}>{item.puntuacion}</Text>
                                        </View>
                                    </View>
                                    <View style={styles.itemVieText}>
                                        <Text style={styles.styleTitle}>{item.name}</Text>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Image source={require('../img/icons/ubicacion.png')} style={{
                                                width: 20, height: 20,
                                                marginTop: 10, marginLeft: 10
                                            }} />
                                            <Text style={styles.styleUbi}>{item.ubi}</Text>
                                        </View>

                                        {/* valores de la card room,metros cuiadrados y bathrooms */}
                                        <View style={{ flexDirection: 'row', marginTop: 10, marginLeft: 15 }}>
                                            <View style={{ flexDirection: 'row' }}>
                                                <Image source={require('../img/icons/cama-alternativa.png')} style={styles.StyleIcons} />
                                                <Text style={styles.styleUnitys}>{item.room}</Text>
                                            </View>
                                            <View style={{ flexDirection: 'row', marginLeft: 10 }}>
                                                <Image source={require('../img/icons/bathtub.png')} style={styles.StyleIcons} />
                                                <Text style={styles.styleUnitys}>{item.bathrooms}</Text>
                                            </View>
                                            <View style={{ flexDirection: 'row', marginLeft: 10 }}>
                                                <Image source={require('../img/icons/zona.png')} style={styles.StyleIcons} />
                                                <Text style={styles.styleUnitys}>{item.tf} tf ²</Text>
                                            </View>
                                        </View>

                                        {/* Precio y corazon bajo */}
                                        <View style={{ flexDirection: 'row', marginTop: 10, marginLeft: 5 }}>
                                            <View style={{ flexDirection: 'row' }}>
                                                <Text style={styles.styleUnitys}>${item.price}/m</Text>
                                            </View>

                                            {/* Icono de corazon color */}
                                            <View style={styles.StyleIconsCorazonBack}>
                                                <Image source={require('../img/icons/corazonNe.png')} style={styles.StyleIconsCorazon} />
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>
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
        width: 370,
        height: 170,
        justifyContent: 'space-between',
        padding: 10,
        margin: 2,
        marginTop: 10,
        borderColor: '#F5FDFF',
        borderWidth: 1,
        backgroundColor: '#F5FDFF',
        borderRadius: 10,
        marginLeft: 10,
        marginBottom: 20,
    },
    itemVieText: {
        flexDirection: 'column',
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
        marginTop: 10,
        marginLeft: 10,
    },
    styleUbi: {
        fontSize: 15,
        marginLeft: 5,
        marginTop: 10,
    },
    styleUnitys: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000000',
        marginLeft: 10,
    },
    StyleIcons: {
        width: 25,
        height: 25
    },
    StyleIconsCorazon: {
        width: 15,
        height: 15,
        backgroundColor: '#00B074',
        alignContent: 'center',
        marginLeft: 8,

    },
    StyleIconsCorazonBack: {
        flexDirection: 'row',
        marginLeft: 113,
        width: 30,
        height: 30,
        backgroundColor: '#00B074',
        alignItems: 'center',
        borderRadius: 100
    },
    StyleItemStart: {
        backgroundColor: '#FBEDB7',
        width: 55,
        height: 25,
        marginLeft: 35,
        marginTop: -30,
        borderRadius: 10,
        flexDirection: 'row'
    },
    StyleIconStart: {
        width: 15,
        height: 15,
        marginLeft: 5,
        marginTop: 5
    },
    StyleStartText: {
        color: '#7A6229',
        textAlign: 'center',
        marginLeft: 5,
        marginTop: 2,
        fontWeight: 'bold'
    }
})