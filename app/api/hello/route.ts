//export const dynamic = "force-dynamic"; // garante resposta calculada a cada requisição

export async function GET() {
    return Response.json({
        mensagem: "Olá! Esta resposta veio da minha API 🚀",
        horario: new Date().toISOString(),
    });
}