<script>
  import { tick } from 'svelte';

  let text = ''

  function handleKeydown(event) {
    if (event.keyCode === 13 && event.shiftKey) {
      event.preventDefault()
      print()
    }
  }

  function handleInput(event) {
    text = this.value
  }

  async function print() {
    const trimmedText = text.trim()

    if (!trimmedText) return

    const res = await fetch('/api/print', {
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
  <textarea value={ text } on:keydown={ handleKeydown } on:input={ handleInput }></textarea>
  <div class="submission"><button on:click={ print }>Print&nbsp;Text&nbsp;&nbsp;🖨️</button></div>
</main>

<style>
</style>
