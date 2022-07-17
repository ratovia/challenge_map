import { StatusBar } from "expo-status-bar"
import { StyleSheet, SafeAreaView, Text, View } from "react-native"
import Svg, { Path } from "react-native-svg"
import * as d3 from "d3"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
})

export const MapScreen = () => {
  // Pathの座標データ
  const data = [
    { x: 0, y: 20 },
    { x: 150, y: 250 },
    { x: 300, y: 200 },
    { x: 450, y: 20 },
    { x: 600, y: 380 },
  ]

  // line作成関数
  const curveFunc = d3
    .line()
    .curve(d3.curveBasis) // curveメソッドで線の形を変更
    .x(function (d) {
      return d.x
    })
    .y(function (d) {
      return d.y
    })

  return (
    <SafeAreaView style={styles.container}>
      <Text>hello</Text>
      <View style={styles.container}>
        <Svg width={300} height={400}>
          <Path d={curveFunc(data)} fill="none" stroke="#333" />
        </Svg>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  )
}
