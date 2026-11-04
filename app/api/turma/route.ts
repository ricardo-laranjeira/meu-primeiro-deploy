export async function GET() {
    return Response.json({
    turma: process.env.NOME_TURMA ?? "variável não definida",
    });
}