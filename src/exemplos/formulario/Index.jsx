import { BackgroundImage, Text, Input, Button } from '@rneui/base';
import React, {useState} from 'react';
import { SafeAreaView, TextInput, View, Alert } from 'react-native'; 
import styles from './Styles';
//import fundoo from '../../../res/img/fundoo.jpg'
export default function Formulario() {

    const [peso, setPeso]= useState('');
    const [altura, setAltura]= useState('');

    function calcular(){
        if(peso === '' || altura === '') {
            Alert.alert('Erro', 'Por favor, preencha todos os campos.');
            return;
        }

        const imc = (parseFloat(peso) / (parseFloat(altura) * parseFloat(altura))).toFixed(2);
        let situacao = '';

        if(imc < 18.5){
            situacao = 'magreza';
        } else if(imc >= 18.5 && imc <= 24.9){
            situacao = 'Peso normal';
        } else if(imc >= 25 && imc <= 29.9){
            situacao = 'Sobrepeso';
        } else {
            situacao = 'Obesidade';
        }

        Alert.alert('Resultado', `Seu IMC é ${imc} e a situação dele é: ${situacao}`);
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>

                <View style={styles.headerFormulario}>
                    <Text h1 style={styles.Textoblack}>Formulario</Text>
                </View>
                <View>
                    <Input placeholder='Digite seu peso em kg...'
                    inputStyle={styles.estiloInput}
                    inputContainerStyle={styles.estiloContainerInput}
                    placeholderTextColor={'blue'}
                    onChangeText={value => setPeso(value)}
                    />
                   
                    <Input placeholder='Digite sua altura em metros...'
                    inputStyle={styles.estiloInput}
                    inputContainerStyle={styles.estiloContainerInput}
                    placeholderTextColor={'blue'}
                    onChangeText={value => setAltura(value)}
                   />
                   
                <Button onPress={calcular} buttonStyle={{width: 150, alignSelf:'center'}}>Calcular</Button>  
                </View>

        </SafeAreaView>

    );
};
