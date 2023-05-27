import { NextResponse } from 'next/server';
import { OpenAIEdgeStream } from 'openai-edge-stream';

export async function GET(request) {
  try {
    const { message } = request.json();
    const stream = await OpenAIEdgeStream(
      'https://api.openai.com/v1/chat/completions',
      {
        headers: {
          'content-type': 'application/json',
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        },
        method: 'POST',
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [{ content: message, role: 'user' }],
          stream: true,
        }),
      }
    );
    return new NextResponse(stream);
  } catch (error) {
    console.log('ERROR OCCURED IN POSTING MESSAGE', error);
  }
  return NextResponse.json({ hello: 'world' });
}
