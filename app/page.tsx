import { networkSummary } from "../lib/stellar";
export default function Home(){return <main><p className="tag">STELLAR / SOROBAN</p><h1>StreamlineXLM</h1><p>Recurring payment and payroll streams for teams.</p><section className="card"><h2>Network</h2><p>{networkSummary()}</p></section></main>}
