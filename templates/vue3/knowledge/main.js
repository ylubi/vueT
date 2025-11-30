import data from './knowledge.md'

export const guideRegistry = data

export const guideMap = Object.fromEntries(guideRegistry.map(g => [g.slug, g]))
