import Markdown from '../components/Markdown/Markdown';

const home = `
## Installation

\`\`\`bash
yarn add solidjs-icons
\`\`\`

### Usage
\`\`\`jsx
import { FiX } from 'solidjs-icons/fi';
\`\`\`
`

export default () => (
  <Markdown text={home} />
);