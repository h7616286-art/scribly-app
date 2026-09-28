import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Share, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const categories = ["All", "Shayari", "Quotes", "Captions", "Bio", "Status", "Stories", "Attitude", "Love", "Sad"];

const data = [
  {category:"Shayari", text:"Teri khushi ke liye kuch bhi kar jayenge, tere liye to jaan bhi de jayenge."},
  {category:"Shayari", text:"Mohabbat me jhukna koi ajeeb baat nahi, chiragh jalta hai to roshni ke liye jhukta hi hai."},
  {category:"Shayari", text:"Tumhe dekhe bina chain nahi aata, tumhare bina jiya nahi jata."},
  {category:"Love", text:"Tum mere liye sirf pyaar nahi, meri har dua ho."},
  {category:"Love", text:"Dil ki baat dil me mat rakhna, keh do jo kehna hai."},
  {category:"Sad", text:"Humne bhi kisi se pyaar kiya tha, thoda nahi beshumar kiya tha."},
  {category:"Sad", text:"Kash koi aisa ho jo gale laga ke kahe, tum thak gaye ho."},
  {category:"Attitude", text:"Meri khamoshi ko kamzori mat samajh, me jahan khada hota hun line wahi se shuru hoti hai."},
  {category:"Attitude", text:"Main apni marzi ka malik hun, kisi ke attitude ka ghulam nahi."},
  {category:"Quotes", text:"Zindagi me kabhi khud ko kam mat samjho, kyunki duniya me sabse badi taqat tum khud ho."},
  {category:"Quotes", text:"Waqt sab kuch dikha deta hai, kaun apna hai kaun paraya."},
  {category:"Quotes", text:"Khud par bharosa rakho, duniya apne aap tum par bharosa karegi."},
  {category:"Captions", text:"Be yourself, everyone else is already taken ✨"},
  {category:"Captions", text:"Less perfection, more authenticity."},
  {category:"Captions", text:"Stay wild, stay free 🌙"},
  {category:"Bio", text:"👑 Attitude Queen | 💜 Dreamer | 📍Pakistan"},
  {category:"Bio", text:"Simple | Smiley | Sarcastic 😏"},
  {category:"Bio", text:"Not lucky, just blessed ✨"},
  {category:"Status", text:"Jo naseeb me hai, wo chal kar ayega, jo nahi hai wo aakar bhi chala jayega."},
  {category:"Status", text:"Alhamdulillah for everything ❤️"},
  {category:"Stories", text:"Aaj ka din meri zindagi ka sabse khubsurat din hai, kyunki tum mere sath ho."},
];

export default function App() {
  const [selected, setSelected] = useState("All");
  const filtered = selected === "All" ? data : data.filter(i => i.category === selected);
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Scribly</Text>
        <Text style={styles.headerSub}>All in One - Shayari, Quotes, Captions, Bio & More</Text>
      </View>
      <View style={{height:50}}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.catScroll}>
          {categories.map(cat => (
            <TouchableOpacity key={cat} onPress={() => setSelected(cat)} style={[styles.catBtn, selected===cat && styles.catActive]}>
              <Text style={[styles.catText, selected===cat && styles.catTextActive]}>{cat}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      <FlatList
        data={filtered}
        keyExtractor={(item, idx) => idx.toString()}
        contentContainerStyle={{padding: 15}}
        renderItem={({item}) => (
          <View style={styles.card}>
            <Text style={styles.cardText}>{item.text}</Text>
            <Text style={styles.cardCat}>{item.category}</Text>
            <View style={styles.row}>
              <TouchableOpacity style={styles.btn} onPress={() => alert("Copied! " + item.text)}><Text style={styles.btnText}>Copy</Text></TouchableOpacity>
              <TouchableOpacity style={[styles.btn, {backgroundColor:'#6C3483'}]} onPress={() => Share.share({ message: item.text })}><Text style={styles.btnText}>Share</Text></TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex:1, backgroundColor:'#f8f5ff'},
  header: {backgroundColor:'#6C3483', paddingTop:50, paddingBottom:20, paddingHorizontal:20, borderBottomLeftRadius:25, borderBottomRightRadius:25},
  headerTitle: {color:'white', fontSize:28, fontWeight:'bold'},
  headerSub: {color:'#e8d5f2', fontSize:13, marginTop:4},
  catScroll: {paddingHorizontal:10, paddingVertical:8},
  catBtn: {backgroundColor:'white', paddingHorizontal:16, paddingVertical:8, borderRadius:20, marginRight:8, borderWidth:1, borderColor:'#e0d0eb'},
  catActive: {backgroundColor:'#6C3483', borderColor:'#6C3483'},
  catText: {color:'#6C3483', fontWeight:'600'},
  catTextActive: {color:'white'},
  card: {backgroundColor:'white', borderRadius:15, padding:15, marginBottom:12, elevation:2},
  cardText: {fontSize:16, lineHeight:24, color:'#2d2d2d'},
  cardCat: {marginTop:8, fontSize:11, color:'#9b7bb5', fontWeight:'bold'},
  row: {flexDirection:'row', marginTop:12, gap:10},
  btn: {backgroundColor:'#2d2d2d', paddingHorizontal:18, paddingVertical:6, borderRadius:20},
  btnText: {color:'white', fontSize:13}
});
