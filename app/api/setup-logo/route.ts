import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const srcLogo = path.join(process.cwd(), 'assets', 'images', 'final_logo.png');
    const publicLogo = path.join(process.cwd(), 'public', 'final_logo.png');

    if (fs.existsSync(srcLogo)) {
      fs.copyFileSync(srcLogo, publicLogo);
      return NextResponse.json({ success: true, message: 'final_logo.png copied to public successfully' });
    }

    return NextResponse.json({ success: false, message: 'src logo file not found' });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error?.message });
  }
}
