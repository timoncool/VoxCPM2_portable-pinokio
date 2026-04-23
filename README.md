<div align="center">

# VoxCPM2 Portable — Pinokio Launcher

One-click cross-platform launcher for **[VoxCPM2 Portable](https://github.com/timoncool/VoxCPM2_portable)** — multilingual TTS (30 languages incl. Russian) with Voice Design, Voice Cloning, and end-to-end LoRA fine-tuning (video/audio → dataset → training). Local, private, free.

[![Install on Pinokio](https://img.shields.io/badge/Install_on-Pinokio-7c3aed?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTEyIDJMMiAyMmgyMEwxMiAyem0wIDYuODFMMTguMzUgMjBINS42NUwxMiA4LjgxeiIvPjwvc3ZnPg==)](https://pinokio.co/item?uri=https://github.com/timoncool/VoxCPM2_portable-pinokio)
[![Open in Pinokio](https://img.shields.io/badge/Open_in-Pinokio-6d28d9?style=for-the-badge)](https://beta.pinokio.co/apps/github-com-timoncool-voxcpm2-portable-pinokio)
[![App Source](https://img.shields.io/badge/App_Source-VoxCPM2_Portable-181717?style=for-the-badge&logo=github)](https://github.com/timoncool/VoxCPM2_portable)
[![Donate](https://img.shields.io/badge/💖_Donate-Support-f43f5e?style=for-the-badge)](DONATE.md)

[![Stars](https://img.shields.io/github/stars/timoncool/VoxCPM2_portable-pinokio?style=flat-square)](https://github.com/timoncool/VoxCPM2_portable-pinokio/stargazers)
[![License](https://img.shields.io/github/license/timoncool/VoxCPM2_portable-pinokio?style=flat-square)](LICENSE)
[![Last Commit](https://img.shields.io/github/last-commit/timoncool/VoxCPM2_portable-pinokio?style=flat-square)](https://github.com/timoncool/VoxCPM2_portable-pinokio/commits/main)
[![Issues](https://img.shields.io/github/issues/timoncool/VoxCPM2_portable-pinokio?style=flat-square)](https://github.com/timoncool/VoxCPM2_portable-pinokio/issues)
[![Topic: Pinokio](https://img.shields.io/badge/topic-pinokio-7c3aed?style=flat-square)](https://github.com/topics/pinokio)

![Windows](https://img.shields.io/badge/Windows-0078D6?style=flat-square&logo=windows&logoColor=white)
![Linux](https://img.shields.io/badge/Linux-FCC624?style=flat-square&logo=linux&logoColor=black)
![macOS](https://img.shields.io/badge/macOS-000000?style=flat-square&logo=apple&logoColor=white)
![NVIDIA](https://img.shields.io/badge/NVIDIA-76B900?style=flat-square&logo=nvidia&logoColor=white)
![AMD](https://img.shields.io/badge/AMD-ED1C24?style=flat-square&logo=amd&logoColor=white)
![Python](https://img.shields.io/badge/Python-3.12-3776AB?style=flat-square&logo=python&logoColor=white)
![PyTorch](https://img.shields.io/badge/PyTorch-2.7.1-EE4C2C?style=flat-square&logo=pytorch&logoColor=white)

</div>

---

## 🚀 Install in 1 click

1. Install **[Pinokio](https://pinokio.computer/)** (Win / Linux / macOS)
2. Click the **"Install on Pinokio"** button above — Pinokio opens, confirms the launcher URL, and installs everything

Or paste the URL into Pinokio's **Discover → More → Download from URL**:

```
https://github.com/timoncool/VoxCPM2_portable-pinokio
```

Model (~4-5 GB for VoxCPM2) downloads automatically on first generation. Parakeet ASR (~670 MB) is lazy-loaded on first LoRA auto-prepare.

## 🎙 What's inside

- **30 languages TTS** — RU / EN / ZH (+9 Chinese dialects) / AR / FR / DE / HI / IT / JA / KO / PT / ES + more, auto language detection
- **48 kHz studio output** via AudioVAE V2 super-resolution (16 → 48 kHz)
- **Voice Design** — create voices from text descriptions (gender, age, tone, emotion, pace, accent), zero-shot
- **Voice Cloning** — clone from 5-50 sec reference audio, bundled ~100 voices pack + 743 extra Russian voices on-demand
- **LoRA Fine-tuning Auto Pipeline** — drop a video/podcast (mp4/mkv/mp3/wav/…), app does **ffmpeg → Parakeet TDT ASR → sentence-aware splitting → auto-tune hyperparameters → training** in a single click
- **LoRA Manual Mode** — upload pre-cleaned clips + transcripts, official OpenBMB defaults (r=32, α=32, 1000 steps, lr=1e-4)
- **Hot-swap LoRAs** across TTS / Voice Design / Cloning without restart
- **MP3 / WAV / FLAC / OGG** output (MP3 default via bundled FFmpeg)
- **Live-streaming playback** — audio starts playing during generation (8s prebuffer + 2s progressive chunks)
- **i18n RU / EN** interface, dark theme

Full feature list: **[App repo → README](https://github.com/timoncool/VoxCPM2_portable#features)** (or **[Russian](https://github.com/timoncool/VoxCPM2_portable/blob/main/README_RU.md)**).

## 🖥 Platform support

| Platform | Architecture | GPU | Status |
|---|---|---|---|
| Windows 10/11 | x86_64 | NVIDIA (GTX 10xx / RTX 20xx-50xx) | ✅ Full (torch 2.7.1 cu128 + triton-windows + Flash-Attn 2 cp312 on RTX 40xx/50xx) |
| Windows | x86_64 | AMD | ✅ via torch-directml |
| Windows | x86_64 | CPU only | ✅ Slow but works |
| Linux | x86_64 | NVIDIA | ✅ Full (torch 2.7.1 cu128 + triton + Flash-Attn 2 cp312) |
| Linux | aarch64 | NVIDIA (DGX Spark, Jetson) | ✅ torch 2.10.0 cu130 |
| Linux | x86_64 | AMD ROCm 6.3 | ✅ |
| macOS | Apple Silicon (M1-M4) | MPS | ✅ |
| macOS | Intel | CPU | ⚠ Legacy torch 2.2.2 |

**Minimum:** 8 GB VRAM on NVIDIA for comfortable generation. **Recommended:** RTX 3060+ with 12 GB VRAM.

## 📂 Where things live

After installation, everything lives inside the Pinokio launcher folder (nothing system-wide):

```
<pinokio_home>/api/VoxCPM2/
├── app/                  # Cloned VoxCPM2_portable repo
│   ├── app.py            # Gradio UI
│   ├── env/              # Python 3.12 venv (isolated)
│   ├── models/           # HF cache — VoxCPM2 ~4-5 GB, Parakeet ASR ~670 MB, Silero VAD
│   ├── voices/           # Voice pack (~100 default + 743 RU optional)
│   ├── lora/             # Trained LoRA checkpoints
│   ├── train_data/       # User LoRA datasets (audio + transcripts)
│   └── output/           # Generated audio (MP3 / WAV / FLAC / OGG)
├── pinokio.json / .js    # Launcher metadata + menu
├── install.js            # Install steps
├── torch.js              # Cross-platform PyTorch installer (7 branches)
├── start.js              # Launch Gradio
├── update.js / reset.js / link.js / open_folder.js
└── README.md (this file)
```

## 🧰 Menu items

- **Start** — launches Gradio on an auto-assigned port, waits for `Running on local URL: http://…`, surfaces **Open Web UI** button
- **Open Folder** submenu — jump to Generated Audio / Models Cache / Voice Pack / LoRA Checkpoints / Training Data
- **Update** — `git pull` launcher + app, then `uv pip install -r requirements.txt --upgrade`
- **Install** — re-run the installer
- **Save Disk Space** — dedupe pip wheels via `fs.link` symlinks across Pinokio apps
- **Reset** — remove the `app/` folder (keeps launcher files)

## 🔧 For launcher developers

This launcher follows the same pattern as **[ACE-Step-Studio-pinokio](https://github.com/timoncool/ACE-Step-Studio-pinokio)**:

- Schema `version: "6.0.0"`, standard Fontawesome icons only
- `requires: { bundle: "ai" }` — triggers Pinokio's CUDA + HF CLI + FFmpeg bundle install
- `venv_python: "3.12"` — required for the bundled Flash-Attn wheel (cp312)
- Regex capture pattern `/(https?:\/\/[a-zA-Z0-9.\-]+:[0-9]+)/` + `input.event[1]` for URL lock-on
- `NO_AUTO_BROWSER=true` env var — app.py honors this and skips Gradio's `inbrowser=True`
- Cross-platform `torch.js` with 7 branches (NVIDIA win/linux x64/linux aarch64 + AMD win/linux + Apple Silicon + Intel Mac + CPU fallback)

## 📜 License

MIT — see [LICENSE](LICENSE). The VoxCPM2 base model is MIT-licensed by OpenBMB.

## 💖 Support

If this saved you hours of dependency-juggling — consider a [donation](DONATE.md). Every coffee keeps the Windows wheels, RTX 50xx / Jetson branches, and the macOS builds flowing.

## 📊 Star History

<a href="https://star-history.com/#timoncool/VoxCPM2_portable-pinokio&timoncool/VoxCPM2_portable&Timeline">
  <img src="https://api.star-history.com/svg?repos=timoncool/VoxCPM2_portable-pinokio,timoncool/VoxCPM2_portable&type=Timeline" alt="Star History Chart" />
</a>
