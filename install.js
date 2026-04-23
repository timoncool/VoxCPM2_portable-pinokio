module.exports = {
  // Triggers Pinokio to install local AI prerequisites (CUDA on NVIDIA, Hugging Face CLI, ffmpeg, etc.)
  // before this script runs. Required for any launcher that runs local AI models.
  requires: {
    bundle: "ai"
  },
  run: [
    // 1. Clone VoxCPM2_portable into app/
    {
      when: "{{!exists('app')}}",
      method: "shell.run",
      params: {
        message: ["git clone https://github.com/timoncool/VoxCPM2_portable app"]
      }
    },

    // 2. PyTorch + triton + flash-attn via torch.js (cross-platform; torch 2.7.1 + cu128 on NVIDIA).
    //    voxcpm pulls in transformers/accelerate which depend on torch — install torch first.
    {
      method: "script.start",
      params: {
        uri: "torch.js",
        params: {
          venv: "env",
          venv_python: "3.12",
          path: "app",
          triton: true,
          flashattention: true
        }
      }
    },

    // 3. VoxCPM2 Python deps (voxcpm, gradio, onnx-asr, etc.).
    {
      method: "shell.run",
      params: {
        venv: "env",
        venv_python: "3.12",
        path: "app",
        message: [
          "uv pip install -r requirements.txt"
        ]
      }
    },

    // 4. xformers pinned to 0.0.31.post1 — the only version compatible with torch 2.7.1.
    //    Without the pin, pip installs latest (0.0.35) which forces torch 2.11 and breaks the stack.
    //    NVIDIA GPUs only; skipped elsewhere. Graceful failure — app still runs via SDPA.
    {
      when: "{{gpu === 'nvidia'}}",
      method: "shell.run",
      params: {
        venv: "env",
        venv_python: "3.12",
        path: "app",
        message: [
          "{{ platform === 'win32' ? 'uv pip install xformers==0.0.31.post1 || ver>nul' : 'uv pip install xformers==0.0.31.post1 || true' }}"
        ]
      }
    },

    // 5. Done
    {
      method: "input",
      params: {
        title: "Installation complete",
        description: "Click <strong>Start</strong> in the sidebar to launch VoxCPM2. The base model (~4-5 GB) downloads automatically on first TTS generation. Parakeet ASR (~670 MB) is lazy-loaded on first LoRA auto-prepare."
      }
    }
  ]
}
