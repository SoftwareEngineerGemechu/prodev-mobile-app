import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 40,
  },

  // Title
  titleTextGroup: {
    marginBottom: 20,
  },
  titleText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#111",
  },
  subText: {
    fontSize: 16,
    color: "#666",
    marginTop: 4,
  },

  // Form
  formGroup: {
    marginTop: 20,
    gap: 20,
  },
  formLabel: {
    fontSize: 14,
    fontWeight: "500",
    marginBottom: 6,
    color: "#333",
  },
  formControl: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
    backgroundColor: "#fafafa",
  },
  formPasswordControl: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    paddingHorizontal: 12,
    backgroundColor: "#fafafa",
  },
  passwordControl: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 10,
  },

  forgotPasswordText: {
    textAlign: "right",
    color: "#007bff",
    fontSize: 14,
    marginTop: 4,
  },

  // Buttons
  primaryButton: {
    backgroundColor: "#007bff",
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },

  dividerGroup: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 30,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: "#ddd",
  },
  dividerText: {
    marginHorizontal: 10,
    color: "#666",
    fontSize: 14,
  },

  // Social buttons
  secondaryButtonGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
  },
  secondaryButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    backgroundColor: "#fff",
  },
  secondaryButtonText: {
    marginLeft: 8,
    fontSize: 16,
    fontWeight: "500",
    color: "#333",
  },

  // Signup group
  signupgroup: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 40,
  },
  signupTitleText: {
    fontSize: 14,
    color: "#666",
  },
  signupSubTitleText: {
    fontSize: 14,
    color: "#007bff",
    fontWeight: "bold",
  },
});
