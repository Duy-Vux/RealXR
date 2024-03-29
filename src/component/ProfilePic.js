import React from "react";
import { View, Image } from "react-native";

export default function ProfilePic() {
  return (
    <View>
      <Image
        source={{uri: "https://picsum.photos/200/300" }}
        style={{
          width: 100,
          height: 100,
          borderRadius: 50,
          alignSelf: "center",
          marginBottom: 20,
        }}
      />
    </View>
  );
}
