import React, { useEffect, useState } from 'react'
import { StyleSheet, SafeAreaView, TextInput, Alert, Button, Text, View } from 'react-native'
import { backendApiUrl } from "../app.json";
import fetch from "node-fetch";
import { compose } from '@reduxjs/toolkit';

const ViewRides = ({ navigation }) => {
    const [rides, setRides] = useState([]);

    fetch("https://e4f7-159-203-45-40.ngrok.io/rider")
        .then(res => res.json())
        .then(setRides)

    return (
        rides.map((ride, index) =>

            <View style={{}} key={index}>
                <Text style={{ margin: 10 }}>Source: {index}</Text>

                <Text style={{ margin: 10 }}>Destination: {JSON.stringify(ride)}</Text>
            </View>

        )
    );
}

export default ViewRides