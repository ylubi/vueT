import { defineStore } from 'pinia'
export const useCounterStore = defineStore("counter", {
  state: () => ({ count: 0, todos: [] }),
  getters: { double: (state) => state.count * 2 },
  actions: { inc(){ this.count++ }, addTodo(text){ if(!text) return; this.todos.push({ id: Date.now(), text }) } },
})