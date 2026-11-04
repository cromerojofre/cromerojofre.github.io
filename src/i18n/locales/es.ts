import type { Translations } from '../config'
import { interpolate } from '../utils'

// Always use `satisfies Translations` to validate the translation structure.
export const es =
{
    site:
    {
        brand: 'Carolina Romero Jofré',
        tagline: ''
    },

    hero:
    {
        title: '',
        subtitle: '',
        description: interpolate(''),
        example: interpolate('Prueba {foo} y {bar}')
    },

    about:
    {
        title: 'Obras',
        description: '.'
    }
} satisfies Translations;
