import { StyleSheet, Text, View, Image } from "react-native"

const styles = StyleSheet.create({
  itemContainer: {
    height: 100,
    width: "100%",
    borderColor: "gray",
    borderWidth: 1,
    flexDirection: "row",
  },
  leftContainer: {
    width: 100,
  },
  rightContainer: {
    flex: 1,
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
    justifyContent: "space-between",
  },
  text: {
    fontSize: 30,
    color: "gray",
  },
  subText: {
    fontSize: 24,
    color: "gray",
  },
})

export const ListItem = ({imageUrl, prefecture, achievement}) => {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.leftContainer}>
        <Image
          source={{ uri: imageUrl }}
          style={{ width: 100, height: 100 }}
        />
      </View>
      <View style={styles.rightContainer}>
        <Text style={styles.text}>{prefecture}</Text>
        <Text style={styles.subText}>{achievement}%</Text>
      </View>
    </View>
  )
}
