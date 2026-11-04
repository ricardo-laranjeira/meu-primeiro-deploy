"use client";
import { useState } from "react";
export default function Home() {
  const [nome, setNome] = useState("");
  const [resposta, setResposta] = useState("");
  const [carregando, setCarregando] = useState(false);
  async function chamarApi() {
    setCarregando(true);
    try {
      const res = await fetch(`/api/saudacao?nome=${encodeURIComponent(nome)}`);
      const dados = await res.json();
      setResposta(dados.mensagem);
    } catch {
      setResposta("Erro ao chamar a API.");
    } finally {
      setCarregando(false);
    }
  }
  return (
    <main style={{ maxWidth: 480, margin: "4rem auto", fontFamily: "sans-serif" }}>
    <h1>Meu primeiro deploy na Vercel</h1>
    <p>Digite seu nome e clique no botão para chamar a API:</p>
    <input value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Seu nome" 
      style={{ padding: 8, marginRight: 8, border: "1px solid #888", borderRadius: 4 }}/>
    <button onClick={chamarApi} disabled={carregando} style={{ padding: "8px 16px" }}>
    {carregando ? "Chamando..." : "Chamar API"}
    </button>
    {resposta && <p style={{ marginTop: 24, fontSize: 20 }}>{resposta}</p>}
    {resposta && (<p style={{ marginTop: 8, fontSize: 20 }}>Olá Mundo, meu nome é {nome}</p>)}
    </main>
  );
}
