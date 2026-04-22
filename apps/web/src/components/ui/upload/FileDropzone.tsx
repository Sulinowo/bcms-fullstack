import { useId, type ChangeEvent } from 'react'

export type FileDropzoneProps = {
  /** Wartość atrybutu `accept` inputa file */
  accept?: string
  multiple?: boolean
  description?: string
  onFilesSelected?: (files: File[]) => void
  id?: string
}

/**
 * Szkielet uploadu: wybór pliku + callback.
 * Walidacja rozmiaru / typu — przy integracji z API.
 */
export function FileDropzone({
  accept,
  multiple,
  description = 'PDF, JPG lub PNG — max rozmiar ustalisz przy podpinaniu API.',
  onFilesSelected,
  id: idProp,
}: FileDropzoneProps) {
  const uid = useId().replace(/:/g, '')
  const id = idProp ?? `file-drop-${uid}`

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const list = e.target.files
    if (!list?.length) return
    onFilesSelected?.(multiple ? Array.from(list) : [list[0]!])
    e.target.value = ''
  }

  return (
    <label
      htmlFor={id}
      className="flex cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-frame bg-surface-container-low/60 px-6 py-10 text-center transition hover:border-primary hover:bg-surface-container-low dark:border-zinc-600"
    >
      <input
        id={id}
        type="file"
        className="sr-only"
        accept={accept}
        multiple={multiple}
        onChange={onChange}
      />
      <span className="text-sm font-semibold text-on-surface">
        Upuść plik tutaj albo kliknij, aby wybrać
      </span>
      <span className="max-w-sm text-xs text-secondary">{description}</span>
    </label>
  )
}
