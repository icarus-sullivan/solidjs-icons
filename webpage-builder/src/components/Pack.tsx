import { createSignal, mergeProps } from 'solid-js';
import { For } from 'solid-js/web';
import { Link } from 'solid-app-router';

import FiLink from 'solidjs-icons/fi/FiLink';

import '../icons.css';

export default (props) => {
  const { It, pack, keys } = mergeProps(props);
  const [query, setQuery] = createSignal('');

  return (
    <div>
      <h1>{pack.name} <span style="font-size: 16px"><Link href={pack.url}><FiLink /></Link></span></h1>
      <span><b>License:</b> {pack.license}</span><br/>
      <div class="search-bar">
        <input type='text' placeholder="Search" onKeyUp={(e) => {
          setQuery(e.currentTarget.value.toLowerCase());
        }}/>
      </div>
      <div class='grid'>
        <For each={keys.filter((it) => it.toLowerCase().includes(query()))}>
          {(key) => {
            const C = It[key];
            return (
              <div class='icon-c'>
                <span class='icon-i'>
                  <C />
                </span>
                <span class='icon-t'>
                  {key}
                </span>
              </div>
            )
          }}
        </For>
      </div>
    </div>
  )
}