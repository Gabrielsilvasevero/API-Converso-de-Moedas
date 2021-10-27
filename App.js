import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {

  
    const [info,setInfo] =useState(null);
    const [euro,seteuro] =useState(null);
    const [libra,setlibra] =useState(null);

    async function buscar(){

     

      try{
      const cepHttp = await fetch(`https://free.currencyconverterapi.com/api/v5/convert?q=USD_BRL&compact=ultra&apiKey=5d7ac80eb63372db62ca`);
      const cepJson = await cepHttp.json();
      setInfo(cepJson);

      const euroHttp = await fetch(`https://free.currencyconverterapi.com/api/v5/convert?q=EUR_BRL&compact=ultra&apiKey=5d7ac80eb63372db62ca`);
      const euroJson = await euroHttp.json();
      seteuro(euroJson);

      const libraHttp = await fetch(`https://free.currencyconverterapi.com/api/v5/convert?q=GBP_BRL&compact=ultra&apiKey=5d7ac80eb63372db62ca`);
      const libraJson = await libraHttp.json();
      setlibra(libraJson);
      }catch(error){
       
      
      }
      

    }
   

  return (
    <View style={styles.container}>


      <Text  style={styles.texto}> Projeto API Conversão de Moedas </Text> 



    <TouchableOpacity style={styles.btn} onPress = {buscar}>

   <Text style={{fontWeight:'bold', color:'white'}}> Consultar </Text> 
   </TouchableOpacity>
   

    {info &&
 <View style={styles.resultado}>
 <Text  style={styles.texto1}>Dollar: {info.USD_BRL} </Text> 

 </View>
}
  {euro &&
 <View style={styles.resultado}>

 <Text  style={styles.texto1}>Euro: {euro.EUR_BRL} </Text> 
 </View>
  }
  {libra &&
 <View style={styles.resultado}>

 <Text  style={styles.texto1}>Libra Esterlina: {libra.GBP_BRL} </Text> 
 </View>
  }
   <Text  style={styles.texto}> Desenvolvido por Gabriel Silva</Text> 
    </View>

  );  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#74A1EB',
    alignItems: 'center',
    marginTop: 25
   
  },
  texto:{

    fontSize: 20,
    alignItems: 'center'
  },
  texto1:{
    width: '100%',
    height: '30%',
    alignItems: 'center',
    
   
   
  },
  btn:{
    backgroundColor: '#B62B0E',
    width: '80%',
    alignItems: 'center',
   marginTop: 5,
   
    fontSize: 20

   
  },
  resultado:{
  
    width: '80%',
    alignItems: 'center',
    marginTop: 5,
  
  }
});
