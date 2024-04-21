import { useState } from 'react';
import { Orgaos } from './Images';
import { StyleSheet, View, Text, Image, TouchableHighlight, Modal, Button } from 'react-native';


export const Partes = (props) => {
    const [visivelCerebro, setVisivelCerebro] = useState(false); 
    const [visivelCoracao, setVisivelCoracao] = useState(false);
    const [visivelPulmao, setVisivelPulmao] = useState(false);

    return (
        <View style={styles.container}>

            {/* Cérebro */}
            <Modal
                animationType='fade'
                transparent={true}
                visible={ visivelCerebro }
            >
                <View style={styles.modal}>
                    <Text style={styles.textoModal}>Cérebro:</Text>
                    <Text style={styles.textoModal}>Órgão central do sistema nervoso responsável pelo processamento de informações e controle do corpo</Text>
                    <Button 
                        title='Fechar'
                        onPress={ ()=> { setVisivelCerebro(!visivelCerebro) } } 
                    />
                </View>
            </Modal>

            <TouchableHighlight onPress={ ()=> { setVisivelCerebro(!visivelCerebro) } } style={styles.tamanhoBotao}>
                  <Image
                      style={styles.imagens}
                      source={Orgaos.d1.uri}
                  />
            </TouchableHighlight>

            {/* Coração */}

            <Modal
                animationType='fade'
                transparent={true}
                visible={ visivelCoracao }
            >
                <View style={styles.modal}>
                    <Text style={styles.textoModal}>Coração:</Text>
                    <Text style={styles.textoModal}>Órgão muscular central do sistema circulatório responsável por bombear o sangue para todo o corpo</Text>
                    <Button 
                        title='Fechar'
                        onPress={ ()=> { setVisivelCoracao(!visivelCoracao) } } 
                    />
                </View>
            </Modal>

            <TouchableHighlight onPress={ ()=> { setVisivelCoracao(!visivelCoracao) } } style={styles.tamanhoBotao}>
                  <Image
                      style={styles.imagens}
                      source={Orgaos.d2.uri}
                  />
            </TouchableHighlight>

            {/* Pulmao */}
           
            <Modal
                animationType='fade'
                transparent={true}
                visible={ visivelPulmao }
            >
                <View style={styles.modal}>
                    <Text style={styles.textoModal}>Pulmão:</Text>
                    <Text style={styles.textoModal}>Órgão muscular central do sistema circulatório responsável por bombear o sangue para todo o corpo:</Text>
                    <Button 
                        title='Fechar'
                        onPress={ ()=> { setVisivelPulmao(!visivelPulmao) } } 
                    />
                </View>
            </Modal>

            <TouchableHighlight onPress={ ()=> { setVisivelPulmao(!visivelPulmao) } } style={styles.tamanhoBotao}>
                  <Image
                      style={styles.imagens}
                      source={Orgaos.d3.uri}
                  />
            </TouchableHighlight>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: 'blue',
        height: 300,
        width: 400,
    }, 

    imagens: {
        height: 100,
        width: 100,
        borderRadius: 20,
    },

    modal: {
        backgroundColor: '#000',
        margin: 20,
        padding: 20,
        borderRadius: 20,
        elevation: 10, // usada para controlar a sombra de um componente
    },

    textoModal: {
        color: '#fff',
    }
})
