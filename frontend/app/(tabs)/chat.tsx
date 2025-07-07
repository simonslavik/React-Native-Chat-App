import { Image } from "expo-image";
import { Platform, Pressable, StyleSheet } from "react-native";
import { View } from "react-native";
import { Text } from "react-native";
import { useContext } from "react";
import { GlobalContext } from "../../context";
import AntDesign from "react-native-vector-icons/AntDesign";
import { FlatList } from "react-native";
import Chatcomponent from "@/components/Chatcomponent";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Chatscreen() {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error(
      "GlobalContext value is null. Make sure your component is wrapped in a GlobalContext.Provider."
    );
  }
  const { currentUser, allChatRooms } = context;
  return (
    <SafeAreaView style={styles.mainWrapper}>
      <View style={styles.topContainer}>
        <View style={styles.header}>
          <Text style={styles.heading}>Welcome {currentUser}</Text>
          <Pressable>
            <AntDesign name="logout" size={30} color={"black"} />
          </Pressable>
        </View>
      </View>
      <View style={styles.listContainer}>
        {allChatRooms && allChatRooms.length > 0 ? (
          <FlatList
            data={allChatRooms}
            renderItem={({ item }) => <Chatcomponent chatRoom={item} />}
            keyExtractor={(item) => item.id}
          />
        ) : null}
      </View>
      <View style={styles.bottomContainer}>
        <Pressable style={styles.button}>
          <View>
            <Text style={styles.buttonText}>Create a new chat room</Text>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
    backgroundColor: "white",
  },
  topContainer: {
    padding: 16,
    backgroundColor: "#f5f5f5",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  heading: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#222",
  },
  listContainer: {
    flex: 1,
    paddingHorizontal: 10,
    // Add space for bottomContainer
  },
  bottomContainer: {
    padding: 16,
    backgroundColor: "#f5f5f5",
    borderTopWidth: 1,
    borderColor: "#ddd",
    marginBottom: Platform.OS === "ios" ? 60 : 0, // Adjust for iOS SafeArea
    // Remove absolute positioning to make it visible within SafeAreaView
  },
  image: {
    width: "100%",
    height: 200,
  },
  text: {
    fontSize: 16,
    color: "#333",
    marginVertical: 10,
  },
  button: {
    backgroundColor: "gray",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 0,
  },
  buttonText: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
  },
});
