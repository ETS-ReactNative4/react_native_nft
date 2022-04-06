import { TouchableOpacity, Text, View, Image, Pressable, Share } from 'react-native'
import React from 'react'
import { COLORS, SHADOWS, SIZES, FONTS } from '../constants'
import { AntDesign } from '@expo/vector-icons';
export const CircleButton = ({ imgUrl, handlePress, ...props }) => {
  return (
    <TouchableOpacity style={{
      width: 40,
      height: 40,
      backgroundColor: COLORS.white,
      position: 'absolute',
      borderRadius: SIZES.extraLarge,
      alignItems: 'center',
      justifyContent: 'center',
      ...SHADOWS.light,
      ...props,
    }}
      onPress={handlePress}>
      <Image
        source={imgUrl}
        resizeMode="contain"
        style={{ width: 24, height: 24 }}
      />

    </TouchableOpacity>
  )
}

export const RectButton = ({ minWidth, fontSize, handlePress, ...props }) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: COLORS.primary,
        padding: SIZES.small,
        borderRadius: SIZES.extraLarge,
        minWidth: minWidth,
        ...props,
      }}
      onPress={handlePress}
    >
      <Text
        style={{
          fontFamily: FONTS.semiBold,
          fontSize: fontSize,
          color: COLORS.white,
          textAlign: "center",
        }}
      >
        Place a bid
      </Text>
    </TouchableOpacity>
  );
};

export const ShareButton = ({ children, minWidth, fontSize, handlePress, ...props }) => {


  const onShare = async () => {
    try {
      const result = await Share.share({
        title:
          'An NFT share frontend application made using React Native | A framework for building native apps using React',
        message: 'Check Out a NFT App using React-Native https://github.com/thisismemukul/react_native_nft',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (

    <TouchableOpacity
      style={{
        backgroundColor: COLORS.primary,
        padding: SIZES.small,
        borderRadius: SIZES.extraLarge,
        minWidth: minWidth,
        ...props,
      }}
      onPress={handlePress}
    >
      <Pressable title={children} onPress={onShare} >
        <Text
          style={{
            fontFamily: FONTS.semiBold,
            fontSize: fontSize,
            color: COLORS.white,
            textAlign: "center",
          }}
        >
          Share  
          <AntDesign name="sharealt" size={24} color={COLORS.primary} />
        </Text></Pressable >

    </TouchableOpacity>
  );
};