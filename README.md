<div align="center">

# VoxCPM2 Portable — Pinokio launcher

**One-click cross-platform installer for [VoxCPM2 Portable](https://github.com/timoncool/VoxCPM2_portable) — multilingual TTS with Voice Design, Cloning & end-to-end LoRA from video/audio. ElevenLabs at home.**

[![Install on Pinokio](https://img.shields.io/badge/🚀_Install_on-Pinokio-7c3aed?style=for-the-badge)](https://pinokio.co/item?uri=https://github.com/timoncool/VoxCPM2_portable-pinokio)
[![Open in Pinokio](https://img.shields.io/badge/📂_Open_in-Pinokio-6d28d9?style=for-the-badge)](https://beta.pinokio.co/apps/github-com-timoncool-voxcpm2-portable-pinokio)
[![Main repo](https://img.shields.io/badge/App_Source-VoxCPM2__portable-24292e?style=for-the-badge&logo=github&logoColor=white)](https://github.com/timoncool/VoxCPM2_portable)
[![Donate](https://img.shields.io/badge/💖_Support-Donate-ff69b4?style=for-the-badge)](DONATE.md)

[![Stars](https://img.shields.io/github/stars/timoncool/VoxCPM2_portable-pinokio?style=flat-square&logo=github)](https://github.com/timoncool/VoxCPM2_portable-pinokio/stargazers)
[![License](https://img.shields.io/github/license/timoncool/VoxCPM2_portable-pinokio?style=flat-square)](LICENSE)
[![Last Commit](https://img.shields.io/github/last-commit/timoncool/VoxCPM2_portable-pinokio?style=flat-square)](https://github.com/timoncool/VoxCPM2_portable-pinokio/commits/main)
[![Issues](https://img.shields.io/github/issues/timoncool/VoxCPM2_portable-pinokio?style=flat-square)](https://github.com/timoncool/VoxCPM2_portable-pinokio/issues)
[![Code size](https://img.shields.io/github/languages/code-size/timoncool/VoxCPM2_portable-pinokio?style=flat-square)](https://github.com/timoncool/VoxCPM2_portable-pinokio)
[![Pinokio](https://img.shields.io/badge/Pinokio-topic-7c3aed?style=flat-square&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iI2ZmZiI+PGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMTAiLz48L3N2Zz4=)](https://pinokio.co/)

[![Windows](https://img.shields.io/badge/Windows-10/11-0078D6?style=flat-square&logo=windows&logoColor=white)](#platform-support-matrix)
[![Linux](https://img.shields.io/badge/Linux-x64_%2F_aarch64-FCC624?style=flat-square&logo=linux&logoColor=black)](#platform-support-matrix)
[![macOS](https://img.shields.io/badge/macOS-Apple_Silicon-000000?style=flat-square&logo=apple&logoColor=white)](#platform-support-matrix)
[![NVIDIA](https://img.shields.io/badge/NVIDIA-CUDA_12.8-76B900?style=flat-square&logo=nvidia&logoColor=white)](#platform-support-matrix)
[![AMD](https://img.shields.io/badge/AMD-DirectML_%2F_ROCm-ED1C24?style=flat-square&logo=amd&logoColor=white)](#platform-support-matrix)
[![Python](https://img.shields.io/badge/Python-3.12-3776AB?style=flat-square&logo=python&logoColor=white)](#)
[![PyTorch](https://img.shields.io/badge/PyTorch-2.7.1-EE4C2C?style=flat-square&logo=pytorch&logoColor=white)](#)
[![Gradio](https://img.shields.io/badge/Gradio-6.10-F97316?style=flat-square&logo=gradio&logoColor=white)](#)

</div>

This repository is the **Pinokio launcher** for [VoxCPM2 Portable](https://github.com/timoncool/VoxCPM2_portable) — the actual app lives there. This repo only contains the scripts that Pinokio runs to install, start, update and reset the app in an isolated cross-platform environment.

## Install

1. Download and install **[Pinokio](https://pinokio.co/)**
2. Open in Pinokio:
   - 🚀 **[Install (1-click)](https://pinokio.co/item?uri=https://github.com/timoncool/VoxCPM2_portable-pinokio)** — direct install URL
   - 📂 **[Browse app page](https://beta.pinokio.co/apps/github-com-timoncool-voxcpm2-portable-pinokio)** — catalog page on beta.pinokio.co
3. Click **Install** inside Pinokio — it will clone the app, create a Python 3.12 venv, install PyTorch (right build for your GPU), pull the 4-5 GB VoxCPM2 model on first generation

## What this launcher does

- Isolated Python `venv` with **Python 3.12** via uv — no system-wide installs
- PyTorch auto-selected by GPU/OS — CUDA 12.8 (NVIDIA x64), CUDA 13.0 (aarch64), DirectML (AMD Win), ROCm 6.3 (AMD Linux), MPS/CPU (macOS), CPU fallback
- **Flash-Attention 2** cp312 wheels on NVIDIA Win/Linux (auto-skipped on unsupported GPUs, graceful SDPA fallback)
- **Triton** + **xformers 0.0.31.post1** pinned for torch 2.7.1 compat
- Bundled Node.js + ffmpeg + CUDA from Pinokio's `ai` bundle (no separate downloads)
- Gradio auto-picks next free port via `kernel.port()` — no conflicts
- `NO_AUTO_BROWSER=true` env var — prevents duplicate system Chrome tab ([upstream patch](https://github.com/timoncool/VoxCPM2_portable/commit/828038aa8d0fb2ec63a7ffbd6b62fbee88e75218))
- Cross-platform env isolation: `HF_HOME`, `TRANSFORMERS_CACHE`, `TORCH_HOME`, `MODELSCOPE_CACHE`, `XDG_CACHE_HOME` all point inside the launcher folder
- Voice pack (~100 voices), VoxCPM2 model (~4-5 GB), Parakeet ASR (~670 MB, lazy) cached under `app/models`
- Cross-platform: Windows / Linux x64 & aarch64 / macOS ARM & Intel

## Launch modes

| Menu item | What it runs |
|-----------|--------------|
| **Start** | `python app.py` with Gradio on auto-assigned port, full 4-tab UI (TTS / Voice Design / Cloning / LoRA) |
| **Open Folder** | File explorer at Generated Audio / Models cache / Voice Pack / LoRA Checkpoints / Training Data |
| **Update** | `git pull` launcher + app, then `uv pip install -r requirements.txt --upgrade` |
| **Save Disk Space** | Dedup venv libraries via `fs.link` |
| **Reset** | Wipe `app/` folder (full pre-install state) |

## Platform support matrix

| OS | GPU | Status | Acceleration |
|---|---|---|---|
| Windows 10/11 | NVIDIA RTX 40xx–50xx | ✅ tested | CUDA 12.8 + Triton + Flash-Attn 2 cp312 |
| Windows 10/11 | NVIDIA RTX 20xx–30xx | ✅ expected | CUDA 12.8 + Triton + xformers (SDPA fallback) |
| Linux x64 | NVIDIA RTX 20xx–50xx | ✅ expected | CUDA 12.8 + Triton + Flash-Attn 2 cp312 |
| Linux aarch64 | NVIDIA DGX Spark / Jetson | ✅ expected | CUDA 13.0 |
| Windows | AMD RDNA3+ | ✅ expected | DirectML |
| Linux | AMD RDNA3+ | ✅ expected | ROCm 6.3 |
| macOS | Apple Silicon M1–M4 | ✅ expected | MPS |
| macOS | Intel | ⚠️ CPU-only | legacy torch 2.2.2 (no Intel-Mac wheels in newer torch) |
| Any | CPU only | ⚠️ very slow (minutes per phrase) | CPU |
| Win/Linux | NVIDIA GTX 10xx (Pascal) | ⚠️ Flash-Attn unavailable | CUDA 12.8 + SDPA only |

**Minimum:** 8 GB VRAM on NVIDIA for comfortable generation. **Recommended:** RTX 3060+ with 12 GB VRAM.

## Features (inside the app)

- **30 languages TTS** — RU / EN / ZH (+9 Chinese dialects) / AR / FR / DE / HI / IT / JA / KO / PT / ES + more
- **48 kHz studio output** via AudioVAE V2 super-resolution (16 → 48 kHz)
- **Voice Design** — create voices from text descriptions (gender, age, tone, emotion, pace, accent), zero-shot
- **Voice Cloning** — clone from 5-50 sec reference, ~100 voices bundled + 743 extra Russian voices on-demand
- **LoRA Auto Pipeline** — drop video/podcast → ffmpeg → Parakeet TDT ASR → sentence-aware split → auto-tune → training, one click
- **LoRA Manual Mode** — upload pre-cleaned clips + transcripts, official OpenBMB defaults
- **Hot-swap LoRAs** across TTS / Voice Design / Cloning without restart
- **MP3 / WAV / FLAC / OGG** output (MP3 default via bundled FFmpeg)
- **Live-streaming playback** — audio starts playing during generation
- **i18n RU / EN** interface, dark theme

Full feature list: **[App repo → README](https://github.com/timoncool/VoxCPM2_portable#features)** · **[Russian](https://github.com/timoncool/VoxCPM2_portable/blob/main/README_RU.md)**

## Links

- 🎙 **App source / issues** — [VoxCPM2_portable](https://github.com/timoncool/VoxCPM2_portable)
- 📰 **Changelog** — [CHANGELOG.md](https://github.com/timoncool/VoxCPM2_portable/blob/main/CHANGELOG.md)
- 🧠 **Base model** — [VoxCPM2 on HuggingFace](https://huggingface.co/openbmb/VoxCPM2) · [OpenBMB](https://github.com/OpenBMB)
- 🎧 **ASR** — [Parakeet TDT 0.6B v3 (NVIDIA NeMo)](https://huggingface.co/nvidia/parakeet-tdt-0.6b-v3)
- 🚀 **Pinokio** — [pinokio.co](https://pinokio.co/)
- 🎵 **Sister launcher** — [ACE-Step-Studio-pinokio](https://github.com/timoncool/ACE-Step-Studio-pinokio) (local AI music generation)

## Support This Project

I build software and do research in AI and music/voice generation. Most of what I create is free and open source. Your donations allow me to keep creating and exploring without worrying about where the next meal comes from =)

**[All donation methods](DONATE.md)** | [dalink.to/nerual_dreming](https://dalink.to/nerual_dreming) | [boosty.to/neuro_art](https://boosty.to/neuro_art)

- **BTC:** `1E7dHL22RpyhJGVpcvKdbyZgksSYkYeEBC`
- **ETH (ERC20):** `0xb5db65adf478983186d4897ba92fe2c25c594a0c`
- **USDT (TRC20):** `TQST9Lp2TjK6FiVkn4fwfGUee7NmkxEE7C`

## Author

- **Nerual Dreming** — [@timoncool](https://github.com/timoncool) · [Telegram](https://t.me/nerual_dreming) · [neuro-cartel.com](https://neuro-cartel.com) · [ArtGeneration.me](https://artgeneration.me)

## License

[MIT](LICENSE) — same as the main [VoxCPM2 Portable](https://github.com/timoncool/VoxCPM2_portable) project. Base model VoxCPM2 is MIT-licensed by OpenBMB.

---

<div align="center">

### Star History

<a href="https://www.star-history.com/?repos=timoncool%2FVoxCPM2_portable,timoncool%2FVoxCPM2_portable-pinokio&type=date&legend=top-left">
 <picture>
   <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/svg?repos=timoncool/VoxCPM2_portable,timoncool/VoxCPM2_portable-pinokio&type=date&theme=dark&legend=top-left" />
   <source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/svg?repos=timoncool/VoxCPM2_portable,timoncool/VoxCPM2_portable-pinokio&type=date&legend=top-left" />
   <img alt="Star History Chart" src="https://api.star-history.com/svg?repos=timoncool/VoxCPM2_portable,timoncool/VoxCPM2_portable-pinokio&type=date&legend=top-left" />
 </picture>
</a>

</div>
