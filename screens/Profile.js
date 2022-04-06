import React, { useCallback } from "react";
import { View, Text, SafeAreaView, Image, StatusBar, Linking, Pressable } from "react-native";

import { COLORS, SIZES, assets, SHADOWS, FONTS } from "../constants";
import { CircleButton, ShareButton, SubInfo, DetailsDesc, DetailsBid, FocusedStatusBar } from "../components";
const OpenDeveloperButton = ({ children }) => {
    const handlePress = useCallback(async () => {
        await Linking.openURL('https://www.thisismemukul.ml');
    }, []);

    return <Pressable style={{
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 6,
        paddingHorizontal: 16,
        marginHorizontal: 10,
        borderRadius: 2,
        elevation: 1.5,
        top:SIZES.font,
        backgroundColor: COLORS.secondary,
    }} title={children} onPress={handlePress} ><Text>Open Portfolio </Text></Pressable >;
};
const ProfileHeader = ({ navigation }) => (
    
    <View
        style={{
            backgroundColor: COLORS.primary,
            padding: SIZES.font,
            width: "100%", height: 800, position: 'absolute',
            borderRadius: SIZES.extraLarge,
            alignItems: 'center',
            justifyContent: 'center',
        }}
    >
        <Image
            source={assets.person01}
            resizeMode="cover"
            style={{ width: 200, height: 200 }}
        />



        <Text style={{
            fontFamily: FONTS.regular,
            fontSize: SIZES.regular
        }} >Developed By:
        </Text>

        <Text style={{
            fontFamily: FONTS.bold,
            fontSize: SIZES.large
        }} >Mukul Saini</Text>

<OpenDeveloperButton />


        <CircleButton
            imgUrl={assets.left}
            handlePress={() => navigation.goBack()}
            left={15}
            top={StatusBar.currentHeight + 10}
        />

        <CircleButton
            imgUrl={assets.person01}
            right={15}
            top={StatusBar.currentHeight + 10}
        />
    </View>
);

const Profile = ({ navigation }) => {
  
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <FocusedStatusBar
                barStyle="dark-content"
                backgroundColor="transparent"
                translucent={true}
            />
            <View
                style={{
                    width: "100%",
                    position: "absolute",
                    bottom: 0,
                    paddingVertical: SIZES.font,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "rgba(255,255,255,0.5)",
                    zIndex: 1,
                }}
            >

                <ShareButton minWidth={170} fontSize={SIZES.large} {...SHADOWS.dark} />
            </View>
            <ProfileHeader navigation={navigation} />
        </SafeAreaView>
    );
};

export default Profile;