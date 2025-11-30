import { guideRegistry as templateRegistry } from '@template/knowledge/main.js'

export const guideRegistry = templateRegistry

export const guideMap = Object.fromEntries(guideRegistry.map(g => [g.slug, g]))
