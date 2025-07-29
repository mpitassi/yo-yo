import glob from 'fast-glob'

async function importPublication(publicationFilename) {
  let { publication } = await import(`../app/publications/${publicationFilename}`)

  return {
    slug: publicationFilename.replace(/(\/page)?\.mdx$/, ''),
    ...publication,
  }
}

export async function getAllPublications() {
  let publicationFilenames = await glob('*/page.mdx', {
    cwd: './src/app/publications',
  })

  let publications = await Promise.all(publicationFilenames.map(importArticle))

  return publications.sort((a, z) => +new Date(z.date) - +new Date(a.date))
}
