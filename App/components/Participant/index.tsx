import React from 'react';
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import BouncyCheckbox from "react-native-bouncy-checkbox";


import { styles } from './styles'


//estou tipando a função "Participant"
type Props = {
    name: string;
    onRemove: () => void;
}


export default function Participant({ name, onRemove }: Props) {

    return(
        <View style={styles.container}>

             {/*___________________________CHECKBOX_________________________*/}

            <View style={styles.checkboxContainer}>
                <BouncyCheckbox
                    size={25}
                    fillColor="#5E60CE"
                    iconStyle={{ borderColor: "" }}
                    innerIconStyle={{ borderWidth: 2 }}
                    onPress={(isChecked: boolean) => {console.log(isChecked)}}
                /> 
            </View>


             {/*___________________________PROPRIEDADE QUE RECEBE DADOS_________________________*/}

            <Text style={styles.name}>
                { name }
            </Text>


             {/*___________________________BOTÃO REMOVER TAREFAS_________________________*/}


            <TouchableOpacity style={styles.button2} onPress={onRemove}>
                <Ionicons name="trash-outline" size={25} color="#808080" />
            </TouchableOpacity>
        </View>
    )
}