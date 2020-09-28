import { useState, useEffect } from 'react'
import { Keyboard } from 'react-native'

// Track if keyboard is visible or not
const useKeyboardVisible = () => {
    const [keyboardVisible, setKeyboardVisible] = useState(false)

    // Track if keyboard is visible
    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener(
            "keyboardDidShow",
            () => setKeyboardVisible(true)
        )
        const keyboardDidHideListener = Keyboard.addListener(
            "keyboardDidHide",
            () => setKeyboardVisible(false)
        )

        return () => {
            keyboardDidShowListener.remove()
            keyboardDidHideListener.remove()
        }
    }, [])

    return keyboardVisible
}

export default useKeyboardVisible