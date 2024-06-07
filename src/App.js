import { useState } from 'react';
import StarRating from './components/Starrating';
import Dialog from './components/Dialog';


function App() {
  const [dialogOpen, setDialogOpen] = useState(false);

  const openDialog = () => setDialogOpen(true);
  const closeDialog = () => setDialogOpen(false);

  return (
    <main>
        <div className="container">
          <h1>Star Rating System</h1>
          <StarRating />
        </div>
        <button className="open-dialog-button" onClick={openDialog}>Open Dialog</button>
          {dialogOpen && <Dialog onClose={closeDialog} />}
    </main>
  );
}

export default App;