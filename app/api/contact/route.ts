import { NextRequest, NextResponse } from 'next/server'

const MAILGUN_API_KEY = process.env.MAILGUN_API_KEY || ''
const MAILGUN_DOMAIN = process.env.MAILGUN_DOMAIN || 'traslochimilanopro.it'
const DESTINATION_EMAIL = process.env.DESTINATION_EMAIL || 'localclark@gmail.com'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, message, servizio } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Campi obbligatori mancanti' },
        { status: 400 }
      )
    }

    // Send email via Mailgun API
    const formData = new URLSearchParams()
    formData.append('from', `${name} <info@${MAILGUN_DOMAIN}>`)
    formData.append('to', DESTINATION_EMAIL)
    formData.append('subject', `Nuova Richiesta Preventivo - ${name}`)

    const textMessage = `
Nome: ${name}
Email: ${email}
Telefono: ${phone || 'Non fornito'}
Servizio: ${servizio || 'Non specificato'}

Messaggio:
${message}
    `

    const htmlMessage = `
      <h2>Nuova Richiesta Preventivo</h2>
      <p><strong>Nome:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Telefono:</strong> ${phone || 'Non fornito'}</p>
      <p><strong>Servizio:</strong> ${servizio || 'Non specificato'}</p>
      <p><strong>Messaggio:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
    `

    formData.append('text', textMessage)
    formData.append('html', htmlMessage)

    const response = await fetch(
      `https://api.mailgun.net/v3/${MAILGUN_DOMAIN}/messages`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Basic ${Buffer.from(`api:${MAILGUN_API_KEY}`).toString('base64')}`
        },
        body: formData
      }
    )

    if (!response.ok) {
      const errorText = await response.text()
      console.error('Mailgun API error:', errorText)
      throw new Error('Errore invio email tramite Mailgun')
    }

    const result = await response.json()
    console.log('Email inviata con successo:', result)

    return NextResponse.json({
      success: true,
      message: 'Email inviata con successo',
      id: result.id
    })
  } catch (error) {
    console.error('Errore invio email:', error)
    return NextResponse.json(
      { error: 'Errore durante l\'invio dell\'email' },
      { status: 500 }
    )
  }
}
