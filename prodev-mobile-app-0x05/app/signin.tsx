import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { useRouter } from "expo-router";
import { styles } from "../styles/_joinstyle";
import { GOOGLELOGO, FACEBOOKLOGO } from "../constants";

export default function Join() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            {/* Title */}
            <View style={styles.titleTextGroup}>
                <Text style={styles.titleText}>Join Now</Text>
                <Text style={styles.subText}>Create an account to get started</Text>
            </View>

            {/* Form */}
            <View style={styles.formGroup}>
                <View>
                    <Text style={styles.formLabel}>Full Name</Text>
                    <TextInput placeholder="Enter your full name" style={styles.formControl} />
                </View>

                <View>
                    <Text style={styles.formLabel}>Email</Text>
                    <TextInput placeholder="Enter your email" style={styles.formControl} />
                </View>

                <View>
                    <Text style={styles.formLabel}>Password</Text>
                    <View style={styles.formPasswordControl}>
                        <TextInput
                            placeholder="Enter your password"
                            secureTextEntry
                            style={styles.passwordControl}
                        />
                    </View>
                </View>

                <TouchableOpacity style={styles.primaryButton}>
                    <Text style={styles.buttonText}>Create Account</Text>
                </TouchableOpacity>
            </View>

            {/* Social buttons */}
            <View style={styles.dividerGroup}>
                <View style={styles.divider} />
                <Text style={styles.dividerText}>or continue with</Text>
                <View style={styles.divider} />
            </View>

            <View style={styles.secondaryButtonGroup}>
                <TouchableOpacity style={styles.secondaryButton}>
                    <Image source={GOOGLELOGO} />
                    <Text style={styles.secondaryButtonText}>Google</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.secondaryButton}>
                    <Image source={FACEBOOKLOGO} />
                    <Text style={styles.secondaryButtonText}>Facebook</Text>
                </TouchableOpacity>
            </View>

            {/* Signin link */}
            <View style={styles.signupgroup}>
                <Text style={styles.signupTitleText}>Already have an account? </Text>
                <TouchableOpacity onPress={() => router.push("/signin")}>
                    <Text style={styles.signupSubTitleText}>Sign In</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
