import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

// Map of common image file extensions to mime types
const MIME_TYPES: Record<string, string> = {
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.avif': 'image/avif'
};

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ path: string[] }> }
) {
  try {
    const resolvedParams = await params;
    const filePathArray = resolvedParams.path;
    if (!filePathArray || filePathArray.length === 0) {
      return new NextResponse('Bad Request', { status: 400 });
    }

    // Bypass Webpack and Turbopack static analysis by using string concatenation instead of path.join
    const cwd = process.cwd();
    const relativePath = filePathArray.join('/');
    const absolutePath = `${cwd}/public/uploads/${relativePath}`;
    const uploadsRoot = `${cwd}/public/uploads`;

    // Security check: Prevent directory traversal out of public/uploads
    if (!absolutePath.startsWith(uploadsRoot)) {
      return new NextResponse('Forbidden', { status: 403 });
    }

    try {
      // Check if file physically exists
      await fs.access(absolutePath);
    } catch {
      console.warn(`[Dynamic Media API] File not found on disk: ${absolutePath}`);
      return new NextResponse('Image Not Found', { status: 404 });
    }

    // Read file buffer
    const fileBuffer = await fs.readFile(absolutePath);

    // Determine the content type based on extension
    const ext = path.extname(absolutePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    // Serve the file with proper headers and caching
    return new NextResponse(fileBuffer, {
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    });

  } catch (error: any) {
    console.error('[Dynamic Media API] Server Error:', error.message);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
