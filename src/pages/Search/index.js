import React, {useState} from 'react';
import {View, Text, StyleSheet, SafeAreaView, TouchableOpacity, TextInput} from 'react-native';

import { Feather } from "@expo/vector-icons";

export default function Search (){
    const [input, setInput] = useState("");
    const [city, setCity] = useState(null);
    const [error, setError] = useState(null);

    return(
        <SafeAreaView style={styles.container}>
            <TouchableOpacity style={styles.backButton}>
            <Feather name="chevron-left" size={32} color="#000" />
            <Text style={{ fontSize: 22 }}>Voltar</Text>
            </TouchableOpacity>

            <View style={styles.searchBox}>
                <TextInput
                    value={input}
                    onChangeText={(valor) => setInput(valor)}
                    placeholder="Ex: Porto Alegre, RS"
                    style={styles.input}
                />
                <TouchableOpacity style={styles.icon} >
                    <Feather name="search" size={22} color="#fff" />
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        paddingTop: "10%",
        backgroundColor: "#e8f0ff",
      },
      backButton: {
        flexDirection: "row",
        marginLeft: 15,
        alignSelf: "flex-start",
        alignItems: "center",
        marginBottom: 10,
      },
      searchBox: {
        alignItems: "center",
        flexDirection: "row",
        backgroundColor: "#ddd",
        width: "90%",
        height: 50,
        borderRadius: 8,
      },
      input: {
        width: "85%",
        height: 50,
        backgroundColor: "#fff",
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
        padding: 7,
      },
      icon: {
        width: "15%",
        backgroundColor: "#1ed6ff",
        alignItems: "center",
        justifyContent: "center",
        height: 50,
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8,
      }
});