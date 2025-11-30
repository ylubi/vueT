import { ref } from 'vue'
export function useCounter(){ 
    const n = ref(0); 
    const inc = () => n.value++; 
    const dec = () => n.value--; 
    return { n, inc, dec } 
}