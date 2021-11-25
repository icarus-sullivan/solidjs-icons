import { createEffect } from 'solid-js';
import showdown from 'showdown';

import './markdown.css';

export default (props) => {
  let ref;

  createEffect(() => {
    showdown.setFlavor('github');
    const content = new showdown.Converter({ tables: true }).makeHtml(props.text || '');
    ref.innerHTML = content;
  });

  return (
    <div class="markdown" ref={ref} />
  );
}