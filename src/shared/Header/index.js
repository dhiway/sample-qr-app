import React from "react";
import { View, TouchableOpacity, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import Text from "../Text";
import Left from "../Icons/Left";

const Header = ({
  edit,
  isHistoryEdit,
  isBackEnable,
  title,
  isEditEnable,
  currentRoute,
  disableBorder,
}) => {
  const navigation = useNavigation();
  const redirectRoute = () => {
    if (currentRoute == "Activity") {
      navigation.navigate("Activity");
      return false;
    }
    if (currentRoute == "Scan") {
      navigation.navigate("Scan");
      return false;
    } else {
      navigation.goBack();
    }
  };
  return (
    <View
      style={[
        styles.headerContainer,
        disableBorder && styles.headerContainerWithBorder,
      ]}
    >
      <View style={styles.headerHolder}>
        <View style={styles.headerBackContainer}>
          {isBackEnable && (
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => redirectRoute()}
              accessible={true}
              accessibilityLabel="Back"
            >
              <Left />
            </TouchableOpacity>
          )}
          <TouchableOpacity
            style={styles.headerBack}
            onPress={() => redirectRoute()}
            disabled={!isBackEnable}
          >
            <Text
              style={
                isBackEnable ? styles.headerBackSpacing : styles.headerBackText
              }
            >
              {title}
            </Text>
          </TouchableOpacity>
        </View>
        {/* TODO : comment below in production if Feedback not required  */}
        {isEditEnable &&
          (!isHistoryEdit ? (
            <TouchableOpacity style={styles.headrRightContainer} onPress={edit}>
              <Text>Done</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={styles.headrRightContainer} onPress={edit}>
              <Text>Edit</Text>
            </TouchableOpacity>
          ))}
      </View>
    </View>
  );
};

export default Header;
