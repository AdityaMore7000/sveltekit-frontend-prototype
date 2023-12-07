/** @type {import('./$types').PageLoad} */
export async function load({fetch}){
const response = await fetch("https://svelte-backend-prototype.onrender.com/data")
const data = await response.json()
return {data};
}