const path = require('path')
module.exports = async (kernel) => {
  const port = await kernel.port()
  return {
    daemon: true,
    run: [
      {
        method: "shell.run",
        params: {
          venv: "env",
          venv_python: "3.12",
          path: "app",
          env: {
            // Gradio: port + localhost only + no analytics
            GRADIO_SERVER_PORT: `${port}`,
            GRADIO_SERVER_NAME: "127.0.0.1",
            GRADIO_ANALYTICS_ENABLED: "False",
            GRADIO_TEMP_DIR: "{{path.resolve(cwd, 'app/temp')}}",

            // Tell app.py not to open system browser — Pinokio opens its own tab
            NO_AUTO_BROWSER: "true",

            // HuggingFace / Transformers cache → local `models/`
            HF_HOME:               "{{path.resolve(cwd, 'app/models')}}",
            HUGGINGFACE_HUB_CACHE: "{{path.resolve(cwd, 'app/models')}}",
            TRANSFORMERS_CACHE:    "{{path.resolve(cwd, 'app/models')}}",
            HF_DATASETS_CACHE:     "{{path.resolve(cwd, 'app/models/datasets')}}",
            HF_HUB_ENABLE_HF_TRANSFER: "1",

            // Torch cache
            TORCH_HOME: "{{path.resolve(cwd, 'app/models/torch')}}",

            // ModelScope cache (voxcpm ZipEnhancer / FunASR)
            MODELSCOPE_CACHE: "{{path.resolve(cwd, 'app/models/modelscope')}}",

            // Generic XDG cache
            XDG_CACHE_HOME: "{{path.resolve(cwd, 'app/cache')}}",

            // Python runtime
            PYTHONIOENCODING: "utf-8",
            PYTHONUNBUFFERED: "1",
            PYTHONPATH: "{{path.resolve(cwd, 'app')}}",
            TOKENIZERS_PARALLELISM: "false"
          },
          message: ["python app.py"],
          on: [{
            event: "/(https?:\\/\\/[a-zA-Z0-9.\\-]+:[0-9]+)/",
            done: true
          }]
        }
      },
      {
        method: "local.set",
        params: {
          url: "{{input.event[1]}}"
        }
      }
    ]
  }
}
