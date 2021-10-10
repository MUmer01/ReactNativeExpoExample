import { Icon, Fab, List, Stack, Heading, Text, View } from "native-base";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import FastImage from "expo-fast-image";
import * as ImagePicker from "expo-image-picker";
// import FastImage from "react-native-fast-image";
import { StyleSheet, FlatList, Image } from "react-native";
import { useAuthContext } from "./hooks/auth";
import { usePostsContext } from "./hooks/posts";

const Dashboard = () => {
  const { logoutUser } = useAuthContext();
  const { handleGetAllPosts, posts } = usePostsContext();
  const [image, setImage] = React.useState("");

  React.useEffect(() => {
    handleGetAllPosts();
    askPermission();
  }, []);

  const askPermission = async () => {
    if (Platform.OS !== "web") {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        alert("Sorry, we need camera roll permissions to make this work!");
      }
    }
  };

  const pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      // console.log({ result });

      if (!result.cancelled) {
        setImage(result.uri);
      }
    } catch (error) {}
  };

  // React.useEffect(() => {
  //   console.log({ posts: posts.length });
  // }, [posts]);

  return (
    <Stack
      style={styles.container}
      flexDirection={"column"}
      flex={1}
      space={3}
      alignItems="center"
    >
      {image ? (
        <FastImage
          cacheKey={"Key"}
          // uri={image}
          source={{ uri: image }}
          style={{ width: 200, height: 200 }}
        />
      ) : null}
      <Heading
        textAlign="center"
        justifyContent="center"
        alignItems="center"
        height={10}
      >
        Posts
      </Heading>
      <View mb={20}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={posts}
          // horizontal
          renderItem={({ item }) => <Item post={item} />}
          keyExtractor={(item) => item.id}
        />
      </View>
      <Fab
        borderRadius="0"
        colorScheme="indigo"
        placement="bottom-right"
        onPress={() => {
          logoutUser();
        }}
        icon={
          <Icon color="white" as={<MaterialIcons name="logout" />} size="6" />
        }
        label="Logout"
      />
      <Fab
        borderRadius="0"
        colorScheme="indigo"
        placement="bottom-left"
        onPress={() => {
          pickImage();
        }}
        label="Select Image"
      />
    </Stack>
  );
};

const Item = ({ post }) => (
  <List.Item
    backgroundColor="#eee"
    justifyContent="center"
    _text={{
      fontSize: "2xl",
    }}
    flex={1}
    width={"100%"}
    px={4}
    py={2}
    my={2}
  >
    <View>
      <Heading>{post.author}</Heading>
      <Text>{post.description}</Text>
      <FastImage
        cacheKey={post.id}
        uri={post.image}
        style={{
          height: 100,
          width: 100,
        }}
      />
      <Icon
        color={post.isLiked ? "#ff0000" : "#bbb"}
        as={<MaterialIcons name="thumb-up" />}
      />
    </View>
  </List.Item>
);

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
  },
  buttonContainer: {
    width: 300,
    marginBottom: 20,
  },
  button: {
    fontSize: 50,
  },
});
