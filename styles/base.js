import * as Colors from './colors'

export const pagePadding = {
    paddingHorizontal: 40,
    paddingTop: 110
}

export const pageWrapper = {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
}

export const pageBackground = {
    backgroundColor: Colors.grey05
}

// Styles
export const pageContainer = {
    ...pagePadding,
    ...pageWrapper,
    ...pageBackground
}