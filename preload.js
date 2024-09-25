import { contextBridge } from 'electron/renderer'

contextBridge.exposeInMainWorld('versions', {
  node: () => import.meta.env.versions.node,
  chrome: () => import.meta.env.versions.chrome,
  electron: () => import.meta.env.versions.electron
})
