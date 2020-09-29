import { StyleSheet } from 'react-native'

import * as Colors from './colors'
import * as Typography from './typography'
import * as Base from './base'

const Styles = StyleSheet.create({
    pageContainer: {
        ...Base.pageContainer
    },

    h1: {
        ...Typography.heading,
        ...Typography.xxxl
    },
    text: {
        ...Typography.body,
        ...Typography.md
    }
})

export default Styles