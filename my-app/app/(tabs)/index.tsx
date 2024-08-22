import { Image, StyleSheet, Platform } from 'react-native';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import Stuff from '@/components/Stuff';

export default function HomeScreen() {
  const [data, setData] = useState([]);
  let dData = [];
  useEffect(() => {
    async function getter(){
      await axios.get("https://valorant-api.com/v1/agents")
      .then(res => {
        for(let i = 0; i < res.data.data.length; i++){
          dData.push(<Stuff name={res.data.data[i].displayName} img={res.data.data[i].fullPortrait} desc={res.data.data[i].description} />)
        }
      });
      setData(dData);
    }
    getter();
  }, []);
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/Valorant-Logo-PNG-Cutout.webp')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Valorant</ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Agents</ThemedText>
        <ThemedText>
          {data}
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 250,
    position: 'absolute',
  },
});
