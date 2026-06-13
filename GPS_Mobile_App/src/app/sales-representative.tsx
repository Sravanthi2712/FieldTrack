import { useState } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Alert,
} from "react-native";

export default function SalesRepresentativeScreen() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const createSalesRepresentative = async () => {
    try {

      const response = await fetch(
        "http://10.167.137.110:8000/sales-representatives/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            password,
          }),
        }
      );

      const data = await response.json();

      console.log(data);

      if (response.ok) {

        Alert.alert(
          "Success",
          "Sales Representative Created"
        );

        setName("");
        setEmail("");
        setPassword("");

      } else {

        Alert.alert(
          "Error",
          JSON.stringify(data)
        );

      }

    } catch (error) {

      console.log(error);

      Alert.alert(
        "Error",
        "Could not connect to server"
      );
    }
  };

  return (
    <View style={styles.container}>

      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        keyboardType="email-address"
      />

      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        style={styles.input}
        secureTextEntry={true}
      />

      <Button
        title="Create Sales Representative"
        onPress={createSalesRepresentative}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    gap: 10,
    justifyContent: "center",
  },

  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 12,
    borderRadius: 5,
  },
});