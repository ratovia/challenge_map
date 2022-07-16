import { StatusBar } from "expo-status-bar"
import { Text, StyleSheet, SafeAreaView, FlatList } from "react-native"
import { SightItem } from "../components/SightItem"
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  titleTextArea: {
    fontSize: 24,
    paddingTop: 10,
    paddingBottom: 10,
  },
})

const visitedSight = [
  {
    prefectureId: 1,
    name: "雪まつり",
    imageUrl: "https://picsum.photos/300/400",
  },
  {
    prefectureId: 2,
    name: "青函トンネル",
    imageUrl: "https://picsum.photos/300/400",
  },
  {
    prefectureId: 3,
    name: "ねぶた祭",
    imageUrl: "https://picsum.photos/300/400",
  },
]

export const DetailScreen = ({ route }) => {
  const { name } = route.params
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titleTextArea}>{name}</Text>
      <FlatList
        data={visitedSight}
        renderItem={({ item }) => (
          <SightItem imageUrl={item.imageUrl} prefecture={item.name} />
        )}
        keyExtractor={(_, index) => index.toString()}
      ></FlatList>
      <StatusBar style="auto" />
    </SafeAreaView>
  )
}
