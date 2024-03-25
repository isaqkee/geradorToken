import React from "react";
import { Text, StyleSheet, Pressable, TouchableOpacity} from "react-native";
import { Ionicons } from '@expo/vector-icons';
import * as Clipboard from 'expo-clipboard'

export function CaixaToken({ token, removerToken, copiarToken, }) {

    async function copiarToken() {
        await Clipboard.setStringAsync(token)
        alert("Token copiado para área de transferência.")
        fechar();
    }

    return (
        <Pressable style={ESTILOS.caixa} onLongPress={copiarToken}>
            <Text style={ESTILOS.text}>{token}</Text>
            <TouchableOpacity animationType="fade" onPress={() => {setTimeout(removerToken, 300)}}>
                <Ionicons name="trash-outline" size={24} color="#fff" />
            </TouchableOpacity>
        </Pressable>
    )
}

const ESTILOS = StyleSheet.create({
    caixa:{
        backgroundColor:"#0e0e0e",
        padding: 14,
        width: "100%",
        marginBottom: 14,
        borderRadius:8,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between"
    },
    text:{
        color:"#fff"
    }
})
