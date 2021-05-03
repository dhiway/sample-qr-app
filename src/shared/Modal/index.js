import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";
import { Feedback, Close } from "../Icons";
import styles from "./styles";
const ModalCard = ({
  isModalVisable,
  closeModal,
  modalView,
  INFO,
  textHead,
}) => {
  const [modalVisible, setModalVisable] = useState(false);
  return (
    <Modal
      isVisible={isModalVisable}
      animationType="slide"
      onSwipeComplete={() => closeModal()}
      swipeDirection="down"
      backdropOpacity={0.4}
      animationIn="slideInUp"
      animationInTiming={600}
      animationOutTiming={400}
      backdropTransitionInTiming={2000}
      backdropTransitionOutTiming={1}
      style={{
        margin: 0,
        marginTop: 0,
        marginRight: 0,
      }}
      onRequestClose={() => closeModal()}
    >
      <View
        style={{
          marginTop: 50,
          marginLeft: 10,
          marginRight: 10,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          flex: 1,
          backgroundColor: "#fff",
        }}
      >
        <View style={styles.infoModalContainer}>
          <View style={styles.infoModalHead}>
            <View style={styles.headTextHold}>
              <View>
                <Feedback size={20} color={"#1EA15D"} />
              </View>
              <Text style={styles.helpText}>{textHead}</Text>
              <TouchableOpacity
                onPress={() => closeModal()}
                style={{
                  flex: 2,
                  alignItems: "flex-end",
                }}
              >
                <Close size={30} color={"#5E72E4"} />
              </TouchableOpacity>
            </View>
          </View>
          {modalView()}
        </View>
      </View>
    </Modal>
  );
};

export default ModalCard;
