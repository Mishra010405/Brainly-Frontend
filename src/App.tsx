import './App.css'
import { Button } from './Components/Button.tsx'
import { PlusIcon } from './Icons/PlusIcons.tsx';

function App() {
  return (
    <>
      <Button
        variant="primary"
        startIcon={<PlusIcon size="lg" />}
        endIcon={<PlusIcon size="lg" />}
        size="lg"
        title="Share"
      />

      <Button
        variant="secondary"
        startIcon={<PlusIcon size="lg" />}
        endIcon={<PlusIcon size="lg" />}
        size="lg"
        title="Share"
      />

      <Button
        variant="primary"
        startIcon={<PlusIcon size="sm" />}
        endIcon={<PlusIcon size="sm" />}
        size="sm"
        title="Share"
      />

      <Button
        variant="secondary"
        startIcon={<PlusIcon size="sm" />}
        endIcon={<PlusIcon size="sm" />}
        size="sm"
        title="Share"
      />
    </>
  );
}

export default App;