<script>
// @ts-nocheck

    import Nested from './nested.svelte';

    let src = '../favicon.png';
    let alt = 'svelte logo'
    let string = `this string contains some <strong>HTML!!!</strong>`;
    
    let count = 0;
    $: doubled = count * 2;

    function increment() {
        count += 1;
    }

    $: if (count >= 20) {
		alert('count is too high! Resetting');
		count = 0;
	}

    let numbers = [1, 2, 3, 4];

    function addNumber() {
        numbers = [...numbers, numbers.length + 1];
    }

    $: sum = numbers.reduce((total, currentNumber) => total + currentNumber, 0);
</script>

<style>

    *, h1 {
        display: inline-block;
    }

    p {
        font-family: 'Comic Sans MS', cursive;
        font-size: 1.5em;
        display: block;
    }
</style>


<br>
<h1>Welcome to SvelteKit</h1>

<p>This is a paragraph.</p>

<!-- This imports everything from nested. and adds the data needed for 'answer' -->
<Nested answer={42} />
<p>{@html string}</p>

<button on:click={increment}>
    Clicked {count} {count === 1 ? 'time' : 'times'}
</button>

<p class="info">{count} doubled is {doubled}</p>

<p>{numbers.join(' + ')} = {sum}</p>

<button on:click={addNumber}>
	Add a number
</button>


