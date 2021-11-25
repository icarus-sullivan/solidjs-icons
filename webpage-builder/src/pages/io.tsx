import * as It from 'solidjs-icons/io';
import Pack from '../components/Pack';
import { packages } from '../../../manifest';

const keys = Object.keys(It);
const pack = packages.find((it) => it.id === 'io');

export default () => (
  <Pack keys={keys} It={It} pack={pack} />
)