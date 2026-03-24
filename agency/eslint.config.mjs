import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
    // 1. GLOBAL RULES (Applies to your whole project)
    {
        rules: {
            // Force double quotes, but gracefully allow single quotes if needed to avoid backslashes!
            '@stylistic/quotes': ['error', 'double', { avoidEscape: true }],

            // Your previous rules
            'vue/html-self-closing': 'warn',
            '@typescript-eslint/no-unused-vars': 'warn',
            'vue/first-attribute-linebreak': 'off',

            // Keeps your blank lines safe everywhere
            'no-multiple-empty-lines': 'off',
            '@stylistic/no-multiple-empty-lines': 'off'
        }
    },

    // 2. SPECIFIC OVERRIDES (Applies ONLY to nuxt.config.ts)
    {
        // This targets the config file specifically
        files: ['nuxt.config.ts'],
        rules: {
            // Turn off all the annoying rules that try to format your objects
            '@stylistic/object-curly-spacing': 'off',   // Stops messing with spaces inside { }
            '@stylistic/object-curly-newline': 'off',   // Stops forcing properties onto new lines
            '@stylistic/object-property-newline': 'off' // Stops collapsing multi-line objects
        }
    }
)