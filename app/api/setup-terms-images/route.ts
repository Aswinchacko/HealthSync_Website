import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const srcIp = 'C:/Users/Windows 10/.gemini/antigravity-ide/brain/c9e3b5b9-c38a-4816-9c55-8dcb1d05afd5/terms_ip_1786685907115.png';

    const assetsDir = path.join(process.cwd(), 'assets', 'images');
    const publicDir = path.join(process.cwd(), 'public');

    if (!fs.existsSync(assetsDir)) fs.mkdirSync(assetsDir, { recursive: true });
    if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir, { recursive: true });

    if (fs.existsSync(srcIp)) {
      fs.copyFileSync(srcIp, path.join(assetsDir, 'terms-ip.png'));
      fs.copyFileSync(srcIp, path.join(publicDir, 'terms-ip.png'));
    }

    return NextResponse.json({ success: true, message: 'Terms AI image copied successfully' });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error?.message });
  }
}
