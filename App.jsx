import Nav from './Nav';
import SCP from './Assignment1';

function App() {
    const [scp, setSCP] = useState([]);
    const [selectedSCP, setSelectedSCP] = useState(null);

    useEffect(
    ()=>{
        fetchData().then(scp => setMonsters(scp))
    }, []
    )
return (
<div>
        <Menu scp={scp} onSelect={setSelectedSCP} />
        <h1>SCP Website</h1>
        <link rel="stylesheet" href="style.css"></link>
        {selectedSCP && <Monster selectedSCP={selectedSCP} />}

</div>
);
}
export default App;