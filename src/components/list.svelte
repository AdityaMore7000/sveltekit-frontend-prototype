<script>
    export let data
    console.log(data)
</script>
<div>
    <ul>
        {#each data as dataItem}
            <li>{dataItem}</li>
        {/each}
    </ul>
</div>