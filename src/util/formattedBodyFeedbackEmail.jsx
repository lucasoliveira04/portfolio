export const FormattedMensagemBodyEmail = (feedback, contato) => {
  return `
<html>
    <body>
        <div style="font-family: sans-serif; color: #1f2937; background-color: #ffffff; padding: 16px; border: 1px solid #d1d5db; border-radius: 8px;">
      <h2 style="font-size: 20px; font-weight: bold; margin-bottom: 16px; color: #2563eb;">📩 Novo Feedback Recebido</h2>

      <div style="margin-bottom: 16px;">
        <p style="font-size: 14px; color: #6b7280; font-weight: 500; margin: 0;">Mensagem:</p>
        <p style="font-size: 16px; white-space: pre-line; margin-top: 4px;">${feedback}</p>
      </div>

      <div>
        <p style="font-size: 14px; color: #6b7280; font-weight: 500; margin: 0;">Contato:</p>
        <p style="font-size: 16px; margin-top: 4px;">${contato}</p>
      </div>
    </div>
    </body>
</html>
  `
};
