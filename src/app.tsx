import './app.css';
import { Router } from '@solidjs/router';
import { FileRoutes } from '@solidjs/start/router';
import { Suspense } from 'solid-js';
import type { RouteSectionProps } from '@solidjs/router';

export default function App() {
  return (
    <Router root={(props: RouteSectionProps) => <Suspense>{props.children}</Suspense>}>
      <FileRoutes />
    </Router>
  );
}
