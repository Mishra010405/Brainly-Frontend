
import './App.css'
import { Button } from './Components/Button.tsx'
import { PlusIcon } from './Icons/PlusIcons.tsx';

function App() {
  return (
    <>
      <Button startIcon={<PlusIcon/>}  variant="primary" size="md" text="Share" onClick={() => {}} />
      <Button variant="secondary" size="md" text="Add Content" onClick={() => {}} />

    </>
  );
}

export default App
