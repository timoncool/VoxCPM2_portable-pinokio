const path = require('path')
module.exports = {
  version: "6.0.0",
  title: "VoxCPM2 Portable",
  description: "ElevenLabs at home. Multilingual TTS with Voice Design, Voice Cloning, and end-to-end LoRA fine-tuning straight from a video or podcast. Built on VoxCPM2 by OpenBMB. 30 languages incl. Russian.",
  icon: "icon.jpg",
  menu: async (kernel, info) => {
    let installed = info.exists("app/env")
    let running = {
      install: info.running("install.js"),
      start:   info.running("start.js"),
      update:  info.running("update.js"),
      reset:   info.running("reset.js"),
      link:    info.running("link.js"),
    }

    if (running.install) {
      return [{
        default: true,
        icon: "fa-solid fa-plug",
        text: "Installing",
        href: "install.js",
      }]
    }

    if (installed) {
      if (running.start) {
        const local = info.local("start.js")
        if (local && local.url) {
          return [
            { default: true, icon: "fa-solid fa-rocket", text: "Open Web UI", href: local.url },
            { icon: "fa-solid fa-terminal", text: "Terminal", href: "start.js" },
          ]
        }
        return [{
          default: true,
          icon: "fa-solid fa-terminal",
          text: "Terminal",
          href: "start.js",
        }]
      }

      if (running.update) {
        return [{ default: true, icon: "fa-solid fa-terminal", text: "Updating", href: "update.js" }]
      }
      if (running.reset) {
        return [{ default: true, icon: "fa-solid fa-terminal", text: "Resetting", href: "reset.js" }]
      }
      if (running.link) {
        return [{ default: true, icon: "fa-solid fa-terminal", text: "Deduplicating", href: "link.js" }]
      }

      return [
        { icon: "fa-solid fa-power-off", text: "Start", href: "start.js" },
        { icon: "fa-solid fa-folder-open", text: "Open Folder",
          menu: [
            { icon: "fa-solid fa-music",    text: "Generated Audio", href: "open_folder.js", params: { path: "app/output" } },
            { icon: "fa-solid fa-brain",    text: "Models Cache",    href: "open_folder.js", params: { path: "app/models" } },
            { icon: "fa-solid fa-microphone", text: "Voice Pack",    href: "open_folder.js", params: { path: "app/voices" } },
            { icon: "fa-solid fa-dna",      text: "LoRA Checkpoints", href: "open_folder.js", params: { path: "app/lora" } },
            { icon: "fa-solid fa-database", text: "Training Data",   href: "open_folder.js", params: { path: "app/train_data" } },
          ]
        },
        { icon: "fa-solid fa-rotate", text: "Update", href: "update.js" },
        { icon: "fa-solid fa-plug",   text: "Install", href: "install.js" },
        {
          icon: "fa-solid fa-file-zipper",
          text: "<div><strong>Save Disk Space</strong><div>Deduplicate redundant library files</div></div>",
          href: "link.js",
        },
        {
          icon: "fa-regular fa-circle-xmark",
          text: "<div><strong>Reset</strong><div>Revert to pre-install state</div></div>",
          href: "reset.js",
          confirm: "Are you sure you wish to reset the app? This removes all installed deps.",
        },
      ]
    }

    return [{
      default: true,
      icon: "fa-solid fa-plug",
      text: "Install",
      href: "install.js",
    }]
  }
}
