<script lang="ts">
  export let persistedState: AnyMachineSnapshot | undefined = undefined;

  import { useMachine } from '@xstate/svelte';
  import { fetchMachine } from './fetchMachine.ts';
  import type { AnyMachineSnapshot } from 'xstate';
  import { fromPromise } from 'xstate/actors';

  const onFetch = () =>
    new Promise<string>((res) => setTimeout(() => res('some data'), 50));

  const { state, send } = useMachine(fetchMachine, {
    state: persistedState,
    actors: {
      fetchData: fromPromise(onFetch)
    }
  });
</script>

<div>
  {#if $state.matches('idle')}
    <button on:click={() => send({ type: 'FETCH' })}>Fetch</button>
  {:else if $state.matches('loading')}
    <div>Loading...</div>
  {:else if $state.matches('success')}
    <div>
      Success! Data:
      <div data-testid="data">{$state.context.data}</div>
    </div>
  {/if}
</div>
