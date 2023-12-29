import { useState } from "react";
import DisplayCards from "./components/DisplayCards";
import "./App.css";
import FetchImage from "./components/FetchImage";

function App() {
	const [count, setCount] = useState(0);
	return <DisplayCards />;
}

export default App;
