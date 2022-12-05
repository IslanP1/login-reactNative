import { View, Text, TextInput, Button } from 'react-native'
import React, { useState } from 'react'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from "firebase/auth";
import database from '../../../firebase'

const Login = () => {
    const [email, setEmail] = useState('luiz@gmail.com')
    const [senha, setSenha] = useState('teste123')
   
    function criar() {
        const auth = getAuth();
          createUserWithEmailAndPassword(auth, email, senha)
          .then(() => {
            alert('Conta de usuário criada e conectada!');
          })
          .catch(error => {
            if (error.code === 'auth/email-already-in-use') {
              alert('Esse endereço de email já esta em uso!');
            }
    
            if (error.code === 'auth/invalid-email') {
              alert('Esse endereço de e-mail é inválido!');
            }
    
            alert(error);
          });
    }

    function logar() {
        const auth = getAuth();
          signInWithEmailAndPassword(auth, email, senha)
          .then(() => {
            alert('Usuário logado');
          })
          .catch(error => {
            alert(error);
          });
      }


    function deslogar(){
        const auth = getAuth();
        signOut(auth)
        .then(() => {
            alert('Usuário deslogado')
  
        }).catch((error) => {
            alert(error)
 
        });
    }




  return (
    <View>
      <Button title='Criar' onPress={() => {criar()}}></Button>
      <br></br>
      <Button title='Logar' onPress={() => {logar()}}></Button>
      <br></br>
      <Button title='Deslogar' onPress={() => {deslogar()}}></Button>
    </View>
  )
}

export default Login