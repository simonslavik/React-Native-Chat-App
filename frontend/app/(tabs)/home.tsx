import { Image, ImageBackground } from "expo-image";
import { Alert, Keyboard, Platform, StyleSheet, TextInput } from "react-native";
import { View } from "react-native";
import { use, useContext, useEffect } from "react";
import { GlobalContext } from "../../context";
import { Text } from "react-native";
import { Pressable } from "react-native";
import { Redirect } from "expo-router";
import { useRouter } from "expo-router";
// @ts-ignore
const homeImage = require("../../assets/images/home-image.jpg");

export default function Homescreen() {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error(
      "GlobalContext value is null. Make sure your component is wrapped in a GlobalContext.Provider."
    );
  }
  const {
    showLoginView,
    setShowLoginView,
    userName,
    setUserName,
    currentUser,
    setCurrentUser,
    allUsers,
    setAllUsers,
  } = context;

  function handleRegisterAndSignIn(isLogin: boolean) {
    // TODO: Implement registration and sign-in logic here
    if (userName.trim() !== "") {
      const index = allUsers.findIndex((userItem) => userItem === userName);

      if (isLogin) {
        // Sign-in logic
        if (index === -1) {
          Alert.alert("Please register first.");
        } else {
          setCurrentUser(userName);
        }
      } else {
        // Registration logic
        if (index === -1) {
          allUsers.push(userName);
          setAllUsers([...allUsers]);
          setCurrentUser(userName);
        } else {
          Alert.alert("User already exists. Please choose a different name.");
        }
      }
      setUserName("");
    } else {
      Alert.alert("User name field is empty.");
    }

    Keyboard.dismiss();
  }
  const router = useRouter();

  useEffect(() => {
    if (currentUser?.trim() !== "") {
      router.replace("/(tabs)/chat");
    }
  }, [currentUser]);

  return (
    <View style={styles.mainWrapper}>
      <ImageBackground source={homeImage} style={styles.homeImage} />
      <View style={styles.content}>
        {showLoginView ? (
          <View style={styles.infoBlock}>
            <View style={styles.loginInputContainer}>
              <Text style={styles.heading}>Enter Your User Name</Text>
              <TextInput
                autoCorrect={false}
                placeholder="Enter your user name"
                style={styles.loginInput}
                onChangeText={(text) => setUserName(text)}
                value={userName}
              />
            </View>
            <View style={styles.buttonWrapper}>
              <Pressable
                onPress={() => handleRegisterAndSignIn(false)}
                style={styles.button}
              >
                <View>
                  <Text style={styles.buttonText}>Register</Text>
                </View>
              </Pressable>
              <Pressable
                onPress={() => handleRegisterAndSignIn(true)}
                style={styles.button}
              >
                <View>
                  <Text style={styles.buttonText}>Login</Text>
                </View>
              </Pressable>
            </View>
          </View>
        ) : (
          <View style={styles.infoBlock}>
            <Text style={styles.heading}>Connect, Grow and Inspire</Text>
            <Text style={styles.subHeading}>
              Connect people around the world for free
            </Text>
            <Pressable
              style={styles.button}
              onPress={() => setShowLoginView(true)}
            >
              <View>
                <Text style={styles.buttonText}>Get Started</Text>
              </View>
            </Pressable>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
    marginBottom: 10,
  },
  homeImage: {
    width: "100%",
    flex: 1,
    justifyContent: "center",
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    backgroundColor: "white",
  },
  loginInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,

    marginBottom: 10,
    width: 220,
    fontSize: 16,
  },
  infoBlock: {
    alignItems: "center",
    marginVertical: 20,
    justifyContent: "center",
    width: "100%",
  },
  loginInputContainer: {
    marginBottom: 20,
    width: "100%",
    alignItems: "center",
  },
  heading: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 10,
  },
  buttonWrapper: {
    flexDirection: "row",
    gap: 10,
  },
  button: {
    backgroundColor: "#007AFF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginHorizontal: 5,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
  },
  subHeading: {
    fontSize: 15,
    color: "#acacac",
    textAlign: "center",
    marginBottom: 15,
  },
});
