import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {registerLicense} from '@syncfusion/ej2-base'
import {ContextProvider} from './contexts/ContextProvider'

registerLicense(import.meta.env.VITE_SYNCFUSION_API_KEY)


createRoot(document.getElementById('root')).render(
    <ContextProvider>
        <App />
    </ContextProvider>
)
