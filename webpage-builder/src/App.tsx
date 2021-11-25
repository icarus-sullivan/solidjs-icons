import { lazy, createSignal, createEffect } from 'solid-js';
import { render, For } from 'solid-js/web';
import { Router, Route, Link, useRoutes, useLocation } from 'solid-app-router';

import { packages } from '../../manifest';

import './index.css';

const routes = [
  {
    path: '/ai',
    component: lazy(() => import("./pages/ai"))
  },
  {
    path: '/bs',
    component: lazy(() => import("./pages/bs"))
  },
  {
    path: '/bx',
    component: lazy(() => import("./pages/bx"))
  },
  {
    path: '/di',
    component: lazy(() => import("./pages/di"))
  },
  {
    path: '/fa',
    component: lazy(() => import("./pages/fa"))
  },
  {
    path: '/fi',
    component: lazy(() => import("./pages/fi"))
  },
  {
    path: '/gi',
    component: lazy(() => import("./pages/gi"))
  },
  {
    path: '/go',
    component: lazy(() => import("./pages/go"))
  },
  {
    path: '/hi',
    component: lazy(() => import("./pages/hi"))
  },
  {
    path: '/io',
    component: lazy(() => import("./pages/io"))
  },
  {
    path: '/im',
    component: lazy(() => import("./pages/im"))
  },
  {
    path: '/md',
    component: lazy(() => import("./pages/md"))
  },
  {
    path: '/ri',
    component: lazy(() => import("./pages/ri"))
  },
  {
    path: '/si',
    component: lazy(() => import("./pages/si"))
  },
  {
    path: '/ti',
    component: lazy(() => import("./pages/ti"))
  },
  {
    path: '/vsc',
    component: lazy(() => import("./pages/vsc"))
  },
  {
    path: '/wi',
    component: lazy(() => import("./pages/wi"))
  },
  {
    path: '/cg',
    component: lazy(() => import("./pages/cg"))
  },
  {
    path: "/*",
    component: lazy(() => import("./pages/Home"))
  }
];

function App() {
  const [origin, setOrigin] = createSignal(window.location.origin);
  const Routes = useRoutes(routes);
  const loc = useLocation();



  return (
    <div>
      <div class='aside'>
        <ul>
          <Link href={`/home`}>
            <li>Home</li>
          </Link>
          <For each={packages}>
            {(pack: Package) => {
              const path = `/${pack.id}`;
              return (
                <Link href={path}>
                  <li active={loc.pathname.endsWith(path)}>{pack.name}</li>
                </Link>
              );
            }}
          </For>
        </ul>
      </div>
      <div class='content'>
        <Routes />
      </div>
    </div>
  );
}

render(() => (
  <Router>
    <App />
  </Router>
), document.getElementById('app'));
