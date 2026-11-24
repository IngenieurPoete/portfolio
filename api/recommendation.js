import { Resend } from 'resend';

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Méthode non autorisée.' });
  }

  const data = req.body || {};
  const fields = ['name', 'email', 'role', 'institution', 'relationship', 'text'];

  for (const field of fields) {
    if (typeof data[field] !== 'string' || !data[field].trim()) {
      return res.status(400).json({ error: 'Tous les champs obligatoires doivent être renseignés.' });
    }
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) {
    return res.status(400).json({ error: 'Adresse email invalide.' });
  }

  if (data.text.length > 5000) {
    return res.status(400).json({ error: 'La recommandation est trop longue.' });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('Missing RESEND_API_KEY');
    return res.status(500).json({ error: 'Le service e-mail n’est pas configuré.' });
  }

  const resend = new Resend(apiKey);
  const name = data.name.trim();
  const email = data.email.trim();
  const role = data.role.trim();
  const institution = data.institution.trim();
  const relationship = data.relationship.trim();
  const text = data.text.trim();

  const subject = `Nouvelle recommandation de ${name} (${institution})`;
  const textBody = [
    `Nom: ${name}`,
    `Email: ${email}`,
    `Rôle: ${role}`,
    `Établissement/Entreprise: ${institution}`,
    `Relation: ${relationship}`,
    '',
    'Recommandation:',
    text,
  ].join('\n');

  try {
    const { error } = await resend.emails.send({
      from: process.env.RECOMMENDATION_FROM_EMAIL || 'Portfolio <onboarding@resend.dev>',
      to: [process.env.RECOMMENDATION_TO_EMAIL || 'bayerof11@gmail.com'],
      replyTo: email,
      subject,
      text: textBody,
      html: `
        <h2>Nouvelle recommandation</h2>
        <p><strong>Nom :</strong> ${escapeHtml(name)}</p>
        <p><strong>Email :</strong> ${escapeHtml(email)}</p>
        <p><strong>Rôle :</strong> ${escapeHtml(role)}</p>
        <p><strong>Établissement/Entreprise :</strong> ${escapeHtml(institution)}</p>
        <p><strong>Relation :</strong> ${escapeHtml(relationship)}</p>
        <h3>Recommandation</h3>
        <p>${escapeHtml(text).replace(/\n/g, '<br>')}</p>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return res.status(502).json({ error: 'Impossible d’envoyer la recommandation.' });
    }

    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error('Recommendation API error:', error);
    return res.status(500).json({ error: 'Erreur lors de l’envoi de la recommandation.' });
  }
}
