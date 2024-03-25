import React from "react";
import { Text, StyleSheet, Pressable, TouchableOpacity} from "react-native";
import { Ionicons } from '@expo/vector-icons';

export function CaixaToken({ token, removerToken }) {
    return (
        <Pressable style={ESTILOS.caixa} onLongPress={removerToken}>
            <Text style={ESTILOS.text}>{token}</Text>
            <TouchableOpacity onPress={removerToken}>
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
