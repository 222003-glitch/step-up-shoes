/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', './public/**/*.html'],
    theme: {
        extend: {
            fontSize: {
                xs: ['0.75rem', { lineHeight: '1.2', letterSpacing: '0.02em', fontWeight: '400' }],
                sm: ['0.875rem', { lineHeight: '1.3', letterSpacing: '0.02em', fontWeight: '400' }],
                base: ['1rem', { lineHeight: '1.5', letterSpacing: '0.025em', fontWeight: '400' }],
                lg: ['1.125rem', { lineHeight: '1.5', letterSpacing: '0.025em', fontWeight: '400' }],
                xl: ['1.25rem', { lineHeight: '1.5', letterSpacing: '0.025em', fontWeight: '400' }],
                '2xl': ['1.5rem', { lineHeight: '1.4', letterSpacing: '0.02em', fontWeight: '700' }],
                '3xl': ['1.875rem', { lineHeight: '1.3', letterSpacing: '0.02em', fontWeight: '700' }],
                '4xl': ['2.25rem', { lineHeight: '1.2', letterSpacing: '0.015em', fontWeight: '700' }],
                '5xl': ['3rem', { lineHeight: '1.1', letterSpacing: '0.01em', fontWeight: '700' }],
                '6xl': ['3.75rem', { lineHeight: '1.1', letterSpacing: '0em', fontWeight: '700' }],
                '7xl': ['4.5rem', { lineHeight: '1', letterSpacing: '0em', fontWeight: '700' }],
                '8xl': ['6rem', { lineHeight: '1', letterSpacing: '-0.01em', fontWeight: '700' }],
                '9xl': ['8rem', { lineHeight: '1', letterSpacing: '-0.02em', fontWeight: '700' }],
            },
            fontFamily: {
                heading: "spicy-rice",
                paragraph: "open sans"
            },
            colors: {
                brandaccent: '#D93F3F',
                sweetbackground: '#F9A8D4',
                sourbackground: '#3B82F6',
                buttontextprimary: '#FFFFFF',
                buttonbackgroundsecondary: '#000000',
                foreground: '#210D3A',
                destructiveforeground: '#FFFFFF',
                destructive: '#DF3131',
                background: '#FFFFFF',
                secondary: '#1557C0',
                'secondary-foreground': '#FFFFFF',
                'primary-foreground': '#210D3A',
                primary: '#F7C948'
            },
        },
    },
    future: {
        hoverOnlyWhenSupported: true,
    },
    plugins: [require('@tailwindcss/container-queries'), require('@tailwindcss/typography')],
}
