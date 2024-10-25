import { useState } from "react";
import { View, Text, Image, TextInput, TouchableOpacity, Alert, FlatList, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from "./styles";
import BouncyCheckbox from "react-native-bouncy-checkbox";


type Props = {
    name: string;
    onRemove: () => void;
}



export default function Tarefas({ name, onRemove }: Props) {
    return (
        <View style={styles.container}>
            
            <Text style={styles.inputComponente}>   
                 { name }
            </Text>
         
            

            <View style={styles.checkboxContainer}>
                <BouncyCheckbox
                    size={25}
                    fillColor="#5E60CE"
                     text="Custom Checkbox"
                    iconStyle={{ borderColor: "" }}
                    innerIconStyle={{ borderWidth: 2 }}
                    onPress={(isChecked: boolean) => {console.log(isChecked)}}
                /> 
            </View>

            <TouchableOpacity style={styles.button} onPress={onRemove}>
                <Ionicons name="trash-outline" size={25} color="#808080" />
            </TouchableOpacity>

            
      </View>
    )
}
