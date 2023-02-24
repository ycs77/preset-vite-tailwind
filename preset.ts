export default definePreset({
  name: 'ycs77/preset-laravel-tailwind',
  postInstall: ({ hl }) => [
    `Run ${hl('yarn dev')}`,
  ],
  handler: async () => {
    await installTailwindcss()
  },
})

async function installTailwindcss() {
  await installPackages({
    title: 'install Node dependencies',
    for: 'node',
    packages: [
      'tailwindcss@^3.2.0',
      'autoprefixer@^10.0.0',
      'postcss@^8.3.0',
      'postcss-import@^14.0.0',
    ],
    dev: true,
  })

  await group({
    title: 'install Tailwind CSS scaffolding',
    handler: async() => {
      await extractTemplates({
        title: 'extract templates',
        from: 'default',
      })
    },
  })
}
