import React, { useState } from "react"
import {
  StyleSheet,
  Text,
  View,
  Switch,
  Image,
  TouchableOpacity,
} from "react-native"

const styles = StyleSheet.create({
  itemContainer: {
    height: 480,
    width: 300,
    marginBottom: 30,
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
})

export const SightItem = ({ imageUrl, prefecture, onPress }) => {
  const [isEnabled, setIsEnabled] = useState(false)
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState)
  return (
    <View style={styles.itemContainer} onPress={onPress}>
      <View style={styles.leftContainer}>
        <Image source={{ uri: imageUrl }} style={{ width: 300, height: 400 }} />
      </View>
      <View style={styles.rightContainer}>
        <Text style={styles.text}>{prefecture}</Text>
        <Switch
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
    </View>
  )
}
