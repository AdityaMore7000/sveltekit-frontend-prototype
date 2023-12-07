<script>
    export let data
    import Loading from "../components/Loading.svelte";
    import List from '../components/List.svelte'
</script>
{#if data.status}
<List {data} />
{:else}
<Loading />
{/if}