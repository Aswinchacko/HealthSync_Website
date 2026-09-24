import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const src1 = 'C:/Users/Windows 10/.gemini/antigravity-ide/brain/c9e3b5b9-c38a-4816-9c55-8dcb1d05afd5/career_hero_team_1786684311991.png';
    const src2 = 'C:/Users/Windows 10/.gemini/antigravity-ide/brain/c9e3b5b9-c38a-4816-9c55-8dcb1d05afd5/career_culture_team_1786684331063.png';

    const assetsDir = path.join(process.cwd(), 'assets', 'images');
    const publicDir = path.join(process.cwd(), 'public');

    if (!fs.existsSync(assetsDir)) fs.mkdirSync(assetsDir, { recursive: true });
    if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir, { recursive: true });

    if (fs.existsSync(src1)) {
      fs.copyFileSync(src1, path.join(assetsDir, 'career1.png'));
      fs.copyFileSync(src1, path.join(publicDir, 'career1.png'));
    }

    if (fs.existsSync(src2)) {
      fs.copyFileSync(src2, path.join(assetsDir, 'career2.png'));
      fs.copyFileSync(src2, path.join(publicDir, 'career2.png'));
    }

    return NextResponse.json({ success: true, message: 'Career AI images copied successfully' });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error?.message });
  }
}
