import * as It from 'solidjs-icons/ti';
import Pack from '../components/Pack';
import { packages } from '../../../manifest';

const keys = Object.keys(It);
const pack = packages.find((it) => it.id === 'ti');

export default () => (
  <Pack keys={keys} It={It} pack={pack} />
)