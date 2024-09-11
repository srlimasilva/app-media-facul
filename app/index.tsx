import { useState } from "react";
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity } from "react-native";
import Resultado from './resultado'


export default function Index() {

  const [mediaEtapa1, setMediaEtapa1] = useState(null);
  const [mediaEtapa2, setMediaEtapa2] = useState(null);
  const [media, setMedia] = useState(null);
  const [mensagem, setMsg] = useState(null);

  function calcularMedia( ){
    let mediaFinal = (Number.parseFloat(mediaEtapa1)+ 
    Number.parseFloat(mediaEtapa2)) / 2
    setMedia (mediaFinal)
  }


  function validarMedia(){

    // Verifica se as variaveis estão NULL ou vazias
    if(mediaEtapa1  && mediaEtapa2 ){
      if((mediaEtapa1 >= 0 && mediaEtapa1 <= 10) && (mediaEtapa2 >= 0 && mediaEtapa2 <=10)){
        calcularMedia()
        setMsg(null)
      }else{
        setMsg("Um dos valores informados é inválido")
        setMediaEtapa1(null)
        setMediaEtapa2(null)
        setMedia(null)
      }}
      else{
        setMsg("As duas médias devem estar preenchidas")
        setMediaEtapa1(null)
        setMediaEtapa2(null)
        setMedia(null)
      }
      
    }
  



  return (
    <View
      style={styles.container}
    >
      <View style ={styles.containerLogo}>
        <Image style= {styles.logo} source={require('../assets/images/logo.png')}>

        </Image>
      </View>

      <View 
      style={styles.form}>
        
        {mensagem != null && (
          <Text style={styles.alerta}>{mensagem}</Text>
        )}


        <Text>Nota 1ª etapa</Text>
        <TextInput 
        style = {styles.input}
        keyboardType="numeric" 
        value = {mediaEtapa1}
        onChangeText={setMediaEtapa1}
        
        
        />
          
        <Text>Nota 2ª etapa</Text>
        <TextInput 
        style = {styles.input}
        keyboardType="numeric"
        value = {mediaEtapa2}
        onChangeText={setMediaEtapa2}
        />

        <TouchableOpacity 

        style= {styles.btn}
        onPress={validarMedia}
        >
        
        <Text style ={styles.btnText}>Calcular</Text>
        </TouchableOpacity>

        {media != null &&(
        <Resultado resultadoMedia= {media}></Resultado>

        )}

        </View>
      
      

      
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  backgroundColor:'#09C',
  flex: 1,

  },

  containerLogo: {
    marginBottom: 30,
    height: 100,
    paddingTop: 60,
    alignItems: 'center',
  },

  logo: {
    width: 230,
    height: 45
  },

  form: {
    backgroundColor:'#FFF',
    padding: 30,
    height: '100%',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },

  alerta:{
    color: '#F00',
    textAlign: 'center',
    marginBottom: 20,
    borderWidth:1,
    borderColor: '#F00',
    padding: 5,
    borderRadius: 5,
  },

  input: {
    backgroundColor: '#DDD',
    padding: 10,
    borderRadius: 10,
    marginTop: 5,
    marginBottom:20 ,
  },

  btn: {
    backgroundColor: '#F90',
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
     },

  btnText: {
    textAlign:'center',
    color: '#FFF',
  },
  resultadoMedia:{
    backgroundColor: "#C00",
    padding: 10,
    borderRadius: 10
    },
  textoMedia:{
    color:"#FFF",
    textAlign: 'center',
    fontWeight:'bold',
    fontSize:20,
  },


});