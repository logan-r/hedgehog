import React from 'react'
import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import { Colors, Typography } from '../../styles'

/**
 * Let the user select a certain type of challenge (fitness, cooking, etc.)
 * This box represents one of those types of challenges
 * @param {string} topic plain short description of topic (e.g. fitness, culinary arts)
 * @param {string} name more fun name for topic (e.g. Picasso, Master Chef)
 * @param {string} description longer description of this topic
 * @param {function} onPress function called when this topic box is pressed
 * @param {Image} clipart image to be displayed for this topic
 * @param {number} clipartHeight size to rener the clipart at (width will be adjusted to preserve aspect ratio)
 * @param {number} clipartPadding extra padding to apply between clipart and title
 */
export default function TopicBox({topic, name, description, onPress, clipart, clipartHeight, clipartPadding}) {
    const clipartDimensions = Image.resolveAssetSource(clipart)

    return (
        <Pressable onPress={onPress} style={({ pressed }) => pressed ? [localStyles.box, {backgroundColor: Colors.black10}] : localStyles.box} underlayColor="transparent">
            <>
                {
                    clipart &&
                    <View style={{position: 'relative'}}>		
                        <Image
                            style={{
                                position: 'absolute',
                                left: clipartPadding[0],
                                top: -(clipartHeight + clipartPadding[1]),
                                width: clipartHeight / clipartDimensions.height * clipartDimensions.width,
                                height: clipartHeight
                            }}
                            resizeMode="cover"
                            source={clipart}
                        />
                    </View>
                }
                <Text style={localStyles.title}>{name}</Text>
                <Text style={localStyles.label}>{topic}</Text>
                <Text style={localStyles.description}>{description}</Text>
            </>
        </Pressable>
    )
}

const localStyles = StyleSheet.create({
    box: {
        backgroundColor: Colors.white,
        width: '47%',
        borderRadius: 22,
        paddingHorizontal: 20,
        paddingTop: 36,

        marginTop: 100,

        display: 'flex',
        alignItems: 'flex-start'
    },

    label: {
        color: Colors.marigold,
        textTransform: 'uppercase',
        ...Typography.xxs,
        ...Typography.bodyMedium,
        letterSpacing: 0.6
    },

    title: {
        ...Typography.title,
        fontSize: 13
    },

    description: {
        ...Typography.xs,
        lineHeight: 16,
        color: Colors.black60,
        paddingTop: 8,
        paddingBottom: 20
    }
})