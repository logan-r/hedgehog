import * as Colors from './colors'

export const pagePadding = {
    paddingHorizontal: 40,
    paddingTop: 110
}

export const modalPadding = {
    paddingHorizontal: 40,
    paddingTop: 70
}

export const pageWrapper = {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
}

export const pageBackground = {
    backgroundColor: Colors.black05
}

export const modalBackground = {
    backgroundColor: Colors.black20
}

// Styles
export const pageContainer = {
    ...pagePadding,
    ...pageWrapper,
    ...pageBackground
}