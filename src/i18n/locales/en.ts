import { interpolate } from '../utils'

export const en =
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
        example: interpolate('Test {foo} and {bar}'), 
    },

    about:
    {
        title: 'Works',
        description: 'This page demonstrates a simple localized route powered by the same i18n module.'
    }
}
