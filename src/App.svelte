<script>
  import { tick } from 'svelte';

  let text = ''

  function handleKeydown(event) {
    if (event.keyCode === 13 && event.shiftKey) {
      event.preventDefault()
      print()
    }

    console.log(this.selectionStart)
  }

  async function print() {
    const trimmedText = text.trim()

    if (!trimmedText) return

    const res = await fetch('http://192.168.1.151:3000', {
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

  function limitLineLength(str, maxLength) {
    // Split the string into words
    const words = str.split(' ');

    let currentLineLength = 0;
    let result = '';

    // Iterate through the words
    for (const word of words) {
      // If adding the current word to the line would exceed the max length, start a new line
      if (currentLineLength + word.length > maxLength) {
        result += '\n';
        currentLineLength = 0;
      }

      // Add the word to the line
      result += word + ' ';
      currentLineLength += word.length + 1;
    }

    return result;
  }

</script>

<main>
  <textarea bind:value={ text } on:keydown={ handleKeydown }></textarea>
  <div class="submission"><button on:click={ print }>Print Text</button><span class="hint">Shift + Enter to print</span></div>
</main>

<style>
</style>
