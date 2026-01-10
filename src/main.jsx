import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(<App />); //App ek function hai estarhaa see react mein function koo call kartee hai, self tag <App /> aur opening aur closing tag <App></App> kee ander bhi kar saktee hai
// function call is replaced by it's return value :- Yee donoo likhnee <App /> aur <div>App</div> result  aayegaa screen par
