const DEFAULT_LANG = 'en'

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

export const getTitlePreview = (localizedTitle: any) => {
    return localizedTitle?.find((item: any) => item._key === DEFAULT_LANG && item.value)?.value || localizedTitle?.find((item: any) => item.value)?.value || 'Untitled'
}