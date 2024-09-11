import { StyleSheet, Text, View } from "react-native";

export default function Resultado(props){

    let color
    let mensagem 
    if(props.resultadoMedia < 3 ){
        color = styles.corReprovado
        mensagem = 'REPROVADO'
    }else if(props.resultadoMedia >= 3 && props.resultadoMedia < 7){
        color = styles.corProvaFinal
        mensagem = 'PROVA FINAL'
    
    }else {
        color = styles.corAprovado
        mensagem = 'APROVADO'
    }


    return (
        <View> 
        <Text>Sua média foi</Text>
         <View>
            <Text>{props.resultadoMedia}</Text>
            <Text style = {[color]}>{mensagem}</Text>
         </View>
        </View>
    )
}

const styles = StyleSheet.create({

    corReprovado: {
        backgroundColor: "#D00"
    },
    corProvaFinal: {
        backgroundColor: "#FB0"
    },
    corAprovado: {
        backgroundColor: '#32CD32'
    },


})