import { handleUpload, type HandleUploadBody } from '@vercel/blob/client'
import { NextResponse } from 'next/server'

const ALLOWED_CONTENT_TYPES = [
  'application/pdf',
  'image/jpeg',
  'image/png',
  'image/gif',
  'image/webp',
  'application/octet-stream', // DWG/DXF — browsers rarely report a specific MIME type for CAD files
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
]

export async function POST(request: Request) {
  const body = (await request.json()) as HandleUploadBody

  try {
    const jsonResponse = await handleUpload({
      body,
      request,
      onBeforeGenerateToken: async () => ({
        allowedContentTypes: ALLOWED_CONTENT_TYPES,
        maximumSizeInBytes: 20 * 1024 * 1024,
        addRandomSuffix: true,
      }),
    })

    return NextResponse.json(jsonResponse)
  } catch (error) {
    console.error('Feil ved generering av opplastingstoken:', error)
    return NextResponse.json(
      { error: (error as Error).message || 'Kunne ikke starte filopplasting.' },
      { status: 400 }
    )
  }
}
