import introApp from '../playgroundSample/introduction/app.vue?raw'
import lifecycleApp from '../playgroundSample/essentials/lifecycle/app.vue?raw'
import lifecycleChild from '../playgroundSample/essentials/lifecycle/Child.vue?raw'
import templateSyntaxApp from '../playgroundSample/essentials/template-syntax/app.vue?raw'
import asyncApp from '../playgroundSample/components/async/app.vue?raw'
import asyncChild from '../playgroundSample/components/async/AsyncChild.vue?raw'
import composablesApp from '../playgroundSample/reusability/composables/app.vue?raw'
import useCounterJs from '../playgroundSample/reusability/composables/useCounter.js?raw'
import customDirectivesApp from '../playgroundSample/reusability/custom-directives/app.vue?raw'
import pluginsMain from '../playgroundSample/reusability/plugins/main.js?raw'
import pluginsApp from '../playgroundSample/reusability/plugins/app.vue?raw'
import pluginsPlugin from '../playgroundSample/reusability/plugins/plugin.js?raw'
import transitionApp from '../playgroundSample/built-ins/transition/app.vue?raw'
import transitionGroupApp from '../playgroundSample/built-ins/transition-group/app.vue?raw'
import testingApp from '../playgroundSample/scaling-up/testing/app.vue?raw'
import testingMath from '../playgroundSample/scaling-up/testing/math.js?raw'
import perfApp from '../playgroundSample/best-practices/performance/app.vue?raw'
import perfHeavy from '../playgroundSample/best-practices/performance/Heavy.vue?raw'
import a11yApp from '../playgroundSample/best-practices/accessibility/app.vue?raw'
import securityApp from '../playgroundSample/best-practices/security/app.vue?raw'
import quickStartApp from '../playgroundSample/quick-start/app.vue?raw'
import reactivityApp from '../playgroundSample/essentials/reactivity-fundamentals/app.vue?raw'
import componentBasicsApp from '../playgroundSample/essentials/component-basics/app.vue?raw'
import componentBasicsChild from '../playgroundSample/essentials/component-basics/Child.vue?raw'
import computedApp from '../playgroundSample/essentials/computed/app.vue?raw'
import classStyleApp from '../playgroundSample/essentials/class-and-style/app.vue?raw'
import conditionalApp from '../playgroundSample/essentials/conditional/app.vue?raw'
import listApp from '../playgroundSample/essentials/list/app.vue?raw'
import eventHandlingApp from '../playgroundSample/essentials/event-handling/app.vue?raw'
import formsApp from '../playgroundSample/essentials/forms/app.vue?raw'
import registrationApp from '../playgroundSample/components/registration/app.vue?raw'
import registrationChild from '../playgroundSample/components/registration/Child.vue?raw'
import propsApp from '../playgroundSample/components/props/app.vue?raw'
import propsChild from '../playgroundSample/components/props/Child.vue?raw'
import eventsApp from '../playgroundSample/components/events/app.vue?raw'
import eventsChild from '../playgroundSample/components/events/Child.vue?raw'
import vModelApp from '../playgroundSample/components/v-model/app.vue?raw'
import vModelChild from '../playgroundSample/components/v-model/Child.vue?raw'
import attrsApp from '../playgroundSample/components/attrs/app.vue?raw'
import attrsChild from '../playgroundSample/components/attrs/Child.vue?raw'
import slotsApp from '../playgroundSample/components/slots/app.vue?raw'
import slotsChild from '../playgroundSample/components/slots/Child.vue?raw'
import provideInjectApp from '../playgroundSample/components/provide-inject/app.vue?raw'
import provideInjectChild from '../playgroundSample/components/provide-inject/Child.vue?raw'
import keepAliveApp from '../playgroundSample/built-ins/keep-alive/app.vue?raw'
import keepAliveA from '../playgroundSample/built-ins/keep-alive/A.vue?raw'
import keepAliveB from '../playgroundSample/built-ins/keep-alive/B.vue?raw'
import teleportApp from '../playgroundSample/built-ins/teleport/app.vue?raw'
import suspenseApp from '../playgroundSample/built-ins/suspense/app.vue?raw'
import suspenseFoo from '../playgroundSample/built-ins/suspense/AsyncFoo.vue?raw'
import toolingApp from '../playgroundSample/scaling-up/tooling/app.vue?raw'
import toolingLazy from '../playgroundSample/scaling-up/tooling/Lazy.vue?raw'
import stateMain from '../playgroundSample/scaling-up/state-management/main.js?raw'
import stateApp from '../playgroundSample/scaling-up/state-management/app.vue?raw'
import stateCounter from '../playgroundSample/scaling-up/state-management/stores/counter.js?raw'
import ssrApp from '../playgroundSample/scaling-up/ssr/app.vue?raw'
import prodDeployApp from '../playgroundSample/best-practices/production-deployment/app.vue?raw'
import sfcApp from '../playgroundSample/scaling-up/sfc/app.vue?raw'
import sfcChild from '../playgroundSample/scaling-up/sfc/Child.vue?raw'
import routingApp from '../playgroundSample/scaling-up/routing/app.vue?raw'
import routingHome from '../playgroundSample/scaling-up/routing/Home.vue?raw'
import routingUser from '../playgroundSample/scaling-up/routing/User.vue?raw'

const samples = {
  'introduction': { 'App.vue': introApp },
  'essentials-lifecycle': { 'App.vue': lifecycleApp, 'Child.vue': lifecycleChild },
  'essentials-template-syntax': { 'App.vue': templateSyntaxApp },
  'components-async': { 'App.vue': asyncApp, 'AsyncChild.vue': asyncChild },
  'reusability-composables': { 'App.vue': composablesApp, 'useCounter.js': useCounterJs },
  'reusability-custom-directives': { 'App.vue': customDirectivesApp },
  'reusability-plugins': { 'main.js': pluginsMain, 'App.vue': pluginsApp, 'plugin.js': pluginsPlugin },
  'built-ins-transition': { 'App.vue': transitionApp },
  'built-ins-transition-group': { 'App.vue': transitionGroupApp },
  'scaling-up-testing': { 'App.vue': testingApp, 'math.js': testingMath },
  'best-practices-performance': { 'App.vue': perfApp, 'Heavy.vue': perfHeavy },
  'best-practices-accessibility': { 'App.vue': a11yApp },
  'best-practices-security': { 'App.vue': securityApp },
  'quick-start': { 'App.vue': quickStartApp },
  'essentials-reactivity-fundamentals': { 'App.vue': reactivityApp },
  'essentials-component-basics': { 'App.vue': componentBasicsApp, 'Child.vue': componentBasicsChild },
  'essentials-computed': { 'App.vue': computedApp },
  'essentials-class-and-style': { 'App.vue': classStyleApp },
  'essentials-conditional': { 'App.vue': conditionalApp },
  'essentials-list': { 'App.vue': listApp },
  'essentials-event-handling': { 'App.vue': eventHandlingApp },
  'essentials-forms': { 'App.vue': formsApp },
  'components-registration': { 'App.vue': registrationApp, 'Child.vue': registrationChild },
  'components-props': { 'App.vue': propsApp, 'Child.vue': propsChild },
  'components-events': { 'App.vue': eventsApp, 'Child.vue': eventsChild },
  'components-v-model': { 'App.vue': vModelApp, 'Child.vue': vModelChild },
  'components-attrs': { 'App.vue': attrsApp, 'Child.vue': attrsChild },
  'components-slots': { 'App.vue': slotsApp, 'Child.vue': slotsChild },
  'components-provide-inject': { 'App.vue': provideInjectApp, 'Child.vue': provideInjectChild },
  'built-ins-keep-alive': { 'App.vue': keepAliveApp, 'A.vue': keepAliveA, 'B.vue': keepAliveB },
  'built-ins-teleport': { 'App.vue': teleportApp },
  'built-ins-suspense': { 'App.vue': suspenseApp, 'AsyncFoo.vue': suspenseFoo },
  'scaling-up-tooling': { 'App.vue': toolingApp, 'Lazy.vue': toolingLazy },
  'scaling-up-state-management': { 'main.js': stateMain, 'App.vue': stateApp, 'stores/counter.js': stateCounter },
  'scaling-up-ssr': { 'App.vue': ssrApp },
  'best-practices-production-deployment': { 'App.vue': prodDeployApp },
  'scaling-up-sfc': { 'App.vue': sfcApp, 'Child.vue': sfcChild },
  'scaling-up-routing': { 'App.vue': routingApp, 'Home.vue': routingHome, 'User.vue': routingUser },
}

export function getFiles(slug) {
  return samples[slug] || null
}
