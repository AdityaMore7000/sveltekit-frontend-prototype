<script>
    export let data
</script>
<div>
    <ol>
        {#each data.data as dataItem,i}
            <li><p>{dataItem.name}</p></li>
        {/each}
    </ol>
</div>