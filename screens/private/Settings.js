import React, { useState } from "react";
import { View, Text, Switch, StyleSheet } from "react-native";

const Settings = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.container}>
      <Text>Notifications</Text>
      <Switch
        trackColor={{ false: 'black', true: 'grey'}}
        thumbColor={isEnabled ? 'white' : 'black'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      <Switch
        trackColor={{ false: 'black', true: 'grey'}}
        thumbColor={isEnabled ? 'white' : 'black'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default Settings;