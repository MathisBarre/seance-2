import React from "react";
import { Text, View } from "react-native";

interface CreditScreenProps {}

const CreditScreen = ({}: CreditScreenProps) => {
  return (
    <View
      style={{
        backgroundColor: "#000918",
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ color: "white", fontSize: 24, fontWeight: "bold" }}>
        Design par Maxime Doux
      </Text>
      <Text style={{ color: "white", fontSize: 12, marginTop: 2 }}>
        https://www.linkedin.com/in/maxime-doux-490b74195/
      </Text>
    </View>
  );
};

export default CreditScreen;
