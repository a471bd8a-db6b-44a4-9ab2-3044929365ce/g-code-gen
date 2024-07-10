<script lang="ts">
    import { genGCodeLoop } from "$lib";
    import { saveAs } from "file-saver";

    let z_min: number = 30,
        z_max: number = 33.5,
        z_inc: number = 0.025,
        repeats: number = 700;

    let genResult: string = "";
    let path = "G1 Y-0,3\nG1 X55\nG1 Y-7\nG1 X26";
    function generate() {
        genResult = genGCodeLoop(
            path.split("\n"),
            z_min,
            z_inc,
            z_max,
            repeats,
        ).join("\n");
    }

    function save() {
        const blob = new Blob([genResult], {
            type: "text/plain;charset=utf-8",
        });
        saveAs(blob, "gcode.txt");
    }
</script>

<div>
    <div>
        <label for="">Path</label>
    </div>
    <textarea class="path" name="" id="" bind:value={path}></textarea>
</div>

<div>
    <div>
        <label for="">Z-Min</label>
        <input type="number" bind:value={z_min} />
    </div>
    <div>
        <label for="">Z-Max</label>
        <input type="number" bind:value={z_max} />
    </div>

    <div>
        <label for="">Z-Inc</label>
        <input type="number" bind:value={z_inc} />
    </div>

    <div>
        <label for="">Repeats</label>
        <input type="number" bind:value={repeats} />
    </div>

    <button on:click={generate}>GEN</button>
</div>

{#if genResult.length > 0}
    <div>
        <textarea name="" id="" bind:value={genResult} class="result"
        ></textarea>
    </div>
    <div>
        <button on:click={() => navigator.clipboard.writeText(genResult)}
            >COPY TO CLIPBOARD</button
        >

        <button on:click={() => save()}>SAVE AS FILE</button>
    </div>
{/if}

<style>
    .result {
        margin: 8px;
        width: 90vh;
        height: 35ch;
    }
    .path {
        width: 300px;
        height: 20ch;
    }
    label {
        width: 60px;
        display: inline-block;
    }
</style>
