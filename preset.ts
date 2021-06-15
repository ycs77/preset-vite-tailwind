import { color, Preset } from 'apply'

Preset.setName('Tailwind CSS for Vite')
Preset.option('install', true)

Preset.extract('default').withTitle('Extracting templates...')

Preset.group((preset) => {
  preset
    .editNodePackages()
    .addDev('tailwindcss', '^2.1.0')
    .addDev('autoprefixer', '^10.0')
    .addDev('postcss', '^8.3.0')
    .addDev('postcss-import', '^14.0')
    .addDev('postcss-nested', '^5.0')
  preset.installDependencies().ifOption('install')
}).withTitle('Installing dependencies...')

Preset.instruct([
  `Run ${color.magenta('npm run dev')} or ${color.magenta('yarn dev')}`,
  `Docs: ${color.magenta('https://tailwindcss.com')}`,
])
