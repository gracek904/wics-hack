import React, { memo, useState } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import Background from "../reusable/Background";
import Logo from "../reusable/Logo";
import Header from "../reusable/Header";
import Button from "../reusable/Button";
import TextInput from "../reusable/TextInput";
import BackButton from "../reusable/BackButton";
import { theme } from "../core/theme";
import { emailValidator } from "../api/utils";
import Toast from "../reusable/Toast";

const ForgotPasswordScreen = ({ navigation }) => {
  const [email, setEmail] = useState({ value: "", error: "" });
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState({ value: "", type: "" });

  const _onSendPressed = async () => {
    if (loading) return;

    const emailError = emailValidator(email.value);

    if (emailError) {
      setEmail({ ...email, error: emailError });
      return;
    }

    setLoading(true);

    const response = await sendEmailWithPassword(email.value);

    if (response.error) {
      setToast({ type: "error", value: response.error });
    } else {
      setToast({
        type: "success",
        value: "Email with password has been sent."
      });
    }

    setLoading(false);
  };

  return (
    <Background>
      <BackButton goBack={() => navigation.navigate("LoginScreen")} />

      <Logo />

      <Header>Restore Password</Header>

      <TextInput
        label="E-mail address"
        returnKeyType="done"
        value={email.value}
        onChangeText={text => setEmail({ value: text, error: "" })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />

      <Button
        loading={loading}
        mode="contained"
        onPress={_onSendPressed}
        style={styles.button}
      >
        Send Reset Instructions
      </Button>

      <TouchableOpacity
        style={styles.back}
        onPress={() => navigation.navigate("LoginScreen")}
      >
        <Text style={styles.label}>← Back to login</Text>
      </TouchableOpacity>

      <Toast
        type={toast.type}
        message={toast.value}
        onDismiss={() => setToast({ value: "", type: "" })}
      />
    </Background>
  );
};

const styles = StyleSheet.create({
  back: {
    width: "100%",
    marginTop: 12
  },
  button: {
    marginTop: 12
  },
  label: {
    color: theme.colors.secondary,
    width: "100%"
  }
});

export default memo(ForgotPasswordScreen);
