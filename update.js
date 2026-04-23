module.exports = {
  run: [
    // Pull launcher itself
    {
      method: "shell.run",
      params: { message: "git pull" }
    },
    // Pull VoxCPM2_portable app
    {
      when: "{{exists('app')}}",
      method: "shell.run",
      params: {
        path: "app",
        message: "git pull"
      }
    },
    // Refresh Python deps (voxcpm may have new minor versions)
    {
      when: "{{exists('app/env')}}",
      method: "shell.run",
      params: {
        venv: "env",
        venv_python: "3.12",
        path: "app",
        message: ["uv pip install -r requirements.txt --upgrade"]
      }
    }
  ]
}
