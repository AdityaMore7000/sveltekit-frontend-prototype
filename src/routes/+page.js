export async function load({fetch}){
    const ping = await fetch("https://svelte-backend-prototype.onrender.com/ping")
    return {status:ping.ok}
}