<script>
  import { tick } from 'svelte';

  let text = ''

  function handleKeydown(event) {
    if (event.keyCode === 13 && event.shiftKey) {
      event.preventDefault()
      print()
    }
  }

  async function print() {
    const res = await fetch('http://mush.network/api/print', {
      method: 'POST',
      body: JSON.stringify({
        thing: 'yeah',
        other: 'yep',
      })
    })
    const json = await res.json()
    result = JSON.stringify(json)
    text = ''
  }
</script>

<main>
  <textarea bind:value={ text } on:keydown={ handleKeydown }></textarea>
  <div class="submission"><button on:click={ print }>Print Text</button><span class="hint">Shift + Enter to print</span></div>
</main>

<style>
</style>
