import React, { Component } from 'react';
import { Text, View,StyleSheet, SafeAreaView, TouchableOpacity,Platform, StatusBar } from 'react-native';

export default class HomeScreen extends Component {
    render() {
        return (
            <View
                style={StyleSheet.container}>
                    <SafeAreaView style={StyleSheet.droidSafeArea}/>
                    <View style={styles.titleBar}>
                <Text style={StyleSheet.titleText}>ISS Tracker App</Text>
                </View>

                <TouchableOpacity style={styles.routeCard}>
                    <Text style={styles.routeText}>Iss Location</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.routeCard}>
                    <Text style={styles.routeText}>Meteors</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    titleBar: {
        flex: 0.15,
        justifyContent: "center",
        alignItems: "center"
    },
    routeCard: {
        flex: 0.25,
        marginLeft: 50,
        marginRight: 50,
        marginTop: 50,
        borderRadius: 30,
        backgroundColor: 'white'
    },
    titleText: {
        fontSize: 40,
        fontWeight: "bold",
        color: "white"
    },
    routeText: {
        fontSize: 35,
        fontWeight: "bold",
        color: "black",
        marginTop: 75,
        paddingLeft: 30
    },

});