import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const srcHero = 'C:/Users/Windows 10/.gemini/antigravity-ide/brain/c9e3b5b9-c38a-4816-9c55-8dcb1d05afd5/about_hero_1786684833566.png';
    const srcCeo = 'C:/Users/Windows 10/.gemini/antigravity-ide/brain/c9e3b5b9-c38a-4816-9c55-8dcb1d05afd5/about_ceo_1786684933734.png';
    const srcCto = 'C:/Users/Windows 10/.gemini/antigravity-ide/brain/c9e3b5b9-c38a-4816-9c55-8dcb1d05afd5/about_cto_1786685071698.png';
    const srcCfo = 'C:/Users/Windows 10/.gemini/antigravity-ide/brain/c9e3b5b9-c38a-4816-9c55-8dcb1d05afd5/about_cfo_1786685172757.png';

    const assetsDir = path.join(process.cwd(), 'assets', 'images');
    const publicDir = path.join(process.cwd(), 'public');

    if (!fs.existsSync(assetsDir)) fs.mkdirSync(assetsDir, { recursive: true });
    if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir, { recursive: true });

    if (fs.existsSync(srcHero)) {
      fs.copyFileSync(srcHero, path.join(assetsDir, 'about-hero.png'));
      fs.copyFileSync(srcHero, path.join(publicDir, 'about-hero.png'));
    }
    if (fs.existsSync(srcCeo)) {
      fs.copyFileSync(srcCeo, path.join(assetsDir, 'about-ceo.png'));
      fs.copyFileSync(srcCeo, path.join(publicDir, 'about-ceo.png'));
    }
    if (fs.existsSync(srcCto)) {
      fs.copyFileSync(srcCto, path.join(assetsDir, 'about-cto.png'));
      fs.copyFileSync(srcCto, path.join(publicDir, 'about-cto.png'));
    }
    if (fs.existsSync(srcCfo)) {
      fs.copyFileSync(srcCfo, path.join(assetsDir, 'about-cfo.png'));
      fs.copyFileSync(srcCfo, path.join(publicDir, 'about-cfo.png'));
    }

    return NextResponse.json({ success: true, message: 'About AI images copied successfully' });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error?.message });
  }
}
