import { StatusBar } from "expo-status-bar"
import { StyleSheet, SafeAreaView, Text, View } from "react-native"
import Svg, { Path } from "react-native-svg"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
})

export const MapScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>hello</Text>
      <View style={styles.container}>
        <Svg width={20} height={20} viewBox="0 0 20 20">
          <Path d="M16.993 6.667H3.227l6.883 6.883 6.883-6.883z" fill="#000" />
        </Svg>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  )
}
