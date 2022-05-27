import React from "react";
import {StyleSheet, Text, TouchableOpacity} from "react-native";
import {Button, Icon, Overlay} from "react-native-elements";

const Modal = ({
  children,
  isVisible,
  setIsVisible,
  mode = "default",
  style
}) => {
  return (
    <Overlay
      isVisible={isVisible}
      onBackdropPress={setIsVisible}
      overlayStyle={[
        mode === "cover" ? styles.modalCover : styles.modalDefault,
        style
      ]}>
      {mode === "cover" ? (
        <TouchableOpacity
          onPress={() => setIsVisible(!isVisible)}
        >
          <Icon
            name="close"
            type="antdesign"
            size={28}
            style={{
              // marginRight: 10,
              margin: 5,
              marginBottom:20,
              alignSelf:"flex-start"
            }}
          />
        </TouchableOpacity>
      ) : null}
      {children}
    </Overlay>
  );
};

const styles = StyleSheet.create({
  modalDefault: {
    width: "90%",
    padding: 20
  },
  modalCover: {
    width: "100%",
    height: "100%",
    padding: 20
  }
});

export default Modal;
