import React, {useState} from "react";
import { Text, Modal, View, StyleSheet, Button } from "react-native";

export default props => {
    const [ligado, setLigado] = useState(true);

    const acionarModal = () => {
        setLigado(!ligado)
    }

    return (
        <View style={styles.container}>
            <Modal animationType="fade" visible={ligado} transparent={true}>
                <View style={styles.Modal}>
                    <Text style={styles.texto}>Cerebro: Órgão central do sistema nervoso, responsável pelo processamento de informações e controle das funções corporais.</Text>
                    <Button title="fechar" onPress={acionarModal}></Button>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {

    }, 

    Modal: {
        width: 300,
        height: 200,
        backgroundColor: 'black',
    }, 

    texto: {
        padding: 30,
        color: 'white',
        
    },

    botao: {
        width: 50,
    }
})