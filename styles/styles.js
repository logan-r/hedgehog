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
        ...Typography.xxxl,
        marginBottom: 4
    },
    subtitle: {
        ...Typography.p,
        ...Typography.lg,
        ...Typography.muted
    },
    p: {
        ...Typography.p
    },
    text: {
        ...Typography.body,
        ...Typography.md
    }
})

export default Styles