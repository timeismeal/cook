import { generateClasses } from '@formkit/themes'
import { genesisIcons } from '@formkit/icons'
import tailwindGenesisTheme from '@/assets/tailwind-genesis-theme.js' // change to your theme's path

export default {
  icons: {
    ...genesisIcons,
  },
  config: {
    classes: generateClasses(tailwindGenesisTheme),
  },
}