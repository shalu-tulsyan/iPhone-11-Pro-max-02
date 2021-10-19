import * as React from 'react';
import {View, Text} from 'react-native';
import HeaderSection from '../../components/Header';
import {LinearGradient} from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';
import Image1 from '../../assets/images/vectorimage1.svg';
import Image2 from '../../assets/images/vectorimage2.svg';
import Image3 from '../../assets/images/vectorimage3.svg';
import Image4 from '../../assets/images/vectorimage4.svg';
import { BlurView } from 'expo-blur';


export default function HomeScreen():JSX.Element {
  return (
    <SafeAreaView>
      <View style={styles.container} >
        <LinearGradient colors={['rgba(12,12,12,1)', 'rgba(44,69,80,1)']}
          locations={[0.2, .9822]}
          style={styles.container}
        >
          <HeaderSection/>
          <View style={{flex: 1, justifyContent: 'center'}}>
            <View>
              <Image2 style={{top: '150%',left: '30%'}}/>
            </View>
            <View>
              <Image1 style={{top: '-5%'}} />
            </View>
            <View style={{top: '-70%', left: '10%', width: '70%'}}>
              <Text style={{fontSize: 48,textAlign: 'left', fontFamily: 'Poppins',lineHeight: 60, fontWeight: 'bold', color: 'white'}}>Adventure Together</Text>
            </View>
            <View style={{top: '-68%', width: '65%', left: '10%'}}>
              <Text style={{fontSize: 12,textAlign: 'left', fontFamily: 'Poppins',lineHeight: 20, fontWeight: 'bold', color: 'white'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat id potenti faucibus nec, rhoncus, vulputate vitae. Dictum rutrum ut cras nullam porta id dolor arcu, quis. </Text>
            </View>
          </View> 
          <View style={{flex: 0.3, marginBottom: '20%'}}>
            <BlurView intensity={10} style={{width: '100%',height: '100%', flexDirection: 'row',justifyContent: 'space-around', paddingHorizontal: 20}} >
              <Image3/>
              <View style={{flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{fontSize: 16,lineHeight: 16,textAlign: 'center',fontFamily: 'Poppins', color: 'white'}}>Exploration</Text>
                <Text style={{width: '30%',lineHeight: 18,textAlign: 'left',fontSize: 12,fontFamily: 'Poppins', fontWeight: 'bold', color: 'white'}}>Lorem ipsum dolor sit amet, consectetur adipiscing </Text>
                <Image4 style={{width: 44, height: 10, marginLeft: 55, marginTop: 5 }}/>
              </View>
            </BlurView>
          </View>
        </LinearGradient>
      </View>
    </SafeAreaView>
  );
}
