import React from "react";
import { View, Image } from "react-native";

export default function ProfilePic() {
  return (
    <View>
      <Image
        source={require("../assets/profile.jpg")}
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
