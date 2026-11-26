#!/usr/bin/env python3
"""Safely add illustration assets to the original index.html in-place."""
from pathlib import Path
import sys

path = Path(sys.argv[1] if len(sys.argv) > 1 else 'index.html')
source = path.read_text(encoding='utf-8')
if '<html' not in source or '</head>' not in source or '</body>' not in source:
    raise SystemExit('Invalid index.html: expected a complete HTML document')
if 'scene-images.css' not in source:
    source = source.replace('</head>', '<link rel="stylesheet" href="./scene-images.css">\n</head>', 1)
if 'scene-images.js' not in source:
    source = source.replace('</body>', '<script src="./scene-images.js"></script>\n</body>', 1)
path.write_text(source, encoding='utf-8')
print('Updated', path)
