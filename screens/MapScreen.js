import { StatusBar } from "expo-status-bar"
import { StyleSheet, SafeAreaView, Text } from "react-native"

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
      <StatusBar style="auto" />
    </SafeAreaView>
  )
}
