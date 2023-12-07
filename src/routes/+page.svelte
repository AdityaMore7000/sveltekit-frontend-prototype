<script>
    export let data
    import Loading from "../components/loading.svelte";
    import List from '../components/list.svelte'
</script>
<Loading />
<List {data} />