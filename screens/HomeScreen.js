import { StatusBar } from "expo-status-bar"
import { StyleSheet, FlatList, SafeAreaView } from "react-native"
import { ListItem } from "../components/ListItem"
import { prefecture } from "../prefecture"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
})

export const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={prefecture}
        renderItem={({ item }) => (
          <ListItem
            imageUrl="https://picsum.photos/100/100"
            prefecture={item.name}
            achievement={20}
            onPress={() =>
              navigation.navigate("Detail", {
                name: item.name,
              })
            }
          />
        )}
        keyExtractor={(pre) => pre.id}
      ></FlatList>
      <StatusBar style="auto" />
    </SafeAreaView>
  )
}
