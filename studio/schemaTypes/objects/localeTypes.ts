// import { defineType } from 'sanity'

// const supportedLanguages = [
//     { code: 'en', name: 'English', isDefault: true },
//     { code: 'fr', name: 'Français' }
// ]

// export const baseLanguage = supportedLanguages.find(l => l.isDefault)

// export const localeString = defineType({
//     title: 'Localized string',
//     name: 'localeString',
//     type: 'object',
//     fieldsets: [
//         {
//             title: 'Translations',
//             name: 'translations',
//             // options: { collapsible: true }
//         }
//     ],
//     fields: supportedLanguages.map(lang => ({
//         title: lang.name,
//         name: lang.code,
//         type: 'string',
//         // fieldset: lang.isDefault ? undefined : 'translations',
//         // validation: (rule) => lang.isDefault ? rule.required() : rule.optional()
//     }))
// })

// export const localeText = defineType({
//     title: 'Localized text',
//     name: 'localeText',
//     type: 'object',
//     fieldsets: [
//         {
//             title: 'Translations',
//             name: 'translations',
//             // options: { collapsible: true }
//         }
//     ],
//     fields: supportedLanguages.map(lang => ({
//         title: lang.name,
//         name: lang.code,
//         type: 'text',
//         // fieldset: lang.isDefault ? undefined : 'translations',
//         // validation: (rule) => lang.isDefault ? rule.required() : rule.optional()
//     }))
// })