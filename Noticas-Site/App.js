import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, Modal, TextInput, Pressable, ImageBackground } from 'react-native';
import { Ionicons, EvilIcons} from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import { Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins';
import { BlurView } from 'expo-blur';


export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [perfilAberto, setPerfilAberto] = useState(false);
  const [fontsLoaded] = useFonts({ Poppins_400Regular, Poppins_700Bold});
  const image = require('./assets/cloud.jpg');


  return (
    <View style={styles.container}>
       <ImageBackground source={image} style={styles.image}>
        <View style={styles.topBar}>
        <BlurView intensity={50} tint="dark" style={StyleSheet.absoluteFill}/>
        <TouchableOpacity onPress={() => setMenuOpen(!menuOpen)}>
          <Ionicons name="menu" size={28} color="#fff" />
        </TouchableOpacity>
        
        <Text style={styles.title}>Atlas News <Ionicons name="compass" size={16} color="#9b7c3a"/></Text>
        
        <TouchableOpacity onPress={() => setPerfilAberto(true)}>
          <Ionicons name="person-circle-outline" size={45} color="#fff" />
        </TouchableOpacity>
        
      </View>
      
      {menuOpen && (
        <View style={styles.sidebar}>
          <BlurView intensity={50} tint="dark" style={StyleSheet.absoluteFill}/>
          <MenuItem icon="home" text="Home" />
          <MenuItem icon="football" text="Esporte" />
          <MenuItem icon="globe" text="Mundo" />
          <MenuItem icon="code-slash" text="Tecnologia" />
        </View>
      )}

      
      <ScrollView style={styles.content}>
       
        <NewsItem
          image={'https://lncimg.lance.com.br/uploads/2025/04/AGIF25040922005164-scaled-aspect-ratio-512-320-2.jpg'}
          title="Manchester vence Newcastle por 3x1 em partida emocionante"
        />
        <NewsItem 
          title="Ataque em mesquita no Paquistão deixa dezenas de mortos e feridos" 
        />
        <NewsItem 
          title="Mercado de tecnologia em queda devido a receios com IA" 
        />
        
      </ScrollView>
      
      <Modal transparent visible={perfilAberto} animationType="fade">
        <View style={styles.modalFundo}>
          <View style={[styles.perfilConteudo]}>
            <Pressable style={styles.fechar} onPress={() => setPerfilAberto(false)}>
              <EvilIcons name="close" size={24} color="black"/>
            </Pressable>
            
            <Text style={[styles.loginTitulo]}>Login</Text>
            
            <Text style={[styles.label]}>Email</Text>
            <TextInput
              placeholder="exemplo@email.com"
              style={[styles.input]}
            />

            <Text style={[styles.label]}>Senha</Text>
            <TextInput
              placeholder="Digite sua senha"
              secureTextEntry
              style={[styles.input]}
            />

            <TouchableOpacity style={[styles.botao]}>
              <Text style={styles.botaoTexto}>Entrar</Text>
            </TouchableOpacity>
            
          </View>
        </View>
      </Modal>
      
     </ImageBackground>
    </View>
  );
}

function MenuItem({ icon, text }) {
  return (
    <TouchableOpacity style={styles.menuItem}>
      <Ionicons name={icon} size={22} color="#fff" />
      <Text style={styles.menuText}>{text}</Text>
    </TouchableOpacity>
  );
}

function NewsItem({ image, title }) {
  return (
    <View style={styles.newsItem}>
      {image && <Image source={{ uri: image }} style={styles.newsImage} />}
      <Text style={styles.newsTitle}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5a5a5a',
  },
  topBar: {
    height: 60,
    backgroundColor: '#11111165',
    flexDirection: 'row',
    paddingHorizontal: 16,
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'space-between',
    zIndex: 99,
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: ' Poppins_700Bold'
  },
  content: {
    flex: 1,
    padding: 10,
  },
  sidebar: {
    position: 'absolute',
    top: 60,
    left: 0,
    width: 200,
    height: '100%',
    backgroundColor: ' rgba(0, 0, 0, 0.432)',
    zIndex: 1,
    shadowColor: '#9b7c3a',
    shadowOffset: { width: 3, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 0, 
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  menuText: {
    color: '#fff',
    marginLeft: 12,
    fontSize: 16,
    fontFamily: 'Poppins_400Regular'
  },
  newsItem: {
    marginBottom: 15,
    backgroundColor: '#fff',
    borderRadius: 8,
    overflow: 'hidden',
    width: '90%',
    alignSelf: 'center',
  },
  newsImage: {
    width: '100%',
    height: 120,
    borderRadius: 10,
    borderColor: '#9b7c3a'
  },
  newsTitle: {
    padding: 8,
    fontSize: 14,
    fontWeight: 'bold',
  },
  modalFundo: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  perfilConteudo: {
    width: '85%',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 10,
    padding: 20,
  },
  fechar: {
    alignSelf: 'flex-end',
  },
  fecharTexto: {
    fontSize: 20,
  },
  loginTitulo: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 20,
    color: '#000',
    fontFamily: 'Montserrat',
  },
  label: {
    fontSize: 17,
    fontWeight: '700',
    marginBottom: 10,
    fontFamily: 'Montserrat',
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    paddingVertical: 5, 
    marginBottom: 15,
    fontSize: 16,
    color: '#162938',
  },
  botao: {
    backgroundColor: '#162938',
    paddingVertical: 10,
    borderRadius: 6,
    alignItems: 'center',
  },
  botaoTexto: {
    color: '#fff',
    fontWeight: 'bold',
  },
  image:{
    height: '100%',
    width: '100%',
    flex: 1, 
    justifyContent: 'center', 
    resizeMode: 'cover',
  }

});