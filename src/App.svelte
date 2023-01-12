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
    const trimmedText = text.trim()

    if (!trimmedText) return

    const res = await fetch('http://192.168.1.40:3000', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        msg: `${trimmedText}\n`,
      })
    })
    text = ''
  }
</script>

<main>
  <textarea bind:value={ text } on:keydown={ handleKeydown }></textarea>
  <div class="submission"><button on:click={ print }>Print Text</button><span class="hint">Shift + Enter to print</span></div>
</main>

<style>
</style>
