"""Create a reproducible ZIP of the complete profile kit using only the standard library."""
from pathlib import Path
from zipfile import ZipFile, ZipInfo, ZIP_DEFLATED
import json

root = Path(__file__).resolve().parents[1] / "github-profile-readmes"
output = root / "downloads" / "lucas-oliveira-readmes.zip"
output.parent.mkdir(parents=True, exist_ok=True)
sources = []
for item in ["README.md", "GALLERY.md", "SETUP.md", "profile.config.json", ".gitattributes", ".gitignore", ".github", "scripts", "themes", "assets", "data"]:
    p = root / item
    sources.extend([p] if p.is_file() else sorted(p.rglob("*")))
with ZipFile(output, "w", compression=ZIP_DEFLATED) as archive:
    for file in sorted(p for p in sources if p.is_file()):
        info = ZipInfo(file.relative_to(root).as_posix(), date_time=(2026, 1, 1, 0, 0, 0))
        info.compress_type = ZIP_DEFLATED
        info.external_attr = 0o644 << 16
        archive.writestr(info, file.read_bytes())
with ZipFile(output) as archive:
    assert archive.testzip() is None
    expected = len(json.loads((root / "profile.config.json").read_text(encoding="utf-8"))["themes"])
    assert len([p for p in archive.namelist() if p.startswith("themes/") and p.endswith("README.md")]) == expected
print(f"Kit ZIP verificado: {output.name} ({output.stat().st_size:,} bytes)")
