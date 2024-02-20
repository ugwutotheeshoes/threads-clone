import { Platform, RefreshControl, SafeAreaView, ScrollView, StyleSheet, Appearance } from 'react-native';
import LottieView from 'lottie-react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import * as React from 'react';
import { createRandomUser, generateThreads } from '@/utils/generateData';
import { ThreadsContext } from '@/context/threadContext';
import ThreadsItem from '@/components/ThreadsItem';
import { Thread } from '@/types/thread';

export default function TabOneScreen() {
  const animationRef = React.useRef<LottieView>(null)
  const colorScheme = Appearance.getColorScheme();
  // const user = generateThreads()
  // console.log(user);
  // const threads = React.useContext(ThreadsContext)
  const[mode, setMode] = React.useState(true)
  const[threads, setThreads] = React.useState<Thread[]>([])
  // console.log(threads);
  React.useEffect(()=> {setMode(false)}, [colorScheme])
  
  return (
    <SafeAreaView>
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 10,
          paddingTop: Platform.select({ android: 30 })
        }}
        refreshControl={
          <RefreshControl
            refreshing={false}
            onRefresh={() => { animationRef.current?.play() }}
          />
        }
      >
        {/* <Text>Tab one</Text> */}
        {/* {colorScheme? <Text>dark</Text>: <Text>light</Text>} */}
        <LottieView ref={animationRef} source={mode? require("@/assets/animations/white-icon.json") : require("@/assets/animations/black-icon.json")} loop={false} autoPlay style={{ width: 70, height: 70, alignSelf: "center" }}
        onAnimationFinish={()=> {setThreads(generateThreads())}}
        />
        {/* {colorScheme ==="dark" ?
                //  <Text>dark</Text>
                : 
                <LottieView ref={animationRef} source={require("@/assets/animations/black-icon.json")} loop={false} autoPlay style={{ width: 70, height: 70, alignSelf: "center" }}
                // onAnimationFinish={()=> {alert("finished")}}
                />
          // <Text>light</Text>
        } */}
        {/* <LottieView ref={animationRef} source={require("@/assets/animations/red-icon.json")} loop={false} autoPlay style={{ width: 70, height: 70, alignSelf: "center" }}
        // onAnimationFinish={()=> {alert("finished")}}
        /> */}
        {threads.map((thread) => (
          <ThreadsItem key={thread.id} {...thread} />
        ))}
      </ScrollView>
    </SafeAreaView>
    // <View style={styles.container}>
    //   <Text style={styles.title}>Tab One</Text>
    //   <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
    //   <EditScreenInfo path="app/(tabs)/index.tsx" />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
