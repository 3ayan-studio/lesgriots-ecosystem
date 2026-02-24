import { baseLanguage } from "../schemaTypes/objects/localeTypes"

const DEFAULT_LANG = baseLanguage?.code!

export const getPreview = (selection: any) => {
    // if a property is an array of localized strings, we want to get the string for the default language, otherwise we just return the first language
    const preview: any = {}

    for (const key in selection) {
        const property = selection[key]

        if (Array.isArray(property) && property.length > 0 && property[0]._type === 'internationalizedArrayStringValue') {
            const localizedString = property.find((item: any) => item._key === DEFAULT_LANG && item.value)
            preview[key] = localizedString ? localizedString.value : property.find((item: any) => item.value)?.value
        } else {
            preview[key] = property
        }
    }

    return preview
}

export const getArrayTitlePreview = (localizedArrayTitle: any) => {
    return localizedArrayTitle?.find((item: any) => item._key === DEFAULT_LANG && item.value)?.value || localizedArrayTitle?.find((item: any) => item.value)?.value || 'Untitled'
}

export const getObjectTitlePreview = (localizedObjectTitle: any) => {
    if (!localizedObjectTitle || typeof localizedObjectTitle !== 'object') return 'Untitled'
    return localizedObjectTitle?.[DEFAULT_LANG] || Object.values(localizedObjectTitle).find((value => value != 'localeString'))
}