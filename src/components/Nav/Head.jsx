import { useState } from 'react';
import Header from './Header'; // Adjust the import path as necessary
function App() {
    const [isDrawerOpen] = useState(false); // Removed unused setIsDrawerOpen

    return (
        <div>
            <Header isOpen={isDrawerOpen} /> {/* Now passing the isOpen prop */}
            {/* Other components */}
        </div>
    );
}